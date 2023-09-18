import {
   Button,
   Container,
   TextField,
   Typography,
   Box,
   FormControl,
   InputLabel,
   InputAdornment,
   IconButton,
   Input,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";

const testUsername = "admin";
const testPass = "admin";

export default function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate();

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const handleSignIn = () => {
      if (username === testUsername && password === testPass) {
         navigate("/home");
      } else {
         alert("Wrong username or password");
      }
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

            <TextField
               label="Username"
               variant="standard"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </FormControl>
            <Button
               variant="contained"
               sx={{ textTransform: "none", fontWeight: "bold", mt: 5 }}
               onClick={handleSignIn}
            >
               Sign in
            </Button>
         </Box>
      </Container>
   );
}
