import React from 'react'
import {useEffect,useState} from 'react'

function ApiCall() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData= async()=>{
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            let resParse = await res.json();
            setData(resParse)
        }
        getData()
    },[])
  return (
    <div>
        {data.map((i)=><li key = {i.id}>{i.body}</li>)}
    </div>
  )
}

export default ApiCall
