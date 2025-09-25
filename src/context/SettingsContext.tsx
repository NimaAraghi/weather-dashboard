import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Language, Mode } from "../types/settings";
import { createAppTheme } from "../theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import i18next from "i18next";

interface SettingsContextType {
  mode: Mode;
  lang: Language;
  toggleMode: () => void;
  toggleLang: () => void;
}

const settingsContext = createContext<SettingsContextType>({
  mode: "light",
  lang: "en",
  toggleMode: () => {},
  toggleLang: () => {},
});

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("light");
  const [lang, setLang] = useState<Language>("en");

  const theme = useMemo(() => createAppTheme(mode, lang), [mode, lang]);

  const toggleMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLang = () =>
    setLang((prev) => {
      const newLang = prev === "en" ? "fa" : "en";
      i18next.changeLanguage(newLang);
      return newLang;
    });

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  }, [lang]);

  return (
    <settingsContext.Provider value={{ mode, lang, toggleMode, toggleLang }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </settingsContext.Provider>
  );
}

export const useSettings = () => useContext(settingsContext);
