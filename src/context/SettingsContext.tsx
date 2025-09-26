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
import { CacheProvider } from "@emotion/react";
import { ltrCache, rtlCache } from "../theme/dirCache";

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
  const [mode, setMode] = useState<Mode>(
    (localStorage.getItem("mode") as Mode) || "light"
  );
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem("lang") as Language) || "en"
  );

  const theme = useMemo(() => createAppTheme(mode, lang), [mode, lang]);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("mode", newMode);

      return newMode;
    });
  };
  const toggleLang = () =>
    setLang((prev) => {
      const newLang = prev === "en" ? "fa" : "en";
      localStorage.setItem("lang", newLang);
      i18next.changeLanguage(newLang);

      return newLang;
    });

  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    console.log(lang);
  }, [lang]);

  return (
    <settingsContext.Provider value={{ mode, lang, toggleMode, toggleLang }}>
      <CacheProvider value={lang === "fa" ? rtlCache : ltrCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </settingsContext.Provider>
  );
}

export const useSettings = () => useContext(settingsContext);
