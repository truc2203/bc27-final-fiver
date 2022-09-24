import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/Authentication/slices/authSlice";
const store = configureStore(
    {
        reducer:{
            auth: authSlice,

        }
    }
)

export default store

// banj chua cau hinhg store 
// minh call api binh thuong a, banj kiem tra phan store nayf chua co user, user 