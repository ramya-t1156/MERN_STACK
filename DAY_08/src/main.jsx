import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// step - 01 : importing necessary packages
import {Provider} from "react-redux"
import store from "../reduxStore/store.js"

createRoot(document.getElementById('root')).render(
  // step - 03 : wrap App component with Provider componenet
  <Provider store = {store}>
    <App/>
  </Provider>
)