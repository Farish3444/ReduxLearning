import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:'Knowledge is inveitable'},
    {id:2,title:'Read Read Read Read'}
];

const PostSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        },
        removePost(state,action){
           return state.filter((f) => f.id !== action.payload)
        }
    }
});

export const selectAllPosts = (state:any) =>state.posts; 
export const { postAdded,removePost } = PostSlice.actions;
export default PostSlice.reducer;