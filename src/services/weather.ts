import axios from "axios";
import type { Language } from "../types/settings";
import type { WeatherPrediction } from "../types/api";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function getCities(q: string) {
  return axios.get("https://api.openweathermap.org/geo/1.0/direct", {
    params: {
      q,
      limit: 7,
      appid: API_KEY,
    },
  });
}

export async function getTodayWeather(
  lat: number,
  lon: number,
  lang: Language = "en"
) {
  return axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat,
      lon,
      units: "metric",
      lang,
      appid: API_KEY,
    },
  });
}

export async function getTwoWeeksPrediction(
  lat: number,
  lon: number,
  lang: Language = "en"
) {
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        lang,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  const data = res.data.list;

  // Pick only one entry per day (around noon)
  let daily: WeatherPrediction[];
  daily = [
    data[0],
    ...data.filter((item: any) => item.dt_txt.includes("12:00:00")),
  ];

  return daily; // will give you 5 objects, one for each day
}
