import { Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LocationSelector from "./LocationSelector";
import Settings from "./Settings";

export default function Header() {
  const { t } = useTranslation();

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "transparent",
        px: 3,
        py: 1.5,
      }}
    >
      <Stack
        direction='row'
        sx={{
          alignItems: "center",
          gap: 2,
        }}
      >
        <img src='/src/assets/logo.png' alt='' />
        <Typography>{t("weatherDashboard")}</Typography>
      </Stack>
      <Stack
        direction='row'
        sx={{
          alignItems: "center",
          gap: 2,
        }}
      >
        <LocationSelector />
        <Settings />
      </Stack>
    </Paper>
  );
}
