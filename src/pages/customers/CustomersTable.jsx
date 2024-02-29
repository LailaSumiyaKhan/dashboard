import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";

const colWidth = 130;

export default function CustomersTable() {
   const states = useSelector((store) => store.app);
   const { customersTable } = states;

   const columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "name", headerName: "Name", width: colWidth },
      { field: "email", headerName: "Email", width: 200 },
      { field: "phone", headerName: "Phone", width: colWidth },
      { field: "address", headerName: "Address", width: 300 },
      {
         field: "type",
         headerName: "Type",
         width: colWidth,
         valueGetter: (params) => {
            if (params.row.type === 0) {
               return "Active";
            }
            return "Inactive";
         },
      },
   ];

   return (
      <Box>
         <DataGrid
            columns={columns}
            rows={customersTable}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 10,
                  },
               },
            }}
            pageSizeOptions={[5, 10, 25]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}
