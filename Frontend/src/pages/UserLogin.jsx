import React, { useState } from 'react'
import logouber from '../assets/logouberblack.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    })
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, {
      email: email,
      password: password
    });
    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        {/* <img className='w-16 mb-10' src={logouber} alt="" /> */}
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
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

          <button onClick={submitHandler}
            className='bg-[#111] text-white font-semibold mb-3  rounded px-4 py-2 w-full text-lg '
          >Login</button>
        </form>
        <p className='text-center'>Join a flee? ? <Link to='/signup' className='text-blue-600'>Register as a User
        </Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5  rounded px-4 py-2 w-full text-lg '>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin