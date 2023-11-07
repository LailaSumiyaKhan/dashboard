import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { Chart } from "react-google-charts";
import { getLastSixMonthsSalesData } from "../../utils";

const data = getLastSixMonthsSalesData();

export default function Sales() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }
   const options = {
      title: "Last 6 Months Sales",
      // curveType: "function",
      legend: { position: "bottom" },
      pointSize: 5,
   };
   return (
      <Paper
         elevation={2}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Sales
         </Typography>{" "}
         <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
         />
      </Paper>
   );
}
