import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Post } from './Post'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />   
    <Post/> 
  </React.StrictMode>
 
)
