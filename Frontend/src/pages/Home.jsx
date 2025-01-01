import React from 'react'
import logouber from '../assets/logouber.png'
import bg_img from '../assets/home-background.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400 bg-cover bg-center'
        style={{
          backgroundImage: `url(${bg_img})`,
        }}>
        <img className='w-16 ml-8' src={logouber} alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 px rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home