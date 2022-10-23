import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/Authentication/slices/authSlice";
import jobReducer from "./reducer/jobReducer";
import userReducer from "./reducer/userReducer";
const store = configureStore(
    {
        reducer:{
            auth: authSlice,
            userManage: userReducer,
            jobManage:jobReducer
        }
    }
)

export default store

