import { createTheme } from "@mui/material/styles";
import type { Language, Mode } from "../types/settings";
import { blue, green, neutral, orange, red, tslBlue } from "./colors";

export const createAppTheme = (mode: Mode, lang: Language) =>
  createTheme({
    direction: lang === "fa" ? "rtl" : "ltr",
    palette: {
      mode,
      secondary: {
        main: mode === "light" ? neutral[50] : "#292f45",
      },

      error: { main: red[500] },
      warning: { main: orange[500] },
      success: { main: green[500] },
      info: { main: blue[500] },
      background: {
        default: mode === "light" ? tslBlue[50] : "#151D32",
        paper: mode === "light" ? neutral[200] : "#292F45",
      },
      text: {
        primary: mode === "light" ? tslBlue[900] : neutral[50],
        secondary: mode === "light" ? neutral[700] : neutral[200],
      },
    },
    typography: {
      fontFamily:
        lang === "en" ? "Arial, sans-serif" : "Vazirmatn, Tahoma, sans-serif",
    },
  });
