import './App.css'
import {Routes, Route} from "react-router-dom"
import Layout from './components/Layout';
import Loginreg from './components/Loginreg';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/login" element={<Loginreg/>}></Route>
    </Routes>
  )
}

export default App
