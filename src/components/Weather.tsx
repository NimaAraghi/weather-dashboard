import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { getTodayWeather } from "../services/weather";
import { useCity } from "../context/CityContext";
import { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { neutral } from "../theme/colors";
import { formatDate } from "../lib/formmater";
import { useSettings } from "../context/SettingsContext";
import type { TodayWeather } from "../types/api";
import { imageUrl, roundTemp, unixDate } from "../lib/helpers";
import { useTranslation } from "react-i18next";

export default function Weather() {
  const [data, setData] = useState<TodayWeather | null>(null);
  const { city } = useCity();
  const { lang } = useSettings();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await getTodayWeather(city.lat, city.lon, lang);

        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeather();
  }, [city, lang]);

  if (!data) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        py: 2.5,
        px: 3,
        height: 240,
      }}
    >
      {/* right */}
      <Stack direction='row' justifyContent='space-between'>
        <Stack alignItems='start' justifyContent='space-between'>
          <Chip
            icon={<LocationOnIcon color='inherit' />}
            label={data.name}
            sx={{
              bgcolor: neutral[300],
              color: neutral[800],
              px: 1,
              fontWeight: 600,
            }}
          />
          <Box>
            <Typography variant='h4' fontWeight='bold'>
              {formatDate(
                unixDate(data.dt),
                lang === "fa" ? "fa-IR" : "en-US",
                "day"
              )}
            </Typography>
            <Stack direction='row' spacing={2}>
              <Typography variant='body2'>
                {formatDate(
                  unixDate(data.dt),
                  lang === "fa" ? "fa-IR" : "en-US",
                  "fullDate"
                )}
              </Typography>
              <Typography variant='body2'>
                {formatDate(
                  unixDate(data.dt),
                  lang === "fa" ? "fa-IR" : "en-US",
                  "time"
                )}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography variant='h3' fontWeight='bold'>
              {roundTemp(data.main.temp)}°C
            </Typography>
            <Typography variant='body2'>
              {`${t("high")}: ${roundTemp(data.main.temp_max)} ${t(
                "low"
              )}: ${roundTemp(data.main.temp_min)}`}
            </Typography>
          </Box>
        </Stack>

        {/* left */}
        <Stack alignItems=''>
          <img
            style={{
              maxWidth: 155,
            }}
            src={imageUrl(data.weather[0].icon)}
          />
          <Box>
            <Typography fontWeight='bold' variant='h4'>
              {data.weather[0].description}
            </Typography>
            <Typography>
              {lang === "fa"
                ? `${roundTemp(data.main.feels_like)} ${t("feelsLike")}`
                : `${t("feelsLike")} ${roundTemp(data.main.feels_like)}`}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
}
