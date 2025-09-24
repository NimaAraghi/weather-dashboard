import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  user: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthPovider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  function login(name: string) {
    localStorage.setItem("user", name);
    setUser(name);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
