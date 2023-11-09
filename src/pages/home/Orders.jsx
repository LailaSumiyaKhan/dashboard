import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import Chart from "react-apexcharts";
import { getLastSixMonthsOrdersData } from "../../utils";

export default function Orders() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const data = getLastSixMonthsOrdersData();
   const { months, orders } = data;

   const options = {
      chart: {
         id: "basic-bar",
      },
      title: {
         text: "Orders Last 6 Months",
         align: "left",
      },
      plotOptions: {
         bar: {
            borderRadius: 4,
         },
      },
      xaxis: {
         categories: [...months],
      },
   };
   const series = [
      {
         name: "Orders",
         data: [...orders],
      },
   ];
   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Orders
         </Typography>

         <Chart options={options} series={series} type="bar" width="500" />
      </Paper>
   );
}
