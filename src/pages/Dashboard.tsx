import { Grid, Skeleton } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import TemperatureChart from "../components/TemperatureChart";
import WeatherCarousel from "../components/WeatherCarousel";
import Weather from "../components/Weather";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={3}
        sx={{ m: { xs: 2, sm: 4 } }}
        alignItems='stretch'
      >
        <Grid size={{ xs: 12, lg: 5 }}>
          <Weather />
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <TemperatureChart />
        </Grid>
        <Grid size={12}>
          <WeatherCarousel />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
