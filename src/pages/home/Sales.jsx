import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { getLast12Months } from "../../utils";
import LoadingScreen from "../../components/LoadingScreen";

export default function Sales() {
   const { inventoryTable } = useSelector((store) => store.app);

   if (inventoryTable === null) {
      return <LoadingScreen />;
   }

   const sales = inventoryTable.sellsEachMonth.slice();
   const months = getLast12Months();
   const series = [
      {
         name: "Sale",
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
         text: "Sales Last 12 Months",
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
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 550 }}
      >
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Sales
         </Typography>{" "}
         <Chart options={options} series={series} type="area" height={350} />
      </Paper>
   );
}
