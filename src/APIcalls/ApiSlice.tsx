import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = ''

const ApiSlice = createSlice({
    name:'api',
    initialState:{
        slicedata:[]
    },
    reducers:{},
    extraReducers:{

    }
});

export const {} = ApiSlice.actions;
export default ApiSlice.reducer;