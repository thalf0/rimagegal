import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App url={"https://picsum.photos/v2/list"} page={"1"} limit={"13"}/>
  </React.StrictMode>,
)
