// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/dist";
import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = toolkitRaw.default ?? toolkitRaw;
const {createAsyncThunk} = toolkitRaw.default ?? toolkitRaw;
import axios from 'axios';

const initialvalue = {
    isAuthenticated:false,
    isLoading:false,
    user:null
}

export const registerUser = createAsyncThunk ('/auth/register',
    async (formdata) => {        
        const response = await axios.post('http://localhost:5000/api/auth/register', formdata,{
            withCredentials:true,
        });
        return response.data
    }
)

export const loginUser = createAsyncThunk ('/auth/login',
    async (formdata) => {        
        const response = await axios.post('http://localhost:5000/api/auth/login', formdata,{
            withCredentials:true,
        });
        
        return response.data
    }
)

const authSlice = createSlice({
    name : "auth",
    initialState: initialvalue,
    reducers:{
        // setUser:(state, action) => {}
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null
        })
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null
        })
    }
})

export const {actions: userActions} = authSlice.actions;
export default authSlice.reducer;