import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";

export default function TopSelling() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const topSold = homeData.topSellingProducts;

   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
   return (
      <Paper elevation={1} sx={{ mt: 5, p: 1, borderRadius: 2, width: "48%" }}>
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Top 3 Sold
         </Typography>
         <Box></Box>
      </Paper>
   );
}
