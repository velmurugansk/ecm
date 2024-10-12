import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Loginreg from './components/Loginreg';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Adminlayout from './components/adminview/Adminlayout';
import Admindashboard from './components/pages/adminview/Dashboard';
import Adminproducts from './components/pages/adminview/Products';
import Adminorders from './components/pages/adminview/Orders';


function App() {
  return (
    <Router>
      <Header/>
      <div className='px-0 lg:px-10 xl:px-20'>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Loginreg/>}></Route>      
      <Route path="/admin" element={<Adminlayout />}>
        <Route path="dashboard" element={<Admindashboard />} />
        <Route path="products" element={<Adminproducts />} />
        <Route path="orders" element={<Adminorders />} />
      </Route>   
    </Routes>    
    </div>   
    </Router>
  )
}

export default App
