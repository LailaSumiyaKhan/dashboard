import { Box } from "@mui/material";
import React from "react";
import { generateInventoryTableData } from "../../utils";

/*
A card will show total number of t-shirts available
A table will show which category of t-shirt, size, color, available stock
This table data can be filtered based on a dropdown selected value (low stock products, out of stock, new)
Clicking on a specific row of the table will open a pop up
The pop up will show details of the t-shirt and it's last 6 months sell history
In the pop up if stock for a product is low there will be a button to add stock
Add, remove, update stock individual and bulk
*/

export default function Inventory() {
   const data = generateInventoryTableData();
   console.log(data);
   return <Box></Box>;
}
