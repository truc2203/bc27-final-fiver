import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./modules/Authentication/slices/authSlice";
import jobManageReducer from "./reducer/jobManageReducer";
import userReducer from "./reducer/userReducer";
const store = configureStore(
    {
        reducer:{
            auth: authSlice,
            userManage: userReducer,
            jobManage : jobManageReducer
        }
    }
)

export default store

