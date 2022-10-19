import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/Authentication/slices/authSlice";
import userReducer from "./reducer/userReducer";
const store = configureStore(
    {
        reducer:{
            auth: authSlice,
            userManage: userReducer,
        }
    }
)

export default store

