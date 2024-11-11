import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Loginreg from './components/Loginreg';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Adminlayout from './components/adminview/Adminlayout';
import Admindashboard from './components/pages/adminview/Dashboard';
import Adminproducts from './components/pages/adminview/Products';
import Adminorders from './components/pages/adminview/Orders';
import Shoppinglayout from './components/shoppingview/Shoppinglayout';
import Shoppinghomepage from './components/pages/shoppingview/Shoppinghomepage';
import Notfound from './components/pages/notfound/Notfound';
import Listing from './components/pages/shoppingview/Listing';
import Checkout from './components/pages/shoppingview/Checkout';
import Shoppingaccount from './components/pages/shoppingview/Shoppingaccount';
import Authcheck from './components/common/Authcheck';
import Index from './components/pages/unauth/Index';
import { useEffect } from 'react';
import { checkAuth } from './features/auth/authSlice';


function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])
  
console.log(isAuthenticated, user)
  return (
    <Router>
      <Header/>
      <div className='px-0 lg:px-10 xl:px-20'>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Loginreg/>}></Route>      
      <Route path="/admin" element={
        <Authcheck isAuthenticated={isAuthenticated} user={user}>
          <Adminlayout />
        </Authcheck>        
        }>
        <Route path="dashboard" element={<Admindashboard />} />
        <Route path="products" element={<Adminproducts />} />
        <Route path="orders" element={<Adminorders />} />
      </Route>
      <Route path="/shop" element={
        <Authcheck isAuthenticated={isAuthenticated} user={user}>
          <Shoppinglayout />
        </Authcheck>
        }>
        <Route path="home" element={<Shoppinghomepage />} />
        <Route path="listing" element={<Listing />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account" element={<Shoppingaccount />} />
      </Route>   
      <Route path="/unauth" element={<Index/>} />
      <Route path="*" element={<Notfound />} />
    </Routes>    
    </div>   
    </Router>
  )
}

export default App
