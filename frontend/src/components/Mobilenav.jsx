import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";

function Mobilenav() {
  const [expand, setExpand] = useState(false);
  const handleSidebar = () => {
    setExpand(true); 
  }

  return (
    <>
    <MdMenu className='md:hidden mr-2 text-2xl cursor-pointer text-[#2257bf]' onClick={handleSidebar} />
    <div id="sideNav" className={`fixed h-screen top-0 px-4 py-6 ${expand ? 'w-3/4 left-0' : 'w-0 left-[-35px]'} ease-in-out z-2 duration-300 overflow-hidden bg-gray-600`}> 
      <div className="flex justify-end">
        <MdClose className='text-2xl text-white cursor-pointer' onClick={()=> setExpand(false)}/>
      </div>
      <div className='mt-2 flex'>
        <button className='w-full bg-[#2257bf] py-2 px-3 text-white rounded-lg'>Login / Sign up</button>
      </div>
    </div>
    </>
  )
}

export default Mobilenav
