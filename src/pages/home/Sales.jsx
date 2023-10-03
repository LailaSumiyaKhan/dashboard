import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";

export default function Sales() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const { today, lastWeek, lastMonth } = homeData.totalSales;
   return (
      <Paper
         elevation={2}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 300 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Sales
         </Typography>{" "}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-evenly",
            }}
         >
            <Card number={today} label={"Today"} isCurrency={true} />
            <Divider />
            <Card number={lastWeek} label={"Last Week"} isCurrency={true} />
            <Card number={lastMonth} label={"Last Month"} isCurrency={true} />
         </Box>
      </Paper>
   );
}
