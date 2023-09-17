import { Button, Container, TextField, Typography, Box } from "@mui/material";
import React from "react";
import { colors } from "../colors";

export default function Login() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "97vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: colors.aliceBlue,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: colors.royalBlue,
          }}
          gutterBottom
          variant="h4"
        >
          Sign in
        </Typography>

        <TextField label="Username" variant="standard" />
        <TextField label="Password" variant="standard" type="password" />
        <Button
          variant="contained"
          sx={{ textTransform: "none", fontWeight: "bold", mt: 5 }}
        >
          Sign in
        </Button>
      </Box>
    </Container>
  );
}
