import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import Chart from "react-apexcharts";
import { getLastSixMonthsRevenueData } from "../../utils";

export default function RevenueBreakdown() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const data = getLastSixMonthsRevenueData();
   const { months, revenue } = data;

   const options = {
      chart: {
         id: "basic-bar",
      },
      title: {
         text: "Revenue Last 6 Months",
         align: "left",
      },
      plotOptions: {
         bar: {
            borderRadius: 4,
            horizontal: true,
         },
      },
      xaxis: {
         categories: [...months],
      },
   };
   const series = [
      {
         name: "Revenue",
         data: [...revenue],
      },
   ];

   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, width: 500, textAlign: "center" }}
      >
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Revenue
         </Typography>
         <Box>
            <Chart options={options} series={series} type="bar" width="500" />
         </Box>
      </Paper>
   );
}
