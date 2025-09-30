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
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={(theme) => ({
        px: 2,
        py: 4,
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(90deg,rgba(243, 250, 254, 1) 0%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%)"
            : "linear-gradient(90deg,rgba(41, 47, 69, 1) 0%, rgba(63, 72, 97, 1) 50%, rgba(21, 29, 50, 1) 100%)",
      })}
    >
      <Stack spacing={2} alignItems='center' direction='row'>
        <img src='/src/assets/nadin-soft.png' width={50} height={50} />
        <Typography>{t("rights")}</Typography>
      </Stack>

      <Stack direction='row' spacing={2}>
        <Stack spacing={0.5} alignItems='center' direction='row'>
          <EmailOutlinedIcon />
          <Typography>{t("contact")}:</Typography>
          <Link href='mailto: info@nadin.ir' underline='none'>
            info@nadin.ir
          </Link>
        </Stack>

        <Stack spacing={0.5} alignItems='center' direction='row'>
          <CalendarMonthOutlinedIcon />
          <Typography>
            {formatDate(new Date(), lang === "fa" ? "fa-IR" : "en-US", "long")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
