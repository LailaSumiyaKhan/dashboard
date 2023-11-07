import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { generateStockData } from "../../utils";
import { DataGrid } from "@mui/x-data-grid";

export default function InventoryStatus() {
   const homeData = useSelector((store) => store.app.homeData);
   if (homeData === null) {
      return <LoadingScreen />;
   }

   const columns = [
      {
         field: "category",
         headerName: "Category",
         width: 150,
      },
      {
         field: "stock",
         headerName: "Stock",
         width: 150,
      },
      {
         field: "status",
         headerName: "Status",
         width: 150,
      },
   ];

   const { total, rows } = generateStockData();

   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Inventory | Total {total}
         </Typography>{" "}
         <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Paper>
   );
}
