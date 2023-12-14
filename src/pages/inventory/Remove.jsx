import {
   Box,
   Button,
   FormControl,
   Grid,
   InputLabel,
   MenuItem,
   Select,
   TextField,
} from "@mui/material";
import React from "react";
import { availableColors, categories, sizes } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../appSlice";
import Message from "./Message";

export default function Remove() {
   const dispatch = useDispatch();
   const state = useSelector((store) => store.app);
   const { category, size, color, stock } = state;

   function setCategory(event) {
      const category = event.target.value;
      dispatch(setState("category", category));
   }

   function setSize(event) {
      const size = event.target.value;
      dispatch(setState("size", size));
   }

   function setColor(event) {
      const color = event.target.value;
      dispatch(setState("color", color));
   }

   function setStock(event) {
      const stock = event.target.value;
      dispatch(setState("stock", stock));
   }

   function remove() {
      showMessage("Removed successfully!");
   }

   function showMessage(msg) {
      dispatch(setState("msgOpen", true));
      dispatch(setState("msg", msg));
   }

   return (
      <Box sx={{ mt: 2 }}>
         <Message />

         <Grid container columnGap={2} rowGap={2}>
            <Grid item>
               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                     value={category}
                     onChange={setCategory}
                     label="Category"
                  >
                     <MenuItem value={"All"}>{"All"}</MenuItem>
                     {categories.map((category, index) => {
                        return (
                           <MenuItem key={index} value={category}>
                              {category}
                           </MenuItem>
                        );
                     })}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item>
               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Size</InputLabel>
                  <Select value={size} onChange={setSize} label="Size">
                     <MenuItem value={"All"}>{"All"}</MenuItem>
                     {sizes.map((size, index) => {
                        return (
                           <MenuItem key={index} value={size}>
                              {size}
                           </MenuItem>
                        );
                     })}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item>
               <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel>Color</InputLabel>
                  <Select value={color} onChange={setColor} label="Color">
                     <MenuItem value={"All"}>{"All"}</MenuItem>
                     {availableColors.map((color, index) => {
                        return (
                           <MenuItem key={index} value={color}>
                              {color}
                           </MenuItem>
                        );
                     })}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item>
               <TextField
                  sx={{ mt: 1.4 }}
                  label="Stock"
                  variant="standard"
                  size="small"
                  defaultValue={stock}
                  onChange={setStock}
               />
            </Grid>

            <Grid item>
               <Button
                  variant="contained"
                  sx={{ mt: 2.4, textTransform: "none", fontWeight: "bold" }}
                  onClick={remove}
               >
                  Remove
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
}
