import { Paper } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";
import { getLastNMonths } from "../../utils";

export default function ProductSellLastOneYear({ sells }) {
   const months = getLastNMonths(12);

   const options = {
      chart: {
         id: "basic-bar",
      },
      title: {
         text: "Sell Last 12 Months",
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
         name: "Sell",
         data: [...sells],
      },
   ];
   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         <Chart options={options} series={series} type="bar" width="500" />
      </Paper>
   );
}
