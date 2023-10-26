import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";

export default function ConversionRate() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }
   const { today, lastWeek, lastMonth } = homeData.conversionRate;

   return (
      <Paper
         elevation={2}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 290 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Conversion
         </Typography>{" "}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-evenly",
            }}
         >
            <Card number={today} label={"Today"} isCurrency={false} />
            <Divider />
            <Card number={lastWeek} label={"Last Week"} isCurrency={false} />
            <Card number={lastMonth} label={"Last Month"} isCurrency={false} />
         </Box>
      </Paper>
   );
}
