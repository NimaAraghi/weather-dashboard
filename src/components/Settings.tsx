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
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { tslBlue } from "../theme/colors";

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
        sx={{
          border: 1,
          borderRadius: 3,
          color: open ? tslBlue[500] : "#BBC1C4",
          bgcolor: open ? tslBlue[100] : "transparent",
        }}
        onClick={handleOpen}
      >
        <SettingsOutlinedIcon />
      </IconButton>
      <Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
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
                size='small'
                color='info'
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
                size='small'
                color='info'
                value={lang}
                exclusive
                onChange={toggleLang}
                sx={{ width: "100%" }}
              >
                <ToggleButton
                  disabled={lang === "en"}
                  value='en'
                  sx={{ flex: 1, fontFamily: "Arial" }}
                >
                  En
                </ToggleButton>
                <ToggleButton
                  disabled={lang === "fa"}
                  value='fa'
                  sx={{ flex: 1, fontFamily: "Vazirmatn" }}
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
      </Box>
    </>
  );
}
