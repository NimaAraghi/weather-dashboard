import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSettings } from "../context/SettingsContext";

export default function SelectLang() {
  const { lang, toggleLang } = useSettings();

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Language</InputLabel>
      <Select onChange={() => toggleLang()} value={lang} label='Language'>
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='fa'>فارسی</MenuItem>
      </Select>
    </FormControl>
  );
}
