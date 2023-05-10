import { createSlice } from "@reduxjs/toolkit";
import { categoryThunk } from "../Thunk/CategoryThunk";

let initState = {
  categoryProduct: [],
  categoryLoading: false,
}
let categoryReducer = createSlice({
  name: 'category',

  initialState: initState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoryThunk.pending, (state, action) => {
        // console.log("loading");
        state.categoryLoading = true;
      })
      .addCase(categoryThunk.fulfilled, (state, action) => {
        // console.log("fulfilled");
        state.categoryProduct = action.payload.data.products
        state.categoryLoading = false;


      })
      .addCase(categoryThunk.rejected, (state, action) => {
        console.log("reducers");
        state.categoryLoading = false;

      })

  }


})
export default categoryReducer.reducer;
