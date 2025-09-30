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
import { neutral } from "../theme/colors";
import { useTranslation } from "react-i18next";

export default function TemperatureChart() {
  const [data, setData] = useState<WeatherPrediction[] | null>(null);
  const { city } = useCity();
  const { lang, mode } = useSettings();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchForecast() {
      try {
        const res = await getTwoWeeksPrediction(city.lat, city.lon, lang);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchForecast();
  }, [city, lang]);

  if (!data) return null;

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
        {t("average")}
      </Typography>

      <ResponsiveContainer width='100%' height={160}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id='areaColor'>
              <stop offset='0%' stopColor='#4CDFE8' stopOpacity={0.8} />
              <stop offset='70%' stopColor='#7947F7' stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray='3 3' />

          <XAxis
            dataKey='month'
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: "bold",
              fill: mode === "dark" ? "#fff" : "#000",
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 40]}
            tickFormatter={(v) => `${v}°C`}
            tickCount={5}
            tick={{
              fontSize: 12,
              fontWeight: "bold",
              fill: mode === "dark" ? "#fff" : "#000",
            }}
          />

          <Tooltip
            formatter={(v) => `${v}°C`}
            contentStyle={{
              backgroundColor: mode === "dark" ? "#151D32" : neutral[300],
              color: mode === "dark" ? "#fff" : "#000",
              border: "none",
              borderRadius: 10,
            }}
          />

          <Area
            type='linear'
            dataKey='temp'
            fill='url(#areaColor)'
            fillOpacity={0.15}
            tooltipType='none'
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
