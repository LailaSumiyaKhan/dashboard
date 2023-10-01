import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";

export default function Orders() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const { today, lastWeek, lastMonth } = homeData.totalOrders;
   return (
      <Paper
         elevation={2}
         sx={{ m: 1, p: 1, borderRadius: 2, textAlign: "center", width: 300 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Orders
         </Typography>{" "}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-evenly",
            }}
         >
            <Card number={today} label={"Today"} isCurrency={false} />
            <Card number={lastWeek} label={"Last Week"} isCurrency={false} />
            <Card number={lastMonth} label={"Last Month"} isCurrency={false} />
         </Box>
      </Paper>
   );
}
