import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "../slice/toDoSlice";

const toDoStore=configureStore({
    reducer:{
        toDoSlice}
})

export default toDoStore