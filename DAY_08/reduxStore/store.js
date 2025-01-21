import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "/slice/counterSlice";

// step - 02 : create an store
const store = configureStore({
    reducer : {counter:counterSlice}
})
export default store; 
