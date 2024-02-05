import { Box, Typography } from "@mui/material";
import React from "react";

export default function LabelAndValue({ label, value }) {
   return (
      <Box sx={{ display: "flex" }}>
         <Typography variant="subtitle1" sx={{ fontWeight: "bold", mr: 1 }}>
            {label}:
         </Typography>
         <Typography variant="subtitle1">{value}</Typography>
      </Box>
   );
}
