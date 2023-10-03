import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
} from "recharts";
import LoadingScreen from "../../components/LoadingScreen";

export default function RevenueBreakdown() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const revenueBreakdown = homeData.revenueBreakdown;

   const data = [
      {
         category: revenueBreakdown[0].category,
         revenue: revenueBreakdown[0].revenue,
      },
      {
         category: revenueBreakdown[1].category,
         revenue: revenueBreakdown[1].revenue,
      },
      {
         category: revenueBreakdown[2].category,
         revenue: revenueBreakdown[2].revenue,
      },
      {
         category: revenueBreakdown[3].category,
         revenue: revenueBreakdown[3].revenue,
      },
      {
         category: revenueBreakdown[4].category,
         revenue: revenueBreakdown[4].revenue,
      },
      {
         category: revenueBreakdown[5].category,
         revenue: revenueBreakdown[5].revenue,
      },
   ];

   return (
      <Paper elevation={2} sx={{ mt: 5, p: 1, borderRadius: 2 }}>
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Revenue
         </Typography>
         <Box>
            <BarChart
               width={700}
               height={400}
               data={data}
               margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 0,
               }}
               barSize={20}
            >
               <XAxis
                  dataKey="category"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
               />
               <YAxis />
               <Tooltip />
               <Legend />
               <CartesianGrid strokeDasharray="1 3" />
               <Bar
                  dataKey="revenue"
                  fill="#1565c0"
                  background={{ fill: "#F0F8FF" }}
               />
            </BarChart>
         </Box>
      </Paper>
   );
}
