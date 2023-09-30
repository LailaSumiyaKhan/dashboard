import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

export default function LoadingScreen() {
   const isLoading = useSelector((store) => store.app.isLoading);

   return (
      <Backdrop
         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={isLoading}
      >
         <CircularProgress color="inherit" />
      </Backdrop>
   );
}
