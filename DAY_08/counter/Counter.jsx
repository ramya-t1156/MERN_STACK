import React from "react"
import { useSelector,useDispatch } from "react-redux";
import {decrement,increment,reset,addValue} from '../../slice/counterSlice';

function Counter(){
    const selector = useSelector((state)=>state.counter);
    console.log(selector);
    
    let userValue  = 0;
    const dispatch = useDispatch();

    // function handleDecrement(){
    //     if(selector.count>0){
    //         dispatch(decrement())
    //     }
    // }

    function handleClick(){
        userValue = Number.parseInt(prompt("Enter number"))
        dispatch(addValue(userValue))
    }

    return(
        <div>
            <div>{selector.count}</div>
            <button onClick = {()=>dispatch(increment())}>INCREMENT</button>
            {/* <button onClick = {handleDecrement}>DECREMENT</button> */}
            <button>DECREMENT</button>
            <button onClick = {()=>dispatch(reset())}>RESET</button>
            <button onClick = {handleClick}>ADDVALUE</button>
        </div>
    )
}

export default Counter;
