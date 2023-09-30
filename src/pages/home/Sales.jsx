import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";

export default function Sales() {
   const homeData = useSelector((store) => store.app.homeData);
   const { today, lastWeek, lastMonth } = homeData.totalSales;
   return (
      <Paper elevation={3} sx={{ p: 1, borderRadius: 2, textAlign: "center" }}>
         {" "}
         <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Sales
         </Typography>{" "}
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-evenly",
            }}
         >
            <Card number={today} label={"Today"} />
            <Card number={lastWeek} label={"Last Week"} />
            <Card number={lastMonth} label={"Last Month"} />
         </Box>
      </Paper>
   );
}
