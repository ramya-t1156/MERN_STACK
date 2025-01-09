import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"
import {Component1} from "./Component";
import {Component2} from "./Component";
import {Component3} from "./Component";
import {Component4} from "./Component";
import {Component5} from "./Component";

function App() {
  let data1 = "the parent data"
  let data2 = "the parent data2"
  return (
      <>
          {/* passing data to contenet 
          App - Parent
          content - Child*/}
          <Content pData1 = {data1} pData2 = {data2}/>
          
      </>
  );
}
