import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/Navbar'
import { Tools } from './pages/Tools'
import { Partners } from './pages/Partners'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Footer } from './components/Footer'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/herramientas' element={<Tools />}/>
        <Route path='/partners' element={<Partners />}/>
        <Route path='/nosotros' element={<About />}/>
        <Route path='/clientes' element={<Testimonials />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
