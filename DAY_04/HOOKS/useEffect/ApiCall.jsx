import React from 'react'
import { useEffect,useState } from 'react'

function ApiCall() {
    const [data,setdata]=useState([])
    useEffect(()=>{
            const getData = async () => {
            let res =await fetch("https://jsonplaceholder.typicode.com/posts")
            let resParse = await res.json()
            SVGMetadataElement(resParse)
            console.log(resParse)
        }
    },[])

  return (  
    <div>
        {data.map((i)=><li>{i.body}</li>)}      
    </div>
  )
}

export default ApiCall
