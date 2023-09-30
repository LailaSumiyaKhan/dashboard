import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Card({ number, label }) {
   return (
      <Paper elevation={2} sx={{ width: 250, m: 1, p: 1, textAlign: "center" }}>
         {" "}
         <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "blue.dark" }}
         >
            ${number}
         </Typography>{" "}
         <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {label}
         </Typography>{" "}
      </Paper>
   );
}
