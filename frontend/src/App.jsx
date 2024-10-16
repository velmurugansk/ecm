import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
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


function App() {

  const isAuthenticated =true;
  const user = {name: 'skvelmurugan',
    role: 'user'
  };

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
