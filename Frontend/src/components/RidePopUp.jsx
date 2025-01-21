import React from 'react'

const RidePopUp = () => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                console.log("hi");
                props.setVehiclePanelOpen(false);
            }} >
                <i className="text-3xl text-gray-400 ri-arrow-down-wide-line" /></h5>
            <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

            <div className='flex gap-2 justify-between flex-col items-center'>
                {/* <img className='h-20' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" /> */}
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill" />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Dabua Colony, Faridabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill" />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Dabua Colony, Faridabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line" />
                        <div>
                            <h3 className='text-lg font-medium'>193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setVehicleFound(true);
                    props.setConfirmRidePanelOpen(false);
                }} className='w-full mt-5 bg-green-600 text-white font-semibold rounded-lg'>Confirm</button>

                <button onClick={() => {
                    
                }} className='w-full mt-1 bg-gray-300 text-gray-700 font-semibold rounded-lg'>Ignore</button>
            </div>
        </div>
    )
}

export default RidePopUp