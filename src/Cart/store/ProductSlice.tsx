import { createSlice, createAsyncThunk,ThunkAction,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const ProductAPI = "https://fakestoreapi.com/products";

interface Product {
    data: any[];
  }

  export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get<Product[]>(ProductAPI);
    return response.data;
  });

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    // Other sync reducers
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled.type, (state, action:any) => {
      return action.payload;
    });
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;
