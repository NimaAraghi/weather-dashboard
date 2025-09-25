import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthPovider } from "./context/AuthContext.tsx";
import "./i18n/config.ts";
import { SettingsProvider } from "./context/SettingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthPovider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </AuthPovider>
    </BrowserRouter>
  </StrictMode>
);
