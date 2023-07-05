import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Item{
    id:number,
    f:any
}

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state:any,action){
            state.push(action.payload)
        },
        remove(state:any,action){
         return state.filter((f:any) =>f.id !== action.payload)
        } 
    }
});

export const {add,remove} = cartSlice.actions
export default cartSlice.reducer