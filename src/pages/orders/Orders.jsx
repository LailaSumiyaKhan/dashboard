import { Box, Typography } from "@mui/material";
import React from "react";
import Status from "../../components/Status";
import OrdersTable from "./OrdersTable";
import OrderDetails from "./OrderDetails";

const completedOrders = 127;
const completedLabel = "Completed";

const pendingOrders = 43;
const pendingLable = "Pending";

export default function Orders() {
   return (
      <Box sx={{ width: "100%" }}>
         <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Status number={pendingOrders} label={pendingLable} />
            <Status number={completedOrders} label={completedLabel} />
         </Box>

         <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
            Orders
         </Typography>

         <OrderDetails />

         <OrdersTable />
      </Box>
   );
}
