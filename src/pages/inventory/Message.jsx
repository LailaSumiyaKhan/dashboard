import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../appSlice";

export default function Message() {
   const dispatch = useDispatch();
   const state = useSelector((store) => store.app);
   const { msgOpen, msg } = state;

   function handleClose() {
      dispatch(setState("msgOpen", false));
      dispatch(setState("msg", ""));
   }

   return (
      <Box sx={{ width: 500 }}>
         <Snackbar
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={msgOpen}
            onClose={handleClose}
            message={msg}
         />
      </Box>
   );
}
