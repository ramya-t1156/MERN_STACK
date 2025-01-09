// // react not responsible for variable changes
// function Footer(){
//     let inc = 0;
//     console.log(inc);
//     return (
//         <>
//             <div>{inc}</div>
//             <button onClick ={()=>++inc}>add one</button>
//         </>
//     )
// }

// export default Footer;
// //throws an error
// // react can't change the variable directly so we go for useState
// import {useState} from 'react';


// react can't change the variable directly so we go for useDate
import {useState} from 'react';
import React from 'react';

function Footer(){

    // destructuring data-variable holding the data
    const [data,setData] = useState(0);
    console.log("state",data);
    function handleClick(){
        // // add only one
        // // because thisfunction was called only one time
        // setData(data+1)
        // setData(data+1)
        // it will update to 2
        setData((pr)=>pr+1)
        setData((pr)=>pr+1)
    }
    return (
        <>
            <div>{data}</div>
            {/* <button onClick ={()=>setData(data+1)}>add one</button> */}
            <button onClick ={handleClick}>add one</button>
        </>
    )
}

export default Footer;
