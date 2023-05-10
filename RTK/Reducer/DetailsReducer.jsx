import { createSlice } from "@reduxjs/toolkit";
import { detailsThunk } from "../Thunk/DetailsThunk";
let initState = {
  detailsData: {}
}
let detailsReducer = createSlice({
  name: "detail",
  initialState: initState,

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailsThunk.pending, (state, action) => {
        // console.log("pending")
      })
      .addCase(detailsThunk.fulfilled, (state, action) => {
        // console.log(action.payload.data);
        state.detailsData = action.payload.data
      })
      .addCase(detailsThunk.rejected, (state, action) => {
        console.log("rejected")
      })

  }

})
export default detailsReducer.reducer;