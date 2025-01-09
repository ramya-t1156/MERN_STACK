import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"

function App() {
  function getData(data){
    console.log(data);
  }
  return (
      <>
          <Content pData = {getData}/>
      </>
  );
}


export default App;
