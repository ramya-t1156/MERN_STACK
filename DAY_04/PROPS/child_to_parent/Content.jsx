import React from 'react';

function Content({pData}) {
    let cData = "this is data from the child";
    function handleClick(){
        pData(cData);
    }
    return (
        <>
            <button onClick = {handleClick}>Click me</button>
        </>
    );
}

export default Content;
