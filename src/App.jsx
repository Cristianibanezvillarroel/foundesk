import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/Navbar'
import { Dashboards } from './pages/Dashboards'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Footer } from './components/Footer'
import { Courses } from './pages/Courses'
import { CoursesCategories } from './pages/CoursesCategories'
import { Diary } from './pages/Diary'
import { Blog } from './pages/Blog'
import { BlogDetail } from './pages/BlogDetail'
import { Controller } from './pages/Controller'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:category' element={<Courses />}/>
        <Route path='/coursescategories' element={<CoursesCategories />}/>
        <Route path='/dashboards' element={<Dashboards />}/>
        <Route path='/dashboards/:category' element={<Dashboards />}/>
        <Route path='/controller' element={<Controller />}/>
        <Route path='/controller/:category' element={<Controller />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/clientes' element={<Testimonials />}/>
        <Route path='/diary' element={<Diary />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/blog/:id' element={<BlogDetail />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
