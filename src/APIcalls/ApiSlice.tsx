import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const getAPI = createAsyncThunk('posts/fetchPosts',async()=>{
    const response = await axios.get(API_URL);
    return response.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost',async(initialPost)=>{
    const response = await axios.post(API_URL,initialPost)
    return response.data
});



export const updatePost = createAsyncThunk('posts/updatePost',async(initialPost)=>{
    let id  = initialPost;
    try{
      const response = await axios.put(`${API_URL}/${id}`,initialPost)
      return response.data;
    }catch(err){
       throw err;
    }
})


export const deletePost = createAsyncThunk('posts/deletePost',async(initalPost)=>{
    let id = initalPost;
    try {
         const response = await axios.delete(`${API_URL}/${id}`)
        if(response?.status === 200) return initalPost;
        return `${response?.status} : ${response.statusText}`;
    }catch(err:any){
        return err.message;
    }
})


interface Post {

}
export interface APIState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  const initialState: APIState = {
    posts: [],
    status: 'idle',
    error: null,
  };

const ApiSlice = createSlice({
    name:'api',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAPI.pending,(state:any) =>{
            state.status = 'loading'
        }).addCase(getAPI.fulfilled,(state:any,action)=>{
            state.status = 'succeeded';
            state.posts = action.payload
        }).addCase(getAPI.rejected,(state:any,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const selectAllPosts = (state:any) => state.posts.posts;
export const getPostsStatus = (state:any) => state.posts.status;
export const getPostsError = (state:any) => state.posts.error;

export const APIActions = ApiSlice.actions;
export default ApiSlice.reducer;