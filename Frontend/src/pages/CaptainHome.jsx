import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'

function CaptainHome() {
  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-center w-screen' >
        <img className="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
        <Link to='/home' className='top=2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='text-lg font-medium ri-logout-box-r-line' />
        </Link>
      </div>
      <div className='h-3/5'>
        <img src="" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>

      <div className="fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-12">
        <RidePopUp />
      </div>
    </div>
  )
}

export default CaptainHome