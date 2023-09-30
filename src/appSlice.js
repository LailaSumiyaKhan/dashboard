import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urls } from "./utils";

const initialState = {
   isLoading: false,
   username: "",
   password: "",
   isAuth: true,
   homeData: null,
}

export const getHomeData = createAsyncThunk(
   "home/getHomeData",
   async (obj, thunkAPI) => {
      // Fake delay
      await new Promise((resolve) => setTimeout(resolve, 700));
      const response = await fetch(urls.homeData);
      const data = await response.json();
      return data;
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
            console.log(action.error.message);
         })
   }
});

export const {
   setState
} = appSlice.actions;

export default appSlice.reducer;