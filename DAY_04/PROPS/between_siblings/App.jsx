import React, { useState } from 'react';
import Footer from './Footer';
import Content from './Content';

function App() {
    const [data2, setData2] = useState("");

    // Function to update state when data is received from Content
    function getData(data) {
        setData2(data);
    }

    return (
        <>
            {/* Passing the callback to Content */}
            <Content pData1={getData} />
            {/* Passing the updated data to Footer */}
            <Footer pData2={data2} />
        </>
    );
}

export default App;
