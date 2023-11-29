import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { ShoppingProvider } from './context/ShoppingContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <>
      <UserProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </UserProvider>
    </>
  </HashRouter>,
)
