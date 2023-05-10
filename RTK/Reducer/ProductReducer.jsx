import { createSlice } from "@reduxjs/toolkit";
import { ProductThunk } from "../Thunk/ProductThunk";
let initState = {
  products: [],
  productLoading: false,
}
let ProductReducer = createSlice({
  name: 'AllProduct',
  initialState: initState,
  reducers: {



  },
  extraReducers: (builder) => {
    builder
      .addCase(ProductThunk.pending, (state, action) => {

        // console.log("loading");
        state.productLoading = true;

      })
      .addCase(ProductThunk.fulfilled, (state, action) => {
        state.productLoading = false;

        state.products = action.payload.data.products
      })
      .addCase(ProductThunk.rejected, (state, action) => {
        state.productLoading = false;

        console.log('rejected');
      })

  }

})

export default ProductReducer.reducer

