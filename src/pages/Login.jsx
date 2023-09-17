import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FilledInput,
  Input,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
