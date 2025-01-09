import React from 'react';


function Content(){
    function handleClick(){
        alert("you clicked the button");
    }
    return (
        <div>
            <button onClick = {handleClick}>Click me</button>
            {/* <button onClick = {handleClick()}>Click me</button> // the function will called before the button clicked because of ()->this symbol*/}
            
        </div>
    );
}


export default Content;
