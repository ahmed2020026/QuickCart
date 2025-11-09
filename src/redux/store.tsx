import { configureStore } from "@reduxjs/toolkit";
import { SliceProduct } from "./productSlice";

export const Store = configureStore({
    reducer: {
        product: SliceProduct.reducer,
    }
})