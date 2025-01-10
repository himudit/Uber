import React, { useRef, useState } from 'react'
import logouber from './assets/logouberblack.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from './components/LocationSearchPanel';
import VehiclePanel from './components/VehiclePanel';
import ConfirmedRide from './components/ConfirmedRide';
import LookingForDriver from './components/LookingForDriver';
import WaitingForDriver from './components/WaitingForDriver';

function Home() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null)
    const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null);
    const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)
    const confirmRidePanelRef = useRef(null);
    const [vehicleFound, setVehicleFound] = useState(false)
    const vehicleFoundRef = useRef(null);
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const waitingForDriverdRef = useRef(null);

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

    useGSAP(function () {
        if (vehiclePanelOpen == true) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanelOpen]);

    useGSAP(function () {
        if (confirmRidePanelOpen == true) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanelOpen]);

    useGSAP(function () {
        if (vehicleFound == true) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound]);

    useGSAP(function () {
        if (waitingForDriver == true) {
            gsap.to(waitingForDriverdRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverdRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver]);

    return (
        <div className='h-screen relative overflow-hidden'>
            <img className='w-16 absolute top-5 left-5 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
            <div className='h-screen cursor-pointer w-screen border'>
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
                    <LocationSearchPanel
                        setPanelOpen={setPanelOpen}
                        setVehiclePanelOpen={setVehiclePanelOpen} />
                </div>
            </div>

            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
                <VehiclePanel setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
            </div>

            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <ConfirmedRide setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehicleFound={setVehicleFound} />
            </div>

            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div ref={waitingForDriverdRef}  className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12">
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>
        </div>
    )
}
export default Home