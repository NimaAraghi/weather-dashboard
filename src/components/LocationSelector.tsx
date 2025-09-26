import { Autocomplete, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useCity } from "../context/CityContext";
import { useState } from "react";
import type { CityOption } from "../types/city";
import { getCities } from "../services/weather";
import { useSettings } from "../context/SettingsContext";

export default function LocationSelector() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const { city, setCity } = useCity();
  const { lang } = useSettings();

  async function fetchCities(q = "Tehran") {
    if (!q.trim()) return;

    setLoading(true);

    try {
      const res = await getCities(q);

      const cities: CityOption[] = res.data.map((c: any) => ({
        name: lang === "fa" ? c.local_names?.fa || c.name : c.name,
        country: c.country,
        lat: c.lat,
        lon: c.lon,
      }));

      console.log(cities);

      setOptions(cities);
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={options}
      loading={loading}
      getOptionLabel={(option) => option.name}
      onInputChange={(_, value) => {
        setQuery(value);
        fetchCities(value);
      }}
      inputValue={query}
      value={city}
      onChange={(_, value) => value && setCity(value)}
      getOptionKey={(option) => `${option.lon}${option.lat}`}
      renderInput={(params) => (
        <TextField {...params} label={t("locationSelectLable")} />
      )}
    />
  );
}
