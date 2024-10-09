import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../assets/amazonlogo.svg"
import Mobilenav from "./Mobilenav"
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function Header() {
  return (
    <div className='flex w-full bg-[#fff] h-16 px-4 md:px-14 justify-between items-center py-3 shadow-lg flex-1'>
      <div className='logo-div flex items-center'>
        <Mobilenav className="md:hidden" />
        <Link to="/"><img src={logo} className='h-12 w-23' alt="logo" /></Link>
      </div>
      <div className='hidden md:block'>
        <input type="search" className='rounded-full w-80 border outline-none hover:border-[#2257bf] py-2 px-3 ml-2 h-9' placeholder='Search here...' />
      </div>
      <div className="user-div">
        <div className="flex items-center">
          <MdOutlineShoppingCart className='text-2xl d-block cursor-pointer text-[#2257bf]' />
          <Link to="/login"><Button className='ml-2 bg-[#2257bf] py-2 px-3 text-white rounded-lg hidden md:block hover:bg-[#3867C5]'>Login / Sign up</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
