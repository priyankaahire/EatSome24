//import { configureStore, createReducer } from "@reduxjs/toolkit";
// import { createReducer, configureStore } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const initialState = {
  // initial state properties
};

    const rootReducer = combineReducers({
        cart: cartSlice,
        // Other reducers if any
    });
  
    const appStore = configureStore({
        reducer: rootReducer,
        // Other store configurations
    });
  
  export default appStore;

