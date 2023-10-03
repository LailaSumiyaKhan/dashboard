import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../appSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { Box } from "@mui/material";
import Sales from "./Sales";
import Orders from "./Orders";
import InventoryStatus from "./InventoryStatus";
import ConversionRate from "./ConversionRate";

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
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
         >
            <Sales />
            <Orders />
            <InventoryStatus />
            <ConversionRate />
         </Box>
      </>
   );
}
