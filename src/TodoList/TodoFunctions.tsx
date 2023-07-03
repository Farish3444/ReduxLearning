import { createSlice } from '@reduxjs/toolkit';

interface TodoState {
    data: string[];
  }

const TodoFunctions = createSlice({
    name:'todo',
    initialState:{data: [] } as TodoState,
    reducers:{
       listinput:(state,action)=>{
        state.data.push(action.payload);
       },
       listremove:(state,action)=>{
        state.data = state.data.filter(a => a != action.payload)
        } 
    }
});

export const { listinput,listremove } = TodoFunctions.actions;
export default TodoFunctions.reducer;