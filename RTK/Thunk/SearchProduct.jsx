import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let searchProduct = createAsyncThunk("searchProduct/", async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {

    if (arg.title != undefined) {

      let res = await axios.get(`https://dummyjson.com/products/search?q=${arg.title}`)
      return (res)
    }
  } catch (e) {
    return rejectWithValue(e.message)
  }


})