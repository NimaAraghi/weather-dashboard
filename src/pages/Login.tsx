import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import SelectLang from "../components/SelectLang";

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

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
        bgcolor: "grey.100",
        px: 4,
      }}
    >
      <LoginForm />
      <SelectLang />
    </Box>
  );
}
