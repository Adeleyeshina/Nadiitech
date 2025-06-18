import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import AllowIfAuth from './component/AllowIfAuth'
import AccountInfo from './component/AccountComponent/AccountInfo'
import Order from './component/AccountComponent/Order'
import Address from './component/AccountComponent/Address'
import LoadingSpinner from './component/LoadingSpinner'
import GetBookings from './component/AdminComponent/GetBookings'
import CreateProducts from './component/AdminComponent/CreateProducts'
import AdminOrder from './component/AdminComponent/AdminOrder'
import AdminProducts from './component/AdminComponent/AdminProducts'
import ShowBookings from './component/AdminComponent/ShowBookings'
import ShowProductDetail from './component/productsPageComponent/ShowProductDetail';

const App = () => {
  const location = useLocation()
  const routesWithNavbar = ["/", "/about", "/contact", "/account", "/book","/products", "/services", "/cart",
     "/account/info", '/account/order', '/account/address', "/admin-samuel", "/admin-samuel/createproducts",
     "/admin-samuel/orders", "/admin-samuel/bookings", "/admin-samuel/products", 
     "/admin-samuel/show-booking/:id"].includes(location.pathname)
  const {user, checkAuth, checkingAuth} = useUserStore()

  useEffect(()=> {
    checkAuth()
  }, [checkAuth])
  if (checkingAuth) return <LoadingSpinner/>
  return (
    <div>
      {routesWithNavbar && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/book' element={<Booking />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/services' element={<Services />}/>
        <Route path="products/details/:id" element={<ShowProductDetail /> }/>
        <Route path="/account"element={!user ? <Login /> : <Account/>}>
          <Route path="info" element={<AccountInfo />}/>
          <Route path="order" element={<Order />}/>
          <Route path="address" element={<Address />}/>
        </Route>
        <Route path='/cart' element={!user ? <Login /> : <Cart/>}/>
        <Route path='/admin-samuel' element={user?.role ==='admin'? <AdminPage /> : <Navigate to="*" />}>
          <Route path='createproducts' element={<CreateProducts />}/>
          <Route path='orders' element={<AdminOrder />}/>
          <Route path='bookings' element={<GetBookings />}/>
          <Route path='products' element={<AdminProducts />}/>
          <Route path='show-booking/:id' element={<ShowBookings />}/>
        </Route>
        <Route element={user &&<Navigate to ="/"/> }>
          <Route path='/login' element={!user? <Login /> : <Navigate to="/" />}/>
          <Route path='/signup' element={!user? <Signup /> : <Navigate to ="/" />}/>
          <Route path='/check-email' element={!user? <Redirect /> : <Navigate to={"/"}/>}/>
          <Route path='/activate/:token' element={!user ? <Activate /> : <Navigate to={"/"}/>}/>
          <Route path='/forgot-password' element={!user? <Forget /> : <Navigate to="/"/>}/>
          <Route path='/reset-password' element={!user ? <ResetPassword /> : <Navigate to ="/" />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      {routesWithNavbar && <Footer />}
      <Toaster />
    </div>
  )
}

export default App