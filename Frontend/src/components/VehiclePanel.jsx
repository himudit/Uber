import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div> <h5 className='p-1 cursor-pointer text-center w-[93%] absolute top-0' onClick={() => {
            console.log("hi");
            props.setVehiclePanelOpen(false);
        }} >
            <i className="text-3xl text-gray-400 ri-arrow-down-wide-line" /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                props.setConfirmRidePanelOpen(true);
            }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberGo<span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanelOpen(true);
            }}
                className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto<span><i className='ri-user-3-fill'></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹65</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanelOpen(true);
            }}
                className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-10' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>UberAuto<span><i className='ri-user-3-fill'></i>4</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>₹118.86</h2>
            </div>

        </div>
    )
}

export default VehiclePanel