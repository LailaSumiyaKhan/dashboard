import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
   {
      field: "id",
      headerName: "ID",
      width: 150,
   },
   {
      field: "product",
      headerName: "Product",
      width: 150,
   },
   {
      field: "price",
      headerName: "Price",
      width: 150,
   },
];

const rows = [
   { id: 10010, product: "Men's Black L", price: 365 },
   { id: 10058, product: "Children Yellow M", price: 220 },
   { id: 10070, product: "Graphic Blue XL", price: 650 },
];

export default function OrderDetailsTable() {
   return (
      <Box>
         <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mr: 1, textAlign: "center" }}
         >
            Ordered Products
         </Typography>
         <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 3,
                  },
               },
            }}
            pageSizeOptions={[]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}
