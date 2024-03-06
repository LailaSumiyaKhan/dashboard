import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData, getInventoryTable } from "../../appSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { Grid } from "@mui/material";
import Sales from "./Sales";
import Orders from "./Orders";
import InventoryStatus from "./InventoryStatus";
import RevenueBreakdown from "./RevenueBreakdown";

export default function Home() {
   const { homeData, inventoryTable } = useSelector((store) => store.app);
   const dispatch = useDispatch();
   useEffect(() => {
      if (!homeData) {
         dispatch(getHomeData());
      }
      // if (inventoryTable === null) {
      //    dispatch(getInventoryTable());
      // }
   }, []);

   return (
      <>
         <LoadingScreen />

         <Grid container justifyContent={"center"} columnGap={5} rowGap={5}>
            <Grid item>{/* <Sales /> */}</Grid>
            <Grid item>
               <Orders />
            </Grid>
            <Grid item>{/* <InventoryStatus /> */}</Grid>
            <Grid item>{/* <RevenueBreakdown /> */}</Grid>
         </Grid>
      </>
   );
}
