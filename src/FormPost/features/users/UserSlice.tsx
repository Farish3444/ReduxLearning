import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export interface initialType {

}

const initialState:initialType = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
    const response = await axios.get(USERS_URL);
    return response.data;
});

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    //extraReducter function is user for API calls which are making in redux, where Redux doesnt support async await in it we use createAsyncThunk
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
});

export const selectAllusers = (state:any)=>state.users;

export default userSlice.reducer