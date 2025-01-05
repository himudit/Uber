import React from 'react'

const ConfirmedRide = () => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                console.log("hi");
                props.setVehiclePanelOpen(false);
            }} >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line" /></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
                <div className='w-full'>
                    <div>
                       {/* add icon  */}
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <button className='w-full bg-green-600 text-white font-semibold rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmedRide