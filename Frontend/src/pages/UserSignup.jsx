import React, { useState } from 'react'
import logouber from '../assets/logouberblack.png'
import { Link } from 'react-router-dom'

function UserSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      username: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src={logouber} alt="" />
        <form onSubmit={(e) => { submitHandler }}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className='bg-[#eeeeee]  w-1/2 rounded px-2 py-2 border  text-base placeholder:text-base'
              type="text"
              placeholder='First name' />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeeee]  w-1/2  rounded px-2 py-2 border text-base placeholder:text-base'
              type="text"
              placeholder='Last name' />

          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5  rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com' />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='passwod' />

          <button
            className='bg-[#111] text-white font-semibold mb-3  rounded px-4 py-2 w-full text-lg '
          >Create account</button>
        </form>
        <p className='text-center'>Already have a account ? <Link to='/login' className='text-blue-600'>Login here
        </Link></p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup