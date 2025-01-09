import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import our context
import MyContext from './ContextApi.jsx'

let data = "global data"
let data1 = "global data1"
createRoot(document.getElementById('root')).render(
  // for only access one data 
  // <MyContext.Provider value ={data}>
  // for having more.. we can access like {data:d}=>{d}
  <MyContext.Provider value ={{data,data1}}>
    <App/>
  </MyContext.Provider>
)
