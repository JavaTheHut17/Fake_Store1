import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import myOrdersReducer from "./myOrdersSlice";
import profileSliceReducer from "./profileSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        myOrders: myOrdersReducer,
        profileSlice: profileSliceReducer,

        
    },
    });

    