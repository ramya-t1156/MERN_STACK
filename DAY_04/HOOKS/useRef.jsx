// react can't change the variable directly so we go for useDate
import {useState,useRef} from 'react';
import React from 'react';

/*
const refer = useRef()//throws an error -> Beacuse hooks are dependent on functional component
//we can't use the HOOK outside functional component
//hocks will never created inside blocks
// hooks will never created in the iterative block
*/ 

function Footer(){
    const refer = useRef()
    // destructuring data-variable holding the data
    const [data,setData] = useState(0);
    function handleClick(){
        refer.current.focus()
    }
    
    return (
        <>
            <input ref ={refer} type = "text"></input>
            <button onClick ={handleClick}>focus</button>
        </>
    )
}

export default Footer;
