import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
   { field: "id", headerName: "ID", width: 100 },
   { field: "customerName", headerName: "Customer", width: 150 },
   { field: "orderDate", headerName: "Date Ordered", width: 150 },
   { field: "status", headerName: "Status", width: 100 },
   { field: "total", headerName: "Amount", width: 100 },
];

export default function OrdersTable() {
   return (
      <Box>
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

const rows = [
   {
      id: 101,
      customerName: "Alice",
      orderDate: "2024-01-01",
      status: "Pending",
      total: 1245,
   },
   {
      id: 102,
      customerName: "Bob",
      orderDate: "2024-01-02",
      status: "Processing",
      total: 789,
   },
   {
      id: 103,
      customerName: "Charlie",
      orderDate: "2024-01-03",
      status: "Shipped",
      total: 1590,
   },
   {
      id: 104,
      customerName: "David",
      orderDate: "2024-01-04",
      status: "Delivered",
      total: 235,
   },
   {
      id: 105,
      customerName: "Eva",
      orderDate: "2024-01-05",
      status: "Pending",
      total: 670,
   },
   {
      id: 106,
      customerName: "Frank",
      orderDate: "2024-01-06",
      status: "Processing",
      total: 890,
   },
   {
      id: 107,
      customerName: "Grace",
      orderDate: "2024-01-07",
      status: "Shipped",
      total: 1200,
   },
   {
      id: 108,
      customerName: "Henry",
      orderDate: "2024-01-08",
      status: "Delivered",
      total: 340,
   },
   {
      id: 109,
      customerName: "Ivy",
      orderDate: "2024-01-09",
      status: "Pending",
      total: 990,
   },
   {
      id: 110,
      customerName: "Jack",
      orderDate: "2024-01-10",
      status: "Shipped",
      total: 500,
   },
   {
      id: 111,
      customerName: "Katherine",
      orderDate: "2024-01-11",
      status: "Processing",
      total: 750,
   },
   {
      id: 112,
      customerName: "Liam",
      orderDate: "2024-01-12",
      status: "Delivered",
      total: 600,
   },
   {
      id: 113,
      customerName: "Mia",
      orderDate: "2024-01-13",
      status: "Pending",
      total: 1120,
   },
   {
      id: 114,
      customerName: "Nathan",
      orderDate: "2024-01-14",
      status: "Shipped",
      total: 890,
   },
   {
      id: 115,
      customerName: "Olivia",
      orderDate: "2024-01-15",
      status: "Processing",
      total: 430,
   },
   {
      id: 116,
      customerName: "Peter",
      orderDate: "2024-01-16",
      status: "Delivered",
      total: 980,
   },
   {
      id: 117,
      customerName: "Quinn",
      orderDate: "2024-01-17",
      status: "Pending",
      total: 770,
   },
   {
      id: 118,
      customerName: "Ryan",
      orderDate: "2024-01-18",
      status: "Shipped",
      total: 120,
   },
   {
      id: 119,
      customerName: "Samantha",
      orderDate: "2024-01-19",
      status: "Processing",
      total: 1500,
   },
   {
      id: 120,
      customerName: "Thomas",
      orderDate: "2024-01-20",
      status: "Delivered",
      total: 870,
   },
   {
      id: 121,
      customerName: "Ursula",
      orderDate: "2024-01-21",
      status: "Pending",
      total: 420,
   },
   {
      id: 122,
      customerName: "Vincent",
      orderDate: "2024-01-22",
      status: "Shipped",
      total: 660,
   },
   {
      id: 123,
      customerName: "Wendy",
      orderDate: "2024-01-23",
      status: "Processing",
      total: 990,
   },
   {
      id: 124,
      customerName: "Xavier",
      orderDate: "2024-01-24",
      status: "Delivered",
      total: 530,
   },
   {
      id: 125,
      customerName: "Yvonne",
      orderDate: "2024-01-25",
      status: "Pending",
      total: 780,
   },
   {
      id: 126,
      customerName: "Zane",
      orderDate: "2024-01-26",
      status: "Shipped",
      total: 1100,
   },
   {
      id: 127,
      customerName: "Amy",
      orderDate: "2024-01-27",
      status: "Processing",
      total: 320,
   },
   {
      id: 128,
      customerName: "Ben",
      orderDate: "2024-01-28",
      status: "Delivered",
      total: 890,
   },
   {
      id: 129,
      customerName: "Catherine",
      orderDate: "2024-01-29",
      status: "Pending",
      total: 670,
   },
   {
      id: 130,
      customerName: "Dylan",
      orderDate: "2024-01-30",
      status: "Shipped",
      total: 1042,
   },
];
