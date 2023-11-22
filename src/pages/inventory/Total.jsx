import { Divider, Paper, Typography } from "@mui/material";
import React from "react";

export default function Total({ total }) {
   return (
      <Paper elevation={0} sx={{ width: "95%" }}>
         <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "blue.dark" }}
         >
            {total}
         </Typography>
         <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            T-Shirts Available
         </Typography>
         <Divider sx={{ mt: 1 }} />
      </Paper>
   );
}
