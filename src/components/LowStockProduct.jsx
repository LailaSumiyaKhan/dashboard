import React from "react";
import { Paper, Typography } from "@mui/material";

export default function LowStockProduct({ minimumStockProduct }) {
   const { productName, currentStock } = minimumStockProduct;
   return (
      <Paper elevation={0} sx={{ width: 250, m: 1, p: 1, textAlign: "center" }}>
         {" "}
         <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "red.main" }}
         >
            Low Stock Alert !
         </Typography>{" "}
         <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "red.main" }}
         >
            {currentStock}
         </Typography>{" "}
         <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "red.main" }}
         >
            {productName}
         </Typography>{" "}
      </Paper>
   );
}
