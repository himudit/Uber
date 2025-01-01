import React, { useState } from 'react'
import logouber from '../assets/logouberdriver.png'
import { Link } from 'react-router-dom'

function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    })
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src={logouber} alt="" />
        <form onSubmit={(e) => { submitHandler }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7  rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='passwod' />

          <button
            className='bg-[#111] text-white font-semibold mb-3  rounded px-4 py-2 w-full text-lg '
          >Login</button>
        </form>
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain
        </Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5  rounded px-4 py-2 w-full text-lg '>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin