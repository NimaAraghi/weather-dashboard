import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Divider,
  IconButton,
  ListItemText,
  Menu,
  MenuList,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { logout } = useAuth();
  const { mode, lang, toggleLang, toggleMode } = useSettings();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        color='info'
        sx={{
          border: 1,
          borderRadius: 3,
        }}
        onClick={handleOpen}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <Paper>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              sx: {
                borderRadius: 2,
                minWidth: 200,
                px: 2,
              },
            },
          }}
        >
          <MenuList>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <ListItemText primary={t("mode")} />
              <ToggleButtonGroup
                color='primary'
                value={mode}
                exclusive
                onChange={toggleMode}
                sx={{ width: "100%" }}
              >
                <ToggleButton
                  disabled={mode === "light"}
                  value='light'
                  sx={{ flex: 1 }}
                >
                  <LightModeOutlinedIcon fontSize='small' sx={{ mr: 1 }} />
                  {t("lightMode")}
                </ToggleButton>
                <ToggleButton
                  disabled={mode === "dark"}
                  value='dark'
                  sx={{ flex: 1 }}
                >
                  <DarkModeOutlinedIcon fontSize='small' sx={{ mr: 1 }} />
                  {t("darkMode")}
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <ListItemText primary={t("language")} />
              <ToggleButtonGroup
                color='primary'
                value={lang}
                exclusive
                onChange={toggleLang}
                sx={{ width: "100%" }}
              >
                <ToggleButton
                  disabled={lang === "en"}
                  value='en'
                  sx={{ flex: 1 }}
                >
                  English
                </ToggleButton>
                <ToggleButton
                  disabled={lang === "fa"}
                  value='fa'
                  sx={{ flex: 1 }}
                >
                  فا
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Button
              onClick={logout}
              fullWidth
              variant='text'
              color='error'
              sx={{ justifyContent: "start" }}
              startIcon={<LogoutIcon />}
            >
              {t("logout")}
            </Button>
          </MenuList>
        </Menu>
      </Paper>
    </>
  );
}
