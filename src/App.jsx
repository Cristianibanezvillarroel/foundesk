import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
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
import { Button } from 'react-bootstrap'
import { UserContext } from './context/UserContext'
import { CoursesDetail } from './pages/CoursesDetail'
import { useEffect } from 'react'
import { ShoppingContext } from './context/ShoppingContext'

function App() {
  const { token, setToken } = useContext(UserContext)
  const { shoppingCount, setShoppingCount } = useContext(ShoppingContext)

  useEffect(() => {
    ShoppingListStart()
  }, [])

  const ShoppingListStart = async () => {
    let shoppingList = []
    const ShoppingListGet = await localStorage.getItem('shoppingList')
    console.log(ShoppingListGet)
    if (ShoppingListGet === null) {
      console.log('storage vacio')
      setShoppingCount(0)
    } else {
      console.log('storage con registros')
      shoppingList = JSON.parse(ShoppingListGet)
      let shoppingListSize = shoppingList.length
      setShoppingCount(shoppingListSize)
    }
  }

  return (
    <>
      {token ? (
        <>
          <div>Hola Logueado</div>
          <Button onClick={() => { setToken(null) }}>SignOut</Button>
        </>
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:category' element={<Courses />} />
            <Route path='/coursescategories' element={<CoursesCategories />} />
            <Route path='/courses/detail/:id' element={<CoursesDetail />} />
            <Route path='/dashboards' element={<Dashboards />} />
            <Route path='/dashboards/:category' element={<Dashboards />} />
            <Route path='/controller' element={<Controller />} />
            <Route path='/controller/:category' element={<Controller />} />
            <Route path='/about' element={<About />} />
            <Route path='/clientes' element={<Testimonials />} />
            <Route path='/diary' element={<Diary />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
