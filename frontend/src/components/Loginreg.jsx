import React, {useState} from 'react'

function Loginreg() {
  const [islogin, setIslogin] = useState(true);
  const [userdata, setUserdata] = useState({name:'', email:'', password:'', confirmpassword:''});
  const [logindata, setLogindata] = useState({username:'', password:''});
  const [err, setErr] = useState('');

  const setValues = (e) => {
    e.preventDefault()
    const { name, value } = event.target;
    setUserdata((prevFormData) => ({ ...prevFormData, [name]: value })); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hai', userdata)
  }

  const changeValues = (e) => {
    e.preventDefault();
    const { name, value } = event.target;
    setLogindata((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('hai', logindata)
  }

  return (
    <div className='flex items-center justify-center h-full p-12'>
      <div className='lg:w-1/3 sm:w-4/5 border px-3 py-6 rounded-lg'>
        <h2 className='text-center text-2xl font-bold'>{islogin ? 'Login' : 'Create Account'}</h2>
        {!islogin ? (<div className='px-2 py-3'>
          <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <input type="text" placeholder='Username' name='name' value={userdata.name} onChange={setValues} className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red name-err'></span>
          </div>
          <div className="my-2">
            <input type="email" placeholder='E-mail' name='email' value={userdata.email} onChange={setValues} className='w-full outline-0 border-b-2 px-3 py-2'/>  
            <span className='text-red email-err'></span>
          </div>
          <div className="my-2">
            <input type="password" placeholder='Password' name='password' value={userdata.password} onChange={setValues} className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red password-err'></span>
          </div>
          <div className='my-2'>
            <input type="password" placeholder='Confirm Password' name='confirmpassword' value={userdata.confirmpassword} onChange={setValues} className='w-full outline-0 border-b-2 px-3 py-2'/>
            <span className='text-red confirmpassword-err'></span>
          </div>
          <button type='submit' className='w-full rounded-full bg-[#2257bf] text-white py-2 mt-4'>Sign up</button>
          </form>
          <p className='my-4'>Already have an account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={()=>setIslogin(true)}>Login</span></p>
        </div>) : (<div className='px-2 py-3'>
          <form onSubmit={handleLogin}>
            <div className='my-3'>
              <input type="text" className='w-full outline-0 border-b-2 px-3 py-2' name="username" onChange={changeValues} placeholder='Username' />
              <span className='text-red username-err'></span>
            </div>
            <div className='my-3'>
              <input type="password" className='w-full outline-0 border-b-2 px-3 py-2' name="password" onChange={changeValues} placeholder='Password' />
              <span className='text-red password-err'></span>
            </div>
            <button type='submit' className='w-full rounded-full bg-[#2257bf] text-white py-2 mt-4'>Login</button>
          </form>
          <p className='my-4'>Create your amazon account? <span className='text-base font-bold text-[#0066c0] cursor-pointer' onClick={()=>setIslogin(false)}>Sign up</span></p>
        </div>)}                       
      </div>
    </div>
  )
}

export default Loginreg