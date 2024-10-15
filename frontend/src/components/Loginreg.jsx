import React, {useState} from 'react'
import { Button } from './ui/button';
import Commonform from './common/Commonform';
import { registerFormcontrols } from '@/config';

const userregisterData = {
  username:'', email:'', password:''
}

function Loginreg() {
  const [islogin, setIslogin] = useState(true);
  const [userdata, setUserdata] = useState(userregisterData);
  const [logindata, setLogindata] = useState({username:'', password:''});
  const [err, setErr] = useState({});
  const [error, setError] = useState({});
  const pwdregx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

  const setValues = (e) => {
    e.preventDefault()
    const { name, value } = e.target; 
    setUserdata((prevFormData) => ({ ...prevFormData, [name]: value })); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignupdata(userdata);
    setErr(errors)
    console.log('hai', userdata)
  }

  const validateSignupdata = (data) => {
    const error={};
    if(!data.username.trim()){
      error.username = 'Username is required!'
    }

    if(!data.email.trim()){
      error.email = 'Email is required!'
    }

    if(!data.password.trim()){
      error.password = 'Password is required!'
    }  else if(!pwdregx.test(data.password.trim())) {
      error.password = 'Password is can include one alphanumeric, one lowercase, one uppercase, one special character. password must minimum 9 characters!'
    }

    if(!data.confirmpassword.trim()){
      error.confirmpassword = 'Confirm password is required!'
    } else if(!pwdregx.test(data.confirmpassword.trim())) {
      error.confirmpassword = 'Confirm Password is can include one alphanumeric, one lowercase, one uppercase, one special character. password must minimum 9 characters!'
    } else if(data.password.trim() != data.confirmpassword.trim()) {
      error.confirmpassword = 'Password and Confirm password does not match!'
    }

    return error;
  }

  const changeValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogindata((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateLogindetail(logindata);
    setError(errors);
    console.log('hai', logindata, errors)
  }

  const validateLogindetail = (data) => { 
    const error = {};
    if(!data.username.trim()){
      error.username = 'Username is required!'
    }

    if(!data.password.trim()){
      error.password = 'Password is required!'
    } else if(!pwdregx.test(data.password.trim())) {
      error.password = 'Password is can include one alphanumeric, one lowercase, one uppercase, one special character. password must minimum 9 characters!'
    }

    return error;
  }

  return (
    <div className='flex items-center justify-center h-full p-12'>
      <div className='lg:w-1/3 sm:w-4/5 border px-3 py-6 rounded-lg'>
        <h2 className='text-center text-2xl font-bold'>{islogin ? 'Login' : 'Create Account'}</h2>
        {!islogin ? (<div className='px-2 py-3'>
          <Commonform formcontrols={registerFormcontrols} formData={userdata} setFormdata={setUserdata} onSubmit={handleSubmit} buttontext="Sign up" />
          <p className='my-4'>Already have an account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={()=>setIslogin(!islogin)}>Login</span></p>
        </div>) : (<div className='px-2 py-3'>
          <form onSubmit={handleLogin}>
            <div className='my-3'>
              <input type="text" className='w-full outline-0 border-b-2 px-3 py-2' name="username" onChange={changeValues} placeholder='Username' />
              {error.username && <span className='text-red-400 text-sm'>{error.username}</span>}
            </div>
            <div className='my-3'>
              <input type="password" className='w-full outline-0 border-b-2 px-3 py-2' name="password" onChange={changeValues} placeholder='Password' />
              {error.password && <span className='text-red-400 text-sm'>{error.password}</span>}
            </div>
            <Button type='submit' className='w-full rounded-full bg-[#2257bf] text-white hover:bg-[#3867C5] py-2 mt-4'>Login</Button>            
          </form>
          <p className='my-4'>Create your amazon account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={()=>setIslogin(!islogin)}>Sign up</span></p>
        </div>)}                       
      </div>
    </div>
  )
}

export default Loginreg