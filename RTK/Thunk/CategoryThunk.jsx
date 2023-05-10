import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let categoryThunk = createAsyncThunk(
    "categoryThunk/category",
    async (arg, ThunkAPI) => {
        let { rejectWithValue } = ThunkAPI;
        try {
            if (arg.category !== undefined) {
                let res = await axios.get(
                    `https://dummyjson.com/products/category/${arg.category}`
                );
                return res;
            }
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);
