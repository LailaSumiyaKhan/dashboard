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
import { colors } from "../utils";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { setState } from "../appSlice";
import { useDispatch, useSelector } from "react-redux";

const testUsername = "admin";
const testPass = "admin";

export default function Login() {
   const appState = useSelector((store) => store.app);
   const dispatch = useDispatch();
   const { username, password } = appState;
   const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate();

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   function setUsername(event) {
      const value = event.target.value;
      dispatch(setState("username", value));
   }

   function setPassword(event) {
      const value = event.target.value;
      dispatch(setState("password", value));
   }

   const handleSignIn = () => {
      if (username === testUsername && password === testPass) {
         dispatch(setState("username", username));
         dispatch(setState("password", password));
         dispatch(setState("isAuth", true));
         navigate("/");
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
               onChange={setUsername}
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
                  onChange={setPassword}
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
