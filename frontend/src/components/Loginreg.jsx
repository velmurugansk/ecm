import { useState } from 'react'
import Commonform from './common/Commonform';
import { registerFormcontrols, loginFormcontrols } from '@/config';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '../features/auth/authSlice'
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from "react-router-dom";

const userregisterData = {
  username: '', email: '', password: ''
}

const userloginData = {
  email: '', password: ''
}

function Loginreg() {
  const { toast } = useToast()
  const [islogin, setIslogin] = useState(true);
  const [userdata, setUserdata] = useState(userregisterData);
  const [logindata, setLogindata] = useState(userloginData);
  const [err, setErr] = useState({});
  const [error, setError] = useState({});
  const pwdregx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const setValues = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setUserdata((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignupdata(userdata);
    if (Object.keys(errors).length === 0) {
      const response = dispatch(registerUser(userdata)).then((response) => {
        if(response.payload.status) {          
          toast({          
            title: "Success",
            description: response.payload.message,
          })
        } else {
          toast({
            variant: "destructive",
            title: "Alert",
            description: response.payload.message,
          })
        }
      })                  
    } else {
      toast({
        variant: "destructive",
        title: "Alert",
        description: errors.key,
      })
    }
  }

  const validateSignupdata = (data) => {
    const error = {};

    if (!data.username.trim()) {
      error.username = 'Username is required!'
    } else if (!data.email.trim()) {
      error.email = 'Email is required!'
    } else if (!data.password.trim()) {
      error.password = 'Password is required!'
    } else if (!pwdregx.test(data.password.trim())) {
      error.password = 'Password is can include one alphanumeric, one lowercase, one uppercase, one special character. password must minimum 9 characters!'
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

    if (Object.keys(errors).length === 0) {
      dispatch(loginUser(logindata)).then((response) => {
        if (response.payload.status) {
          navigate("/")
          toast({
            title: "Success",
            description: response.payload.message,
          })
        } else {
          toast({
            variant: "destructive",
            title: "Alert",
            description: response.payload.message,
          })
        }
      })      
    } else {
      toast({
        variant: "destructive",
        title: "Alert",
        description: errors.key,
      })
    }

  }

  const validateLogindetail = (data) => {
    const error = {};

    if (!data.email.trim()) {
      error.key = 'Email is required!'
    } else if (!data.password.trim()) {
      error.key = 'Password is required!'
    } else if (!pwdregx.test(data.password.trim())) {
      error.key = 'Password is can include one alphanumeric, one lowercase, one uppercase, one special character. password must minimum 9 characters!'
    }

    return error;
  }

  return (
    <div className='flex items-center justify-center h-full p-12'>
      <div className='lg:w-1/3 sm:w-4/5 border px-3 py-6 rounded-lg'>
        <h2 className='text-center text-2xl font-bold'>{islogin ? 'Login' : 'Create Account'}</h2>
        {!islogin ? (<div className='px-2 py-3'>
          <Commonform formcontrols={registerFormcontrols} formData={userdata} setFormdata={setUserdata} onSubmit={handleSubmit} buttontext="Sign up" />
          <p className='my-4'>Already have an account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={() => setIslogin(!islogin)}>Login</span></p>
        </div>) : (<div className='px-2 py-3'>
          <Commonform formcontrols={loginFormcontrols} formData={logindata} setFormdata={setLogindata} onSubmit={handleLogin} buttontext="Login" />
          <p className='my-4'>Create your amazon account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={() => setIslogin(!islogin)}>Sign up</span></p>
        </div>)}
      </div>
    </div>
  )
}

export default Loginreg