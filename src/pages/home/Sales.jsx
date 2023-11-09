import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import Chart from "react-apexcharts";
import { getLastSixMonthsSalesData } from "../../utils";

export default function Sales() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }
   const data = getLastSixMonthsSalesData();
   const { months, sales } = data;
   const series = [
      {
         name: "Sale ($)",
         data: [...sales],
      },
   ];
   const options = {
      chart: {
         type: "area",
         height: 350,
         zoom: {
            enabled: false,
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         curve: "straight",
      },
      title: {
         text: "Sales Last 6 Months",
         align: "left",
      },
      labels: [...months],
      xaxis: {
         type: "string",
      },
      yaxis: {
         opposite: true,
      },
      legend: {
         horizontalAlign: "left",
      },
   };
   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Sales
         </Typography>{" "}
         <Chart options={options} series={series} type="area" height={350} />
      </Paper>
   );
}
