import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TemperatureChart from "../components/TemperatureChart";
import Weather from "../components/Weather";
import WeatherCarousel from "../components/WeatherCarousel";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ m: 4 }} justifyContent='space-between'>
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
