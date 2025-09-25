import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import SelectLang from "../components/SelectLang";
import { useSettings } from "../context/SettingsContext";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { mode, toggleMode } = useSettings();

  //   useEffect(() => {
  //     if (user) navigate("/dashboard");
  //   }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2.5,
        px: 4,
      }}
    >
      <LoginForm />
      <SelectLang />
      <button onClick={toggleMode}>{mode}</button>
    </Box>
  );
}
