import React, { useRef, useState } from 'react'
import logouber from './assets/logouberblack.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './assets/LocationSearchPanel';

function Home() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
    }
    useGSAP(function () {
        if (panelOpen == true) {
            gsap
                .to(panelRef.current, {
                    height: '70%',
                    padding: 24
                    // opacity: 1,
                })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap
                .to(panelRef.current, {
                    height: '0%',
                    padding: 0
                    // opacity: 0
                })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })

        }
    }, [panelOpen]);

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <div className='h-screen w-screen'>
                <img src={logouber} />
            </div>
            <div className='flex  flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-5 bg-white'>
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(!panelOpen);
                    }} className='absolute opacity-0 top-6 right-6 text-2xl'><i className="ri-arrow-down-wide-line"></i>
                    </h5>
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
                <div ref={panelRef} className='h-[0] bg-white '>
                    <LocationSearchPanel />
                </div>
            </div>

            <div className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8">
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

                <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                    <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>UberGo<span><i className='ri-user-3-fill'></i>4</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹193.20</h2>
                </div>

                <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                    <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'></i>1</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹65</h2>
                </div>

                <div className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                    <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                    <div className='ml-2 w-1/2'>
                        <h4 className='font-medium text-base'>UberAuto<span><i className='ri-user-3-fill'></i>4</span></h4>
                        <h5 className='font-medium text-sm'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>₹118.86</h2>
                </div>


            </div>

        </div>
    )
}
export default Home