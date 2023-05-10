import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export let detailsThunk = createAsyncThunk('detailsThunk/detail', async (arg, ThunkAPI) => {
  let { rejectWithValue } = ThunkAPI
  try {
    if (arg.id !== undefined) {
      let res = await axios.get(`https://dummyjson.com/products/${arg.id}`)
      return res
    }

  } catch (e) {
    return rejectWithValue(e.message)
  }
})