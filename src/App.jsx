import React from 'react'
import NavBar from './component/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Signup from "./pages/Signup"
import Login from './pages/Login'
import Footer from './component/Footer'
import NotFound from "./pages/NotFound"


const App = () => {
  const location = useLocation()
  const routesWithNavbar = ["/", "/about", "/contact", "/account", "/book","/products", "/services", "/cart"].includes(location.pathname)
  return (
    <div>
      {routesWithNavbar && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/book' element={<Booking />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      {routesWithNavbar && <Footer />}
    </div>
  )
}

export default App