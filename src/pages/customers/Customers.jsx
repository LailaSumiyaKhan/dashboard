import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import CustomersTable from "./CustomersTable";
import { getCustomersTable } from "../../appSlice";

export default function Customers() {
   const dispatch = useDispatch();
   const states = useSelector((store) => store.app);
   const { customersTable } = states;

   useEffect(() => {
      dispatch(getCustomersTable());
   }, []);

   return (
      <Box>
         <Typography variant="subtitle1" sx={{ fontWeight: "bold", mr: 1 }}>
            Customers
         </Typography>

         {customersTable === null ? <LoadingScreen /> : <CustomersTable />}
      </Box>
   );
}
