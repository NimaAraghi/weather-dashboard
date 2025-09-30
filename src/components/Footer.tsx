import { Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { formatDate } from "../lib/formmater";
import { useSettings } from "../context/SettingsContext";

export default function Footer() {
  const { t } = useTranslation();
  const { lang } = useSettings();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent='space-between'
      spacing={{ xs: 3, sm: 0 }}
      sx={(theme) => ({
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 4 },
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(90deg,rgba(243, 250, 254, 1) 0%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%)"
            : "linear-gradient(90deg,rgba(41, 47, 69, 1) 0%, rgba(63, 72, 97, 1) 50%, rgba(21, 29, 50, 1) 100%)",
      })}
    >
      <Stack
        spacing={2}
        alignItems='center'
        direction='row'
        sx={{ mb: { xs: 2, sm: 0 } }}
      >
        <img src='/src/assets/nadin-soft.png' width={40} height={40} />
        <Typography variant='body2'>{t("rights")}</Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1.5, sm: 2 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Stack spacing={0.5} alignItems='center' direction='row'>
          <EmailOutlinedIcon fontSize='small' />
          <Typography variant='body2'>{t("contact")}:</Typography>
          <Link href='mailto:info@nadin.ir' underline='none'>
            info@nadin.ir
          </Link>
        </Stack>

        <Stack spacing={0.5} alignItems='center' direction='row'>
          <CalendarMonthOutlinedIcon fontSize='small' />
          <Typography variant='body2'>
            {formatDate(new Date(), lang === "fa" ? "fa-IR" : "en-US", "long")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
