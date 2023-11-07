import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";
import { Chart } from "react-google-charts";
import { getLastSixMonthsOrdersData } from "../../utils";

export default function Orders() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const data = getLastSixMonthsOrdersData();
   const option = {
      legend: { position: "none" },
   };

   const { today, lastWeek, lastMonth } = homeData.totalOrders;
   return (
      <Paper
         elevation={2}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Orders
         </Typography>

         <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={option}
         />
      </Paper>
   );
}
