import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { prepareInventoryRows, urls } from "./utils";

const initialState = {
   isLoading: false,
   inventoryPopUpOpen: true,
   username: "",
   password: "",
   isAuth: true,

   homeData: null,
   inventoryTable: null,
   totalStock: 0,
   inventoryTableSelRow: [],
   popUpProduct: null,

   category: "",
   size: "",
   color: "",
   stock: "",

   msgOpen: false,
   msg: "",

   orderPopupOpen: false,
   orderDetail: null,
   selectedOrderIDs: [],

   customersTable: null,
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
         const response = await fetch(urls.inventory);
         const data = await response.json();
         return data;
      } catch (error) {
         console.error(error);
      }
   }
);

export const getTotalStock = createAsyncThunk(
   "inventory/getTotalStock",
   async (obj, thunkAPI) => {
      try {
         const response = await fetch(urls.totalStock);
         const data = await response.json();
         return data;
      } catch (error) {
         console.error(error);
      }
   }
);

export const updateStock = createAsyncThunk(
   "inventory/updateStock",
   async (obj, thunkAPI) => {
      try {
         const response = await fetch(urls.updateStock, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
            },
            body: JSON.stringify(obj)
         });
         const data = await response.json();
         return data;
      } catch (error) {
         console.error(error);
      }
   }
);


export const getCustomersTable = createAsyncThunk(
   "customer/getCustomersTable",
   async (obj, thunkAPI) => {
      try {
         const response = await fetch(urls.customers);
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
            state.inventoryTable = prepareInventoryRows(action.payload.data);
            state.isLoading = false;
         })
         .addCase(getInventoryTable.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`getInventoryTable - ${action.error.message}`)
         })

         .addCase(getTotalStock.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getTotalStock.fulfilled, (state, action) => {
            console.log(action.payload);
            state.totalStock = action.payload.data;
            state.isLoading = false;
         })
         .addCase(getTotalStock.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`getTotalStock - ${action.error.message}`)
         })

         .addCase(getCustomersTable.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(getCustomersTable.fulfilled, (state, action) => {
            state.customersTable = action.payload.data;
            state.isLoading = false;
         })
         .addCase(getCustomersTable.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`getCustomersTable - ${action.error.message}`)
         })

         .addCase(updateStock.pending, (state, action) => {
            state.isLoading = true;
         })
         .addCase(updateStock.fulfilled, (state, action) => {
            state.isLoading = false;
            state.msg = action.payload.message;
            state.msgOpen = true;
         })
         .addCase(updateStock.rejected, (state, action) => {
            state.isLoading = false;
            console.error(`updateStock - ${action.error.message}`)
         })
   }
});

export const {
   setState,
} = appSlice.actions;

export default appSlice.reducer;