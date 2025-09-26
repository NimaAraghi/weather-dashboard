import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function getCities(q: string) {
  return axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=7&appid=${API_KEY}`
  );
}
