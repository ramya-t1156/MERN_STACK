import React from 'react';

function Content({ pData1, pData2 }) {
    // Define local variables if needed
    let { data1, data2 } = { data1: 1, data2: 2 };
    console.log(data1, data2);

    return (
        <>
            <p>Data from Parent 1: {pData1}</p>
            <p>Data from Parent 2: {pData2}</p>
        </>
    );
}

export default Content;
