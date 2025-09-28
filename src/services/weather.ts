import axios from "axios";
import type { Language } from "../types/settings";

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
  lang: Language = "en",
  cnt = 14
) {
  return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: {
      lat,
      lon,
      lang,
      cnt,
      units: "metric", // or "imperial"
      appid: API_KEY,
    },
  });
}
