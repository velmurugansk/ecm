import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const presistConfig = {
  key : 'root',
  version : 1,
  storage
}

const reducers = combineReducers({ auth: authSlice })
const persistedReducer = persistReducer(presistConfig, reducers)

const store = configureStore({
  reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck : {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        } 
      })
})

export default store