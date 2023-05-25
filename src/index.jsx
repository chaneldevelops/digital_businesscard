import React from "react"
import ReactDOM from 'react-dom/client' // this is the new addition from the scrimba
import App from './App.jsx'
import "../src/style.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

