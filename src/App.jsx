import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Teach } from './pages/Teach'
import { About } from './pages/About'
import { Testimonials } from './pages/Testimonials'
import { Footer } from './components/Footer'
import { Courses } from './pages/Courses'
import { CoursesCategories } from './pages/CoursesCategories'
import { Diary } from './pages/Diary'
import { Blog } from './pages/Blog'
import { BlogDetail } from './pages/BlogDetail'
import { Train } from './pages/Train'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { CoursesDetail } from './pages/CoursesDetail'
import { Profile } from './pages/Profile'
import { ShoppingCart } from './pages/ShoppingCart'
import UserState from './context/User/UserState'
import PublicRoute from './components/routes/PublicRoute'
import AuthRoute from './components/routes/AuthRoute'
import PrivateRoute from './components/routes/PrivateRoute'

function App() {

  return (
    <>
      <UserState>
        <NavBar />
        
          {/* RUTA BASE */}          
          <PublicRoute path='/' element={<Home />} />

          {/* RUTAS ESTÁTICAS */}
          <PublicRoute path='/teach' element={<Teach />} />
          <PublicRoute path='/train' element={<Train />} />
          <PublicRoute path='/coursescategories' element={<CoursesCategories />} />
          <PublicRoute path='/blog' element={<Blog />} />
          <PublicRoute path='/diary' element={<Diary />} />
          <PublicRoute path='/about' element={<About />} />


          {/* RUTAS DINÁMICAS */}
          <PublicRoute path='/courses/detail/:id' element={<CoursesDetail />} />
          <PublicRoute path='/blog/:id' element={<BlogDetail />} />
          <PublicRoute path='/courses' element={<Courses />} />
          <PublicRoute path='/courses/:category' element={<Courses />} />

          {/* RUTAS DE AUTENTICACIÓN */}          
          <AuthRoute path='/login' element={<Login />} />
          <AuthRoute path='/signup' element={<Signup />} />

          {/* RUTAS PRIVADAS */}
          <PrivateRoute path='/profile' element={<Profile />} />
          <PrivateRoute path='/shoppingcart' element={<ShoppingCart />} />
                  

          {
          /*<Route path='/' element={<Home />} />
          <Route path='/teach' element={<Teach />} />
          <Route path='/teach/:category' element={<Teach />} />
          <Route path='/train' element={<Train />} />
          <Route path='/train/:category' element={<Train />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          */}
          
        <Footer />
      </UserState>
    </>
  )
}

export default App
