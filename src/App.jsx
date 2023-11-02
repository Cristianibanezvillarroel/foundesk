import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/Navbar'
import { Dashboards } from './pages/Dashboards'
import { Documentals } from './pages/Documentals'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Footer } from './components/Footer'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboards' element={<Dashboards />}/>
        <Route path='/documentals' element={<Documentals />}/>
        <Route path='/nosotros' element={<About />}/>
        <Route path='/clientes' element={<Testimonials />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
