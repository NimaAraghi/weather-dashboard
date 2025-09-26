import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import { useSettings } from "../context/SettingsContext";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState<boolean>(false);
  const { mode, lang } = useSettings();
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError(true);
      return;
    }

    login(name);
    navigate("/dashboard");
  }

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 960,
        width: { xs: "100%", sm: 360, md: "100%" },
        height: { xs: 320, md: "100%" },
        borderRadius: 4,
      }}
    >
      <Stack direction='row' height='100%'>
        {/* Form Section */}
        <Box
          sx={{
            py: "10%",
            px: "5%",
            width: "100%",
          }}
        >
          <form style={{ height: "100%" }} onSubmit={handleSubmit}>
            <Stack sx={{ justifyContent: "space-between", height: "100%" }}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant='h5'
                  mb={2}
                  textAlign='center'
                >
                  {t("login")}
                </Typography>
                <TextField
                  fullWidth
                  error={error}
                  helperText={error ? t("nameInputError") : ""}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  label={t("name")}
                  variant='outlined'
                  placeholder={t("nameInput")}
                />
              </Box>
              <Button variant='contained' type='submit' fullWidth>
                {t("login")}
              </Button>
            </Stack>
          </form>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <img
            src={`/src/assets/${mode === "light" ? "login" : "login-dark"}.png`}
            alt='Login Illustration'
            style={{
              borderRadius: lang === "en" ? "0 16px 16px 0" : "16px 0 0 16px",
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
