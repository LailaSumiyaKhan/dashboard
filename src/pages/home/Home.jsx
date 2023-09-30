import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../appSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { Box } from "@mui/material";
import Sales from "./Sales";

export default function Home() {
   const dispatch = useDispatch();
   const homeData = useSelector((store) => store.app.homeData);
   const { totalSales } = homeData
   useEffect(() => {
      dispatch(getHomeData());
   }, []);
   console.log("home rendering");
   return (
      <>
         <LoadingScreen />
         <Box>
            <Sales />
         </Box>
      </>
   );
}
