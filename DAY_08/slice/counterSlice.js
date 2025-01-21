import {createSlice} from "@reduxjs/toolkit"

// const count1 = prompt("Enter the number:")
// // also use like count1 = parseInt(count1)

// const initialState = {
//     // key - count , value - count1
//     count : count1
// }

const initialState = {
    // key - count , value - 0
    count : 0
}

// step - 04 : create slice
const counter = createSlice({
    // name to the slice
    name : "counter",
    // need to pass the initial value
    initialState,
    reducers : {
        // state parameter is default parameter
        increment : (state)=>{
            state.count++;
        },
        decrement : (state)=>{
            if(state.count>0){
                state.count--;
            }
            else{
                state.count = 0;
            }
        },
        reset : (state)=>{
            state.count = 0;
        },
        addValue : (state,action)=>{
            // action.payload - contains our data
            state.count += action.payload
        }
    }
})
// for exporting inc , dec , reset functions
export const {decrement , increment , reset , addValue} = counter.actions;
export default counter.reducer;
