export type ImageUrl =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n";

export function imageUrl(image: ImageUrl) {
  let img: string;

  switch (image) {
    case "01d":
    case "01n":
      img = "sun.png";
      break;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      img = "cloud.png";
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      img = "rain.png";
      break;
    case "11d":
    case "11n":
      img = "storm.png";
      break;
    default:
      img = "sun.png";
  }

  return `/src/assets/${img}`;
}

export function unixDate(unidxTime: number) {
  return new Date(unidxTime * 1000);
}

export function roundTemp(temp: number) {
  return Math.round(temp);
}
