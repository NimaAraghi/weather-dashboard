import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function SelectLang() {
  const [lang, setLang] = useState("en");

  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Language</InputLabel>
      <Select
        onChange={(e) => setLang(e.target.value)}
        value={lang}
        label='Language'
      >
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='fa'>فارسی</MenuItem>
      </Select>
    </FormControl>
  );
}
