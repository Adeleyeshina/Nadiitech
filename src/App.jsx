import React from 'react'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Account from './pages/Account'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Services from './pages/Services'
import Cart from './pages/Cart'
import Footer from './component/Footer'


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/book' element={<Booking />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App