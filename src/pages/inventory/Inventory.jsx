import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { getInventoryTable, getTotalStock, setState } from "../../appSlice";
import PopUp from "./PopUp";
import {
   availableColors,
   categories,
   getPopUpProduct,
   sizes,
} from "../../utils";
import InventoryTabs from "./InventoryTabs";
import Status from "../../components/Status";

const columns = [
   { field: "name", headerName: "Name", width: 150 },
   {
      field: "category",
      headerName: "Category",
      width: 150,
      valueGetter: (params) => {
         let type = categories[params.row.category];
         return type;
      },
   },
   {
      field: "size",
      headerName: "Size",
      width: 150,
      valueGetter: (params) => {
         let s = sizes[params.row.size];
         return s;
      },
   },
   {
      field: "color",
      headerName: "Color",
      width: 150,
      valueGetter: (params) => {
         let c = availableColors[params.row.color];
         return c;
      },
   },
   { field: "price", headerName: "Price", width: 150 },
   { field: "stock", headerName: "Stock", width: 150 },
   {
      field: "status",
      headerName: "Status",
      width: 150,
      valueGetter: (params) => {
         let s = "";
         switch (params.row.status) {
            default:
               s = "Low";
               break;
            case 1:
               s = "Medium";
               break;
            case 2:
               s = "Ok";
               break;
         }
         return s;
      },
   },
];

export default function Inventory() {
   const dispatch = useDispatch();
   const { totalStock, inventoryTable, inventoryTableSelRow } = useSelector(
      (store) => store.app
   );

   useEffect(() => {
      if (inventoryTable === null) {
         dispatch(getInventoryTable());
         dispatch(getTotalStock());
      }
   }, []);

   useEffect(() => {
      // if (inventoryTableSelRow.length > 0) {
      //    const popUpProduct = getPopUpProduct(
      //       inventoryTable.rows,
      //       inventoryTableSelRow[0]
      //    );
      //    dispatch(setState("popUpProduct", popUpProduct));
      // }
   }, [inventoryTableSelRow]);

   if (!inventoryTable) {
      return <LoadingScreen />;
   }
   // const { total, rows } = inventoryTable;

   return (
      <Box sx={{ width: "100%" }}>
         <PopUp />

         <Status number={totalStock} label={"T-Shirts Available"} />

         <InventoryTabs />

         <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
            Inventory Details
         </Typography>

         <DataGrid
            columns={columns}
            rows={inventoryTable}
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
