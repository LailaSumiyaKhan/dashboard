import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import { getLast12Months } from "../../utils";
import LoadingScreen from "../../components/LoadingScreen";

export default function RevenueBreakdown() {
   const { inventoryTable } = useSelector((store) => store.app);

   if (inventoryTable === null) {
      return <LoadingScreen />;
   }

   const revenue = inventoryTable.revenueEachMonth.slice();
   const months = getLast12Months();

   const options = {
      chart: {
         id: "basic-bar",
      },
      title: {
         text: "Revenue Last 12 Months",
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
         name: "Revenue($)",
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
            <Chart
               options={options}
               series={series}
               type="bar"
               width="500"
               height="400"
            />
         </Box>
      </Paper>
   );
}
