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
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", sm: "center" },
        bgcolor: "transparent",
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 1.5 },
        gap: { xs: 1.5, sm: 0 },
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        spacing={1.5}
        sx={{ mb: { xs: 1.5, sm: 0 } }}
      >
        <img
          src='/src/assets/logo.png'
          alt='logo'
          style={{ width: 40, height: 40 }}
        />
        <Typography variant='h6'>{t("weatherDashboard")}</Typography>
      </Stack>

      <Stack
        direction='row'
        alignItems='center'
        spacing={2}
        sx={{
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "space-between", sm: "flex-end" },
        }}
      >
        <LocationSelector />
        <Settings />
      </Stack>
    </Paper>
  );
}
