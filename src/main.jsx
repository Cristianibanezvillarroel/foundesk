import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ShoppingProvider } from './context/Shopping/ShoppingContext.jsx'
import { ProgressProvider } from './context/Progress/ProgressContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <>
      <ShoppingProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </ShoppingProvider>
    </>
  </HashRouter>,
)
