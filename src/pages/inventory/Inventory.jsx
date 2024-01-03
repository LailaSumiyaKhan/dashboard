import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { getInventoryTable, setState } from "../../appSlice";
import PopUp from "./PopUp";
import { generateInventoryTableData, getPopUpProduct } from "../../utils";
import InventoryTabs from "./InventoryTabs";

const columns = [
   { field: "category", headerName: "Category", width: 150 },
   { field: "size", headerName: "Size", width: 150 },
   { field: "color", headerName: "Color", width: 150 },
   { field: "price", headerName: "Price", width: 150 },
   { field: "stock", headerName: "Stock", width: 150 },
   { field: "status", headerName: "Status", width: 150 },
];

export default function Inventory() {
   const dispatch = useDispatch();
   const { inventoryTable, inventoryTableSelRow } = useSelector(
      (store) => store.app
   );

   // generateInventoryTableData();

   useEffect(() => {
      if (!inventoryTable) {
         dispatch(getInventoryTable());
      }
   }, []);

   useEffect(() => {
      if (inventoryTableSelRow.length > 0) {
         const popUpProduct = getPopUpProduct(
            inventoryTable.rows,
            inventoryTableSelRow[0]
         );
         dispatch(setState("popUpProduct", popUpProduct));
      }
   }, [inventoryTableSelRow]);

   if (!inventoryTable) {
      return <LoadingScreen />;
   }
   const { total, rows } = inventoryTable;

   return (
      <Box sx={{ width: "100%" }}>
         <PopUp />

         <Total total={total} />

         <InventoryTabs />

         <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
            Inventory Details
         </Typography>

         <DataGrid
            columns={columns}
            rows={rows}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 10,
                  },
               },
            }}
            pageSizeOptions={[10, 20, 30, 50]}
            onRowSelectionModelChange={(selectedRows) => {
               dispatch(setState("inventoryTableSelRow", selectedRows));
               dispatch(setState("inventoryPopUpOpen", true));
            }}
            rowSelectionModel={inventoryTableSelRow}
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
