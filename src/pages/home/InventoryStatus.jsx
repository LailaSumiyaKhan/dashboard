import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";
import LowStockProduct from "../../components/LowStockProduct";

export default function InventoryStatus() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const { totalProducts, lowStockAlerts } = homeData.inventoryStatus;
   const minimumStockProduct = lowStockAlerts.reduce((min, product) => {
      return product.currentStock < min.currentStock ? product : min;
   }, lowStockAlerts[0]);

   return (
      <Paper
         elevation={2}
         sx={{ m: 1, p: 1, borderRadius: 2, textAlign: "center", width: 300 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Inventory
         </Typography>{" "}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-evenly",
            }}
         >
            <Card number={totalProducts} label={"Total"} isCurrency={false} />
            <Divider sx={{ mt: 1, mb: 1 }} />
            <LowStockProduct minimumStockProduct={minimumStockProduct} />
         </Box>
      </Paper>
   );
}
