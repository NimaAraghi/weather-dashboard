import { useCity } from "../context/CityContext";
import { Button } from "@mui/material";
import { getTwoWeeksPrediction } from "../services/weather";
import { useEffect } from "react";

export default function TemperatureChart() {
  const { city } = useCity();

  useEffect(() => {
    async function fetchMonthlyTemperature() {
      const res = await getTwoWeeksPrediction(city.lat, city.lon, 12);
    }

    fetchMonthlyTemperature();
  }, [city]);

  return <Button>TempertureChart</Button>;
}
