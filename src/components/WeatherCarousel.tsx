import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { useSettings } from "../context/SettingsContext";
import { useEffect, useState } from "react";
import { useCity } from "../context/CityContext";
import { getTwoWeeksPrediction } from "../services/weather";
import { formatDate } from "../lib/formmater";
import { imageUrl, roundTemp, unixDate } from "../lib/helpers";
import type { WeatherPrediction } from "../types/api";
import { neutral } from "../theme/colors";
import { useTranslation } from "react-i18next";

export default function WeatherCarousel() {
  const { lang } = useSettings();
  const { city } = useCity();
  const { t } = useTranslation();
  const [data, setData] = useState<WeatherPrediction[] | null>(null);

  useEffect(() => {
    async function fetchPrediction() {
      const res = await getTwoWeeksPrediction(city.lat, city.lon, lang);

      setData([...res, ...res]);
    }

    fetchPrediction();
  }, [city, lang]);

  if (!data) return null;

  // console.log(
  //   data.map((d) =>
  //     unixDate(d.dt).toLocaleDateString("en-US", {
  //       minute: "2-digit",
  //       hour: "2-digit",
  //     })
  //   )
  // );

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 6,
        py: 2.5,
        px: 3,
      }}
    >
      <Typography variant='h5' fontWeight='bold'>
        {t("prediction")}
      </Typography>
      <Box flex={1}>
        <Swiper
          dir={lang === "fa" ? "rtl" : "ltr"}
          key={lang === "fa" ? "rtl" : "ltr"}
          modules={[FreeMode, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            500: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
            1536: { slidesPerView: 11 },
          }}
          freeMode
          autoplay={{ delay: 3000 }}
          loop={false}
          style={{ width: "100%", padding: "10px 0" }}
        >
          {data.map((w, i) => (
            <SwiperSlide
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                elevation={0}
                sx={[
                  (theme) => ({
                    textAlign: "center",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "primary.main"
                        : neutral[300],
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 4,
                    height: 260,
                    width: "90%",
                  }),
                ]}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "inherit",
                    p: 0,
                  }}
                >
                  <Box>
                    <Typography variant='h6'>
                      {i === 0
                        ? t("today")
                        : formatDate(
                            unixDate(w.dt),
                            lang === "fa" ? "fa-IR" : "en-US",
                            "day"
                          )}
                    </Typography>
                    <Box
                      sx={{
                        height: "2.5px",
                        width: "100%",
                        background:
                          "linear-gradient(to right, #36363600, #7E7E7E, #36363600)",
                        borderRadius: 2,
                        my: 2,
                      }}
                    />
                  </Box>
                  <img src={imageUrl(w.weather[0].icon)} width='100%' />
                  <Typography variant='body1'>
                    {roundTemp(w.main.temp)}°C
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Paper>
  );
}
