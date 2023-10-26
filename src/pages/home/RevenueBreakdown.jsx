import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { Chart } from "react-google-charts";

function prepareData(data) {
   let preparedDate = [];
   const first = [
      "Element",
      "revenue",
      { role: "style" },
      {
         sourceColumn: 0,
         role: "annotation",
         type: "string",
         calc: "stringify",
      },
   ];
   preparedDate.push(first);

   const color = "#1e90ff";
   for (let i = 0; i < data.length; ++i) {
      const item = data[i];
      const preparedItem = [item.category, item.revenue, color, null];
      preparedDate.push(preparedItem);
   }
   return preparedDate;
}

export default function RevenueBreakdown() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const revenueBreakdown = prepareData(homeData.revenueBreakdown);
   console.log(revenueBreakdown);

   const options = {
      title: "",
      width: 500,
      height: 350,
      bar: { groupWidth: "50%" },
      legend: { position: "none" },
      hAxis: {
         title: "$ per month",
      },
      backgroundColor: "#f0f8ff",
   };

   return (
      <Paper elevation={1} sx={{ mt: 5, p: 1, borderRadius: 2, width: "48%" }}>
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Revenue
         </Typography>
         <Box>
            <Chart
               chartType="BarChart"
               width="100%"
               height="400px"
               data={revenueBreakdown}
               options={options}
            />
         </Box>
      </Paper>
   );
}
