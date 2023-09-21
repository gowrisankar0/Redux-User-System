import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice";
   
 const store=configureStore({
    reducer:{
        userInfo:userReducer
    }
 })


 export default store;