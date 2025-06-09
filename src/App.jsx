import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import NavBar from './component/NavBar'
import { useUserStore } from './stores/useUserStore'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
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
import Forget from './pages/Forget'
import Redirect from './pages/Redirect'
import ResetPassword from './pages/ResetPassword'
import Activate from './pages/Activate'
import AdminPage from './pages/AdminPage'
import RedirectIfAuth from './component/RedirectIfAuth'


const App = () => {
  const location = useLocation()
  const routesWithNavbar = ["/", "/about", "/contact", "/account", "/book","/products", "/services", "/cart"].includes(location.pathname)
const {user, checkAuth} = useUserStore()

// //  useEffect(() => {
// //    checkAuth()

// // }, [checkAuth])
  return (
    <div>
      {routesWithNavbar && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/account' element={!user ? <Login /> : <Account/>}/>
        <Route path='/book' element={<Booking />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/cart' element={!user ? <Login /> : <Cart/>}/>
        <Route element={<RedirectIfAuth />}>
          <Route path='/login' element={!user? <Login /> : <Navigate to="/" />}/>
          <Route path='/signup' element={!user? <Signup /> : <Navigate to ="/" />}/>
          <Route path='/check-email' element={!user? <Redirect /> : <Navigate to={"/"}/>}/>
          <Route path='/activate/:token' element={!user ? <Activate /> : <Navigate to={"/"}/>}/>
          <Route path='/admin-samuel' element={user?.role ==='admin'? <AdminPage /> : <Login/>}/>
        </Route>
        <Route path='/forgot-password' element={<Forget />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      {routesWithNavbar && <Footer />}
      <Toaster />
    </div>
  )
}

export default App