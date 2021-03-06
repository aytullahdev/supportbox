import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService  from './ticketService'
const initialState={
    tickets:[],
    ticket:{},
    isError:false,
    isSuccess:false,
    isCreated:false,
    isLoading:false,
    message:''
}
//Create ticket
export const createTicket = createAsyncThunk('ticket/create',async (ticketData,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token;
       return await ticketService.createTicket(ticketData,token);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//Get User Tickets
export const getTickets = createAsyncThunk('ticket/get',async (_,thunkAPI)=>{
    try{
        const token = thunkAPI.getState().auth.user.token;
       return await ticketService.getTickets(token);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const ticketSlice = createSlice({
    name:'ticket',
    initialState,
    reducers:{
        reset: (state)=> initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createTicket.pending,(state)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })
        .addCase(createTicket.fulfilled,(state)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.isCreated=true;
        })
        .addCase(createTicket.rejected,(state,action)=>{
            state.isError=true
            state.isLoading=false
            state.isSuccess=false;
            state.message = action.payload
        })
        .addCase(getTickets.pending,(state)=>{
            state.isLoading=true;
            state.isSuccess=false;
        })
        .addCase(getTickets.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=false;
            state.tickets = action.payload;
            state.isError=false;
            
        })
        .addCase(getTickets.rejected,(state,action)=>{
            state.message = action.payload;
            state.isError=true;
            state.isLoading=false;
        })
    }
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer