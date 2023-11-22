import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { generateInventoryTableData } from "../../utils";
import Total from "./Total";

/*
A card will show total number of t-shirts available
A table will show which category of t-shirt, size, color, available stock
This table data can be filtered based on a dropdown selected value (low stock products, out of stock, new)
Clicking on a specific row of the table will open a pop up
The pop up will show details of the t-shirt and it's last 6 months sell history
In the pop up if stock for a product is low there will be a button to add stock
Add, remove, update stock individual and bulk
*/

const columns = [
   { field: "category", headerName: "Category", width: 150 },
   { field: "size", headerName: "Size", width: 150 },
   { field: "color", headerName: "Color", width: 150 },
   { field: "stock", headerName: "Stock", width: 150 },
   { field: "status", headerName: "Status", width: 150 },
];

export default function Inventory() {
   const stockData = generateInventoryTableData();
   const { total, data } = stockData;
   console.log(data);
   return (
      <Box sx={{ width: "100  %" }}>
         <Total total={total} />

         <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
            Inventory Details
         </Typography>

         <DataGrid
            columns={columns}
            rows={data}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5, 10, 15, 20]}
            disableRowSelectionOnClick
            sx={{
               mt: 1,
               "& .MuiDataGrid-columnHeader": {
                  fontWeight: "bold",
                  fontSize: 18,
               },
               "& .MuiDataGrid-row:hover": {
                  backgroundColor: "white.dark",
               },
            }}
         />
      </Box>
   );
}
