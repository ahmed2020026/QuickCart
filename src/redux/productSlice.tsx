import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/SYSTEM/productData";

export const SliceProduct = createSlice({
    name: 'product',
    initialState: {
        list: products,
    },
    reducers: {
        addProduct: (state, action) => {
            state.list.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.list = state.list.filter(product => product.id !== action.payload)
        },
    }
})
export const { addProduct, removeProduct } = SliceProduct.actions