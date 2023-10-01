import { Paper, Typography } from "@mui/material";
import React from "react";

export default function Card({ number, label, isCurrency }) {
   return (
      <Paper elevation={0} sx={{ width: 250, m: 1, p: 1, textAlign: "center" }}>
         {" "}
         <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "blue.dark" }}
         >
            {isCurrency ? `$${number}` : `${number}`}
         </Typography>{" "}
         <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {label}
         </Typography>{" "}
      </Paper>
   );
}
