import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./features/PostSlice";
import UserSlice from "./features/users/UserSlice";

const store = configureStore({
    reducer:{
        posts:PostSlice,
        users:UserSlice
    }
});


export default store