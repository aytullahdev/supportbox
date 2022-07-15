/* eslint-disable no-unused-expressions */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService';
//Get User from local Storage
const user = JSON.parse(localStorage.getItem('user'));

//Initial State
const initialState={
    user:user?user:null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}


//User Registration
export const register = createAsyncThunk('auth/register',async (user,thunkAPI)=>{
    try{
       return await authService.register(user);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//User Login
export const login = createAsyncThunk('auth/login',async (user,thunkAPI)=>{
    console.log(user);
})


export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isError=false
            state.isSuccess=false
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading =true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(register.rejected,(state,action)=>{
            state.user = null
            state.isError=true
            state.isLoading=false
            state.message = action.payload
        })
    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer