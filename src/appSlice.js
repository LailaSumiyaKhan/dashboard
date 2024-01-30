import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urls } from "./utils";

const initialState = {
   isLoading: false,
   inventoryPopUpOpen: true,
   username: "",
   password: "",
   isAuth: true,

   homeData: null,
   inventoryTable: null,
   inventoryTableSelRow: [],
   popUpProduct: null,

   category: "",
   size: "",
   color: "",
   stock: 0,

   msgOpen: false,
   msg: "",

   orderPopupOpen: false,
   orderDetail: null,
   selectedOrderIDs: [],
}

export const getHomeData = createAsyncThunk(
   "home/getHomeData",
   async (obj, thunkAPI) => {
      try {
         // Fake delay
         await new Promise((resolve) => setTimeout(resolve, 700));
         const response = await fetch(urls.homeData);
         const data = await response.json();
         return data;
      } catch (error) {
         console.error(error);
      }
   }
);

export const getInventoryTable = createAsyncThunk(
   "inventory/getInventoryTable",
   async (obj, thunkAPI) => {
      try {
         // Fake delay
         await new Promise((resolve) => setTimeout(resolve, 700));
         const response = await fetch(urls.inventory);
         const data = await response.json();
         return data;
      } catch (error) {
         console.error(error);
      }
   }
);

export const appSlice = createSlice({
   name: "app",
   initialState,
   reducers: {
      setState: {
         prepare(stateName, value) {
            return {
               payload: { stateName, value }
            };
         },
         reducer(state, action) {
            const { stateName, value } = action.payload;
            state[stateName] = value;
         }
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(getHomeData.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getHomeData.fulfilled, (state, action) => {
            state.homeData = action.payload;
            state.isLoading = false;
         })
         .addCase(getHomeData.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`getHomeData - ${action.error.message}`);
         })

         .addCase(getInventoryTable.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getInventoryTable.fulfilled, (state, action) => {
            state.inventoryTable = action.payload;
            state.isLoading = false;
         })
         .addCase(getInventoryTable.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`getInventoryTable - ${action.error.message}`)
         })
   }
});

export const {
   setState,
} = appSlice.actions;

export default appSlice.reducer;