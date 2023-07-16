import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Elon Musk'},
    {id:'1',name:'Tesla'},
    {id:'2',name:'SpaceX'},
]


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllusers = (state:any)=>state.users
export const {} = userSlice.actions
export default userSlice.reducer