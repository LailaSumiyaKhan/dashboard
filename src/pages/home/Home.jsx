import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../appSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { Box, Grid } from "@mui/material";
import Sales from "./Sales";
import Orders from "./Orders";
import InventoryStatus from "./InventoryStatus";
import RevenueBreakdown from "./RevenueBreakdown";
import TopSelling from "./TopSelling";

export default function Home() {
   const homeData = useSelector((store) => store.app.homeData);
   const dispatch = useDispatch();
   useEffect(() => {
      if (homeData === null) {
         dispatch(getHomeData());
      }
   }, []);
   return (
      <>
         <LoadingScreen />

         <Grid container justifyContent={"center"} columnGap={5} rowGap={5}>
            <Grid item>
               <Sales />
            </Grid>
            <Grid item>
               <Orders />
            </Grid>
            <Grid item>
               <InventoryStatus />
            </Grid>
         </Grid>
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <RevenueBreakdown />
            <TopSelling />
         </Box>
      </>
   );
}
