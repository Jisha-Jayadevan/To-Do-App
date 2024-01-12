import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import toDoStore from './store/toDoStore.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter><Provider store={toDoStore}><App /></Provider></BrowserRouter>
  </React.StrictMode>,
)
