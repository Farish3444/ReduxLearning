import { configureStore,AnyAction,Reducer, combineReducers } from "@reduxjs/toolkit";
import PostSlice,{Post} from "./features/PostSlice";
import UserSlice,{User} from "./features/users/UserSlice";
import  APIActions,{APIState}  from "../APIcalls/ApiSlice";


interface PostsInter{
    posts:Post
}

interface UsersInter {
    users:User
}

interface RootState {
    apis: APIState;
      users:User[];
      posts:Post[];
  }

  const rootReducer:Reducer<RootState,AnyAction> = combineReducers({
        posts:PostSlice,
        users:UserSlice,
        apis:APIActions,
  })


const store = configureStore({
    reducer: rootReducer,
});


export default store