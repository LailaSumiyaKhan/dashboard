import { Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import LoadingScreen from "../../components/LoadingScreen";
import { availableColors, categories, sizes } from "../../utils";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
   {
      field: "category",
      headerName: "Category",
      width: 120,
      valueGetter: (params) => {
         let type = categories[params.row.category];
         return type;
      },
   },
   {
      field: "size",
      headerName: "Size",
      width: 80,
      valueGetter: (params) => {
         let s = sizes[params.row.size];
         return s;
      },
   },
   {
      field: "color",
      headerName: "Color",
      width: 80,
      valueGetter: (params) => {
         let c = availableColors[params.row.color];
         return c;
      },
   },
   { field: "stock", headerName: "Stock", width: 80 },
   {
      field: "status",
      headerName: "Status",
      width: 80,
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

export default function InventoryStatus() {
   const { totalStock, inventoryTable } = useSelector((store) => store.app);
   if (!inventoryTable) {
      return <LoadingScreen />;
   }

   return (
      <Paper
         elevation={0}
         sx={{ p: 1, borderRadius: 2, textAlign: "center", width: 500 }}
      >
         {" "}
         <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Inventory | Total {totalStock}
         </Typography>{" "}
         <DataGrid
            columns={columns}
            rows={inventoryTable}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[20, 40, 100]}
            disableRowSelectionOnClick
         />
      </Paper>
   );
}
