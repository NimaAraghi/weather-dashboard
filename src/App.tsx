import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";
import { Box } from "@mui/material";

export default function App() {
  const { user } = useAuth();

  return (
    <Box>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </Box>
  );
}
