import { useState, useEffect } from "react";

import { useState } from "react";
const useFetcher = (url) =>{
    const[data,setData] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch(url)
            const resParse = await res.json();
            setData(resParse)
        }
        getData()
    },[])
    return data;
}
export default useFetcher;
