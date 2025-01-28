import React from 'react'
import {useState} from 'react'
import axios from "axios"
import View from './View'

function Search() {
  const [value,setValue] = useState("")
  const [data,setData] = useState([])

  async function handleViews(){
    // to call API
    // axios.get(`http://localhost:3000/api/v1/search?search=${value}`)
    // to wait for axios response so 
    let res = await axios.get(`http://localhost:3000/api/v1/search?search=${value}`)
    setData(res.data)
    
    // console.log(res)
  }
  function handleClick(e){
    // to handle the default behavior of the browser
    e.preventDefault()
    handleViews()
  }
  return (
    <>  
      <form action ="">
        <input type = "text/" onChange = {(e)=>setValue(e.target.value)} value = {value}/>
        <button onClick = {(e)=>handleClick(e)}>Search</button>
      </form>
      {
        data.map((i) => (
          <View key={i._id} title={i.title} description={i.description} />
        ))
      }


    </>
  )
}

export default Search
