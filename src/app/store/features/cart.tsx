import { Cart } from '@/app/utils/type'
import { createSlice } from '@reduxjs/toolkit'




// Define the initial state using that type
const initialState: Cart[]= [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionality
    addToCart(state,action){
      let uuid = Math.floor(1000 + Math.random()*9000);
      let newObj = {...action.payload,uuid};
      state.push(newObj);

    },
    delItem(state, {payload}){
      return state.filter((val)=> val.uuid !== payload);
    },
  },
})

export const {addToCart, delItem} = cartSlice.actions

export default cartSlice.reducer