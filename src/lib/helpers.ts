export function imageUrl(image: string) {
  return `/src/assets/${image}.png`;
}

export function unixDate(unidxTime: number) {
  return new Date(unidxTime * 1000);
}

export function roundTemp(temp: number) {
  return Math.round(temp);
}
