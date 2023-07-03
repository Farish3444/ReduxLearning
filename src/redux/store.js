import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../CounterSlice';
import TodoFunctions from "../TodoList/TodoFunctions";

const store = configureStore({
    reducer: {
        counter:CounterReducer,
        todostore:TodoFunctions
    },
})

export default store