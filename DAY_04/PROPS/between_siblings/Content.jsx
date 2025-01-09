import React from 'react';

function Content({ pData1 }) {
    const cData = "This is data from the child";

    // Function to send data back to the parent
    function handleClick() {
        pData1(cData);
    }

    return (
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}

export default Content;
