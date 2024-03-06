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
import {
   getInventoryTable,
   getTotalStock,
   setState,
   updateStock,
} from "../../appSlice";
import Message from "./Message";

export default function Add() {
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

   function add() {
      let cats = [category];
      let allSizes = [size];
      let allColors = [color];
      if (category === 0) {
         cats = [1, 2, 3, 4, 5];
      }
      if (size === 0) {
         allSizes = [1, 2, 3, 4, 5];
      }
      if (color === 0) {
         allColors = [1, 2, 3, 4, 5, 6];
      }
      const isAdd = true;

      const obj = {
         categories: cats,
         sizes: allSizes,
         colors: allColors,
         stock: Number(stock),
         isAdd,
      };

      console.log("Inventory_Add", obj);
      dispatch(updateStock(obj))
         .then(() => dispatch(getInventoryTable()))
         .then(() => dispatch(getTotalStock()));
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
                     {categories.map((category, index) => {
                        return (
                           <MenuItem key={index} value={index}>
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
                     {sizes.map((size, index) => {
                        return (
                           <MenuItem key={index} value={index}>
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
                     {availableColors.map((color, index) => {
                        return (
                           <MenuItem key={index} value={index}>
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
                  onClick={add}
               >
                  Add
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
}
