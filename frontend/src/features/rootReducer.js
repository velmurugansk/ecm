import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import authSlice from '../features/auth/authSlice'

const presistConfig = {
    key: 'root',
    version : 1,
    storage
}

const rootReducer = combineReducers({
    auth: persistReducer(presistConfig, authSlice)
})

export default rootReducer;