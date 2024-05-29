import { createSlice } from "@reduxjs/toolkit";
import { itemsWithCount } from "./cartSlice";

export const myOrdersSlice = createSlice({
  name: "myOrders",
  initialState: {

unpaidOrders:[],
itemGroup:1,
resUnpaidOrders:[],
token:'',
cartItems:[],


  },

  reducers: {

addOrder: (state, action) => {
state.unpaidOrders = action.payload



},

tokenGrab: (state, action) =>{

state.token = action.payload


},



cartGrab: (state, action) =>{

state.cartItems = action.payload



},
// OrderSep :(state, action) => {
// const data = action.payload;
// const res = data.map((item)=>({
//   prodID : item.id,
//   price : item.price,
//   quantity : item.ItemCount

// }))
// state.sepOrders =  res;
// console.log('sepOrders:', state.sepOrders)
// console.log('token:', state.token)
// }

  

  }
});


export const {addOrder, tokenGrab, OrderSep, cartGrab} = myOrdersSlice.actions;
export const unpaidOrders = (state) => state.myOrders.unpaidOrders;
export const resUnpaidOrders = (state) => state.myOrders.resUnpaidOrders;
export const token = (state) => state.myOrders.token;
export const cartItems = (state) => state.myOrders.cartItems;

export default myOrdersSlice.reducer;
