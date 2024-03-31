import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
    reducers: {
      addItem: (state, action) => {
        //Modify the state

        //Vanialla(older) Redux => DON'T MUTATE STATE and returning the state was mandotary
        //   (i.e we can't change we have to craete the copy of that we have to changes)
        //const newState = [...state]
        //newState.items.push(action.payload)
        //return newState;
        //! Genrally we modified the state directly 

        //$ In Redux toolkit, we can mutate the state directly DON'T need to return REdux does not force to return anything
        //we HAVE to mutate the state directly

        //~@ In Redux what it is doing backgroundly it is Immutable state in background it is not telling to the developer 
        //~@ It is using immer js redux use this finding 
        //~@ it takes the current state and take the old state and give new state with diff of that state
        //~@ It is not changing the old state it is giving the new state
        state.items.push(action.payload);
      },
      //Orinal state state=['Pizza', 'Burger']
      clearCart: (state, action) => {
        //state.item = , action[]; 
        //! But if here if we are trying to mutate the state it is mutated locally that why it is not refelecting
        //! console.log(state) (Output Pizza, Burger); state = [] console.log(state) (output [])
        //state = ["Priyanka"] //! this will not work i.e we are not chnaging the state we are giving a referebce to it

        //RTK - either Mutate the existing state or return a new State or return a new state
        // state.items.length = 0 //originaState = []
        // state.items.length = 0
        return {items: []} //or state.items.length = 0
      },
      removeItem: (state, action) => {

        state.items.pop();
      },
    },
});

//* we will export the reducer and action
export const {addItem, removeItem, clearcart} = cartSlice.actions // export the action
export default cartSlice.reducer; // Default export (its mean your exporting on reducer)



