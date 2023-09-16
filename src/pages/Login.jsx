import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { colors } from "../colors";

export default function Login() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        borderRadius: 2,
        bgcolor: colors.aliceBlue,
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: colors.royalBlue,
        }}
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
    </Container>
  );
}
