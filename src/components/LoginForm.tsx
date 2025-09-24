import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FormEvent } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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

        borderRadius: 4,
      }}
    >
      <Stack direction='row'>
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
                  Login
                </Typography>
                <TextField
                  fullWidth
                  error={error}
                  helperText={error ? "Please enter a valid name" : ""}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  label='Name'
                  variant='outlined'
                  placeholder='Enter Your Name'
                />
              </Box>
              <Button variant='contained' type='submit' fullWidth>
                Login
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
            src='/src/assets/login.png'
            alt='Login Illustration'
            style={{
              borderRadius: "0 16px 16px 0",
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
}
