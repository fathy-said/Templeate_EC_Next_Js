import { createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "../Thunk/SearchProduct";
let initState = {
  searchData: [],
  search: false

};

let searchReducer = createSlice({
  name: 'search',
  initialState: initState,
  reducers: {
    chickSearch: (state, action) => {
      // state.search = action.payload.type
      if (action.payload.type !== true) {
        state.searchData = [];
      }
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProduct.pending, (state, action) => {
        // console.log('loading')
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        // console.log(action.payload.data.products)
        state.searchData = action.payload.data.products
      })
      .addCase(searchProduct.rejected, (state, action) => {
        console.log('rejected')
      })


  }

})

export let { chickSearch } = searchReducer.actions;
export default searchReducer.reducer;
