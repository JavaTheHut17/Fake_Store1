import { createSlice } from "@reduxjs/toolkit";
import { OrderSep } from "./myOrdersSlice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalItemCount: 0,
    itemCount: 1,
    itemCountArray: [],
    itemsWithCount: [],
    cartTotal: 0,
    items: [],
  },

  reducers: {



    addItemCart: (state, action) => {
      
      const data = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      
      if (state.cartItems.length !== 0) {
        if (existingItem === undefined) {
      
        state.itemsWithCount.push(action.payload);
          const indx = state.itemsWithCount.findIndex(
            (item) => item.id == action.payload.id);
         state.cartTotal += state.itemsWithCount[indx].price
         state.totalItemCount +=1;
        state.itemsWithCount[indx].ItemCount = 1;
        }
      }
      if (state.cartItems.length === 0) {
        state.cartItems.push(action.payload);
        state.itemsWithCount = state.cartItems.map((item) => ({
          ...item,
          ItemCount: 1,
        }));
       const indx = state.itemsWithCount.findIndex(
            (item) => item.id == action.payload.id);
         state.cartTotal += state.itemsWithCount[indx].price
         state.totalItemCount +=1;
      }
   


    },

    // badgeCount: (state) => {
    //   const count = state.cartItems.length;
    //   state.totalItemCount = count;
    //   return state.totalItemCount;
    // },

    increaseItemCount: (state, action) => {
      const indx = state.itemsWithCount.findIndex(
        (item) => item.id == action.payload
      );
      state.itemsWithCount[indx].ItemCount += 1;
     state.cartTotal += state.itemsWithCount[indx].price
     state.totalItemCount +=1;

 

      
    },
    decreaseItemCount: (state, action) => {
      const indx = state.itemsWithCount.findIndex(
        (item) => item.id == action.payload
      );
      state.itemsWithCount[indx].ItemCount -= 1;
      state.totalItemCount -=1;
      state.cartTotal -= state.itemsWithCount[indx].price
      if (state.itemsWithCount[indx].ItemCount === 0) {
        const itemIdToRemove = action.payload;

        const updatedItems = state.itemsWithCount.filter(
          (item) => item.id !== itemIdToRemove
        );

        state.itemsWithCount = updatedItems;
        state.cartItems = updatedItems;
      }

 

    },
    emptyCart: (state)=>{

      state.itemsWithCount = [];
      state.cartItems = [];
      state.cartTotal = 0;
      state.totalItemCount = 0;

    },

    updateItemsDB: (state, action) =>{
      const data = action.payload;
      const res = data.map((item)=>({
        prodID : item.id,
        price : state.cartTotal,
        quantity : item.ItemCount
      
      }))
      state.items =  res;
    
    }




  },
});

export const { addItemCart, badgeCount, increaseItemCount, decreaseItemCount, emptyCart, updateItemsDB} =
  cartSlice.actions;
export const cartArray = (state) => state.cart.cartItems;
export const totalCartItems = (state) => state.cart.totalItemCount;
export const itemCount = (state) => state.cart.itemCount;
export const itemCountArray = (state) => state.cart.itemCountArray;
export const itemsWithCount = (state) => state.cart.itemsWithCount;
export const cartTotal = (state) => state.cart.cartTotal;
export const totalItemCount = (state) => state.cart.totalItemCount;
export const items = (state) => state.cart.items;
export default cartSlice.reducer;
