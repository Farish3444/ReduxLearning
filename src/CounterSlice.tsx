import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        addby2:(state)=>{
            state.value +=2
        },
        inputvalue:(state,action)=>{
            state.value += action.payload
        }
    }
});


export const { increment,decrement,addby2, inputvalue } = counterSlice.actions;
export default counterSlice.reducer;