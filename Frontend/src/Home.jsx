import React, { useState } from 'react'
import logouber from './assets/logouberblack.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Home() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
    }
    useGSAP(function () {
        gsap
            .to(
                
        )
    })
    return (
        <div className='h-screen relative'>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <div className='h-screen'>
                <img src={logouber} />
            </div>
            <div className='h-screen flex  flex-col justify-end absolute top-0 w-full'>
                <div className='h-[30%] p-5 bg-white'>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input value={pickup}
                            onClick={() => {
                                setPanelOpen(!panelOpen)
                            }}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-5'
                            type="text"
                            placeholder='Add a pick up location' />

                        <input value={destination}
                            onClick={() => {
                                setPanelOpen(!panelOpen)
                            }}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-3'
                            type='text'
                            placeholder='Enter your destination' />
                    </form>
                </div>
                <div className='h-[0] bg-red-500 '>

                </div>
            </div>

        </div>
    )
}

export default Home