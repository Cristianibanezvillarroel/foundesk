import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ShoppingProvider } from './context/Shopping/ShoppingContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <>      
        <ShoppingProvider>
          <App />
        </ShoppingProvider>      
    </>
  </HashRouter>,
)
