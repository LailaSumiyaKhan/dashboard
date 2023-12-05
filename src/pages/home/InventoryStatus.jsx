import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { generateStockData, getInventorySummary } from "../../utils";
import { DataGrid } from "@mui/x-data-grid";

export default function InventoryStatus() {
   const inventoryTable = useSelector((store) => store.app.inventoryTable);
   if (!inventoryTable) {
      return <LoadingScreen />;
   }

   const columns = [
      {
         field: "category",
         headerName: "Category",
         width: 100,
      },
      {
         field: "sizes",
         headerName: "Sizes",
         width: 120,
      },
      {
         field: "colors",
         headerName: "Colors",
         width: 120,
      },
      {
         field: "stock",
         headerName: "Stock",
         width: 100,
      },
   ];

   const { total, rows } = inventoryTable;
   const summaryRows = getInventorySummary(rows);

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
            rows={summaryRows}
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
