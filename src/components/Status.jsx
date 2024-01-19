import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Status({ number, label }) {
   return (
      <Paper elevation={0} sx={{ ml: 2 }}>
         <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "blue.dark" }}
         >
            {number}
         </Typography>
         <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {label}
         </Typography>
      </Paper>
   );
}
