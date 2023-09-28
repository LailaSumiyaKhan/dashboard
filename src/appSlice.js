import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   username: "",
   password: "",
}

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
   extraReducers: {

   }
});

export const {
   setState
} = appSlice.actions;

export default appSlice.reducer;