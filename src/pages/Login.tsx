import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSettings } from "../context/SettingsContext";
import LanguageSelector from "../components/LanguageSelector";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { mode, toggleMode } = useSettings();

  // useEffect(() => {
  //   if (user) navigate("/dashboard");
  // }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2.5,
        p: 4,
      }}
    >
      <LoginForm />
      <LanguageSelector />
      <button onClick={toggleMode}>{mode}</button>
    </Box>
  );
}
