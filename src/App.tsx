import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/authContext";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={user ? <Dashboard /> : <Login />} />
      <Route path='*' element={<Login />} />
    </Routes>
  );
}
