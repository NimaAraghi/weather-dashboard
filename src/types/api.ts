import type { ImageUrl } from "../lib/helpers";

export interface TodayWeather {
  weather: {
    main: string;
    description: string;
    icon: ImageUrl;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  dt: number;
  name: string;
}
