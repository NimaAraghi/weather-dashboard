import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LocationSelector() {
  const { t } = useTranslation();

  return (
    <FormControl variant='outlined' sx={{ m: 1, minWidth: 295 }}>
      <InputLabel>{t("locationSelectLable")}</InputLabel>
      <Select label={t("locationSelectLable")} defaultValue='en'>
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='fa'>فارسی</MenuItem>
      </Select>
    </FormControl>
  );
}
