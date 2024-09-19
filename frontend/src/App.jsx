import './App.css'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Loginreg from './components/Loginreg';
import Header from './components/Header';
import Homepage from './components/Homepage';


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Loginreg/>}></Route>
    </Routes>
    </Router>
  )
}

export default App
