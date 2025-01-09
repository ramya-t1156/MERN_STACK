import React from 'react'

function Content() {
  return (
      <>
      {/*           
        // example - 1
        if(true){
            return(
              <h1>It's for client</h1>
            )
          }
          else{
            return(
              <h1>Its for developers</h1>
          )
          } */}
        {/*           
        // example - 2
        (it's also like conditional formatting)
        let data = true;
        return(
            <>
              {data&&
                  <h1>yeah its</h1>
              }
            </>
        )  */}
        {/* 
        // example - 3
        let data = [{id:1,userName:"jhon"}];//it renders it
        // let data = []//it renders
        return(
        <>
            {!data.length>0&&
                <h1>yeah its</h1>
            }
        </>
        )
        */}
        {/* 
        // example - 4
        // rendering using ternary operator
        return(
          <>
            {data.length>0?<h1>yes there is a data</h1>:<h1>there is no data</h1>
          }</>
          )
        */}
        {/*
        // example - 5
        // rendering using ternary operator
        return(
          <>
            {data.length>0?<h1>yes there is a data</h1>:<h1>there is no data</h1>
            }
          </>
        )
        */}
      </>
  );
}


export default Content;
