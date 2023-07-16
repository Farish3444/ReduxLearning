import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

interface Author {
    author:string;
}

// const initialState:Author[] = [
//     {
//         author:'Dummy Author'
//     }        
// ];


interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
    userId?: string;
    author:string;
  }
  
  const initialState: Post[] = [
    {
      id: '1',
      title: 'Learning Redux Toolkit',
      content: "I've heard good things.",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      author:'tolstoy',
    },
    {
      id: '2',
      title: 'Slices...',
      content: "The more I say slice, the more I want pizza.",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      author:'murakami',
    },
  ];


const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
    addA :(state,action: PayloadAction<Post>)=>{
        const post = action.payload;
        const newPost:any = {
              ...post,
              author:post  
        }
        state.push(newPost)
    }
    
    }
})

export const selectAllusers = (state:any)=>state.users
export const {addA} = userSlice.actions
export default userSlice.reducer