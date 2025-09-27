import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TemperatureChart from "../components/TemperatureChart";
import Weather from "../components/Weather";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ m: 4 }}>
        <Grid size={{ xs: 12, sm: 4.5 }}>
          <Weather />
        </Grid>
        <Grid size={12}>
          <TemperatureChart />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
