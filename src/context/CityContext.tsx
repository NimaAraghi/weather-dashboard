import { createContext, useContext, useState, type ReactNode } from "react";
import type { CityOption } from "../types/city";

interface CityContextType {
  city: CityOption;
  setCity: (city: CityOption) => void;
}

const cityContext = createContext<CityContextType>({
  city: {
    name: "",
    country: "",
    lat: 0,
    lon: 0,
  },
  setCity: () => {},
});

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState<CityOption>({
    name: "Tehran",
    country: "IR",
    lat: 35.6892523,
    lon: 51.3896004,
  });

  return (
    <cityContext.Provider value={{ city, setCity }}>
      {children}
    </cityContext.Provider>
  );
}

export const useCity = () => useContext(cityContext);
