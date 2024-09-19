import React from 'react'

function Loginreg() {
  return (
    <div className='flex items-center justify-center h-full p-12'>
      <div className='lg:w-1/3 sm:w-4/5 border px-3 py-6 rounded-lg'>
        <h2 className='text-center text-2xl font-bold'>Create Account</h2>
        <div className='px-2 py-3'>
          <div className='my-2'>
            <input type="text" placeholder='Username' name='user' className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red user-err'></span>
          </div>
          <div className="my-2">
            <input type="email" placeholder='E-mail' name='email' className='w-full outline-0 border-b-2 px-3 py-2'/>  
            <span className='text-red email-err'></span>
          </div>
          <div className="my-2">
            <input type="password" placeholder='Password' name='pwd' className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red pwd-err'></span>
          </div>
          <div className='my-2'>
            <input type="password" placeholder='Confirm Password' name='cfmpwd' className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red cfmpwd-err'></span>
          </div>
          <button className='w-full rounded-full bg-[#2257bf] text-white py-2 mt-4'>Sign up</button>
          <p className='my-4'>Already have an account? <span className='text-base font-bold text-[#0066c0] cursor-pointer'>Login</span></p>
        </div>        
      </div>
    </div>
  )
}

export default Loginreg