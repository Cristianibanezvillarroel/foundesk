import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/Navbar'
import { Dashboards } from './pages/Dashboards'
import { Templates } from './pages/Templates'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Footer } from './components/Footer'
import { Courses } from './pages/Courses'
import { CoursesCategories } from './pages/CoursesCategories'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/coursescategories' element={<CoursesCategories />}/>
        <Route path='/dashboards' element={<Dashboards />}/>
        <Route path='/templates' element={<Templates />}/>
        <Route path='/nosotros' element={<About />}/>
        <Route path='/clientes' element={<Testimonials />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
