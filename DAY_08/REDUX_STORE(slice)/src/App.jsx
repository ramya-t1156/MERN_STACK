import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Counter from './counter/Counter'
import Blog from './Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
   
   </>
  )
}

export default App