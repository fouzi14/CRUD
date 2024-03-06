import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./Slice";


export const store = configureStore({
    reducer : {
        posts : postSlice
    }
})