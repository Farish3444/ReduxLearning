import { createSlice } from '@reduxjs/toolkit';


const TodoFunctions = createSlice({
    name:'todo',
    initialState:{data:''},
    reducers:{
       listinput:(state,action)=>{
        state.data = action.payload
       } 
    }
});

export const { listinput } = TodoFunctions.actions;
export default TodoFunctions.reducer;