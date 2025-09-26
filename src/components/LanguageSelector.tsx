import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSettings } from "../context/SettingsContext";
import { useTranslation } from "react-i18next";

export default function SelectLang() {
  const { lang, toggleLang } = useSettings();
  const { t } = useTranslation();

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{t("language")}</InputLabel>
      <Select onChange={toggleLang} value={lang} label={t("language")}>
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='fa'>فارسی</MenuItem>
      </Select>
    </FormControl>
  );
}
