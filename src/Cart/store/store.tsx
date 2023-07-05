import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer:{
        cart:CartSlice,
        product:ProductSlice
    }
});

export default store;