import { useCity } from "../context/CityContext";
import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { getTwoWeeksPrediction } from "../services/weather";
import { useEffect, useState } from "react";
import type { WeatherPrediction } from "../types/api";
import { formatDate } from "../lib/formmater";
import { roundTemp, unixDate } from "../lib/helpers";
import { useSettings } from "../context/SettingsContext";

export default function TemperatureChart() {
  const [data, setData] = useState<WeatherPrediction[] | null>(null);
  const { city } = useCity();
  const { lang } = useSettings();

  useEffect(() => {
    async function fetchForecast() {
      const res = await getTwoWeeksPrediction(city.lat, city.lon, lang);
      setData(res);
    }
    fetchForecast();
  }, [city, lang]);

  if (!data) return null;

  console.log(data);

  const chartData = data.map((d) => ({
    month: formatDate(
      unixDate(d.dt),
      lang === "fa" ? "fa-IR" : "en-US",
      "month"
    ),
    temp: roundTemp(d.main.temp),
  }));

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 6,
        py: 2.5,
        px: 3,
        height: "100%",
      }}
    >
      <Typography variant='h6' sx={{ mb: 2, fontWeight: "bold" }}>
        Average Monthly Temperature
      </Typography>

      <ResponsiveContainer width='100%' height={160}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id='areaColor'>
              <stop offset='0%' stopColor='#4CDFE8' stopOpacity={0.8} />
              <stop offset='50%' stopColor='#7947F7' stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray='3 3' />

          <XAxis dataKey='month' axisLine={false} tickLine={false} />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            domain={[0, 40]}
            tickFormatter={(v) => `${v}°C`}
            tickCount={5}
          />

          <Tooltip formatter={(v) => `${v}°C`} />

          <Area
            type='linear'
            dataKey='temp'
            fill='url(#areaColor)'
            fillOpacity={0.15}
          />

          <Line
            type='linear'
            stroke='url(#areaColor)'
            dataKey='temp'
            strokeWidth={3}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
