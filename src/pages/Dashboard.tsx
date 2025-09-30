import { Grid, Skeleton } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { lazy, Suspense } from "react";

const Weather = lazy(() => import("../components/Weather"));
const TemperatureChart = lazy(() => import("../components/TemperatureChart"));
const WeatherCarousel = lazy(() => import("../components/WeatherCarousel"));

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
          <Suspense
            fallback={
              <Skeleton
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 6,
                }}
                variant='rectangular'
                width='100%'
                height={250}
              />
            }
          >
            <Weather />
          </Suspense>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Suspense
            fallback={
              <Skeleton
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 6,
                }}
                variant='rectangular'
                width='100%'
                height={250}
              />
            }
          >
            <TemperatureChart />
          </Suspense>
        </Grid>
        <Grid size={12}>
          <Suspense
            fallback={
              <Skeleton
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 6,
                }}
                variant='rectangular'
                width='100%'
                height={250}
              />
            }
          >
            <WeatherCarousel />
          </Suspense>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
