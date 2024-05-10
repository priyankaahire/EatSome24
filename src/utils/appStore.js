//import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = {
  // initial state properties
};

const myReducer = createReducer(initialState, builder => {
    // builder.addCase(actionCreator, (state, action) => {
    //     state.someKey = action.payload;
    //   });
    // add reducer cases using builder methods
});

const appStore = configureStore({

    reducer:{
        cart: myReducer
    }
}); //Creating 

 export default appStore
