import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export let ProductThunk = createAsyncThunk('AllProduct/ProductThunk', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI;

  try {
    let res = await axios.get(`https://dummyjson.com/products/`);
    // console.log(res)
    return (res)
  }
  catch (e) {
    return rejectWithValue(e.message);
  }

})