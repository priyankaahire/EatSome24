import { configureStore, createReducer } from "@reduxjs/toolkit";

const appStore = configureStore({

    reducer:{
        cart: createReducer
    }
}); //Creating 

export default appStore
