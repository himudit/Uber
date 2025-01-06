import React from 'react'

function WaitingForDriver(props) {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setWaitingForDriver(false);
      }} >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line" /></h5>

      <div className='flex items-center justify-between'>
        <img className='h-20' src='https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg' alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Mudit</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR 4444</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki</p>
        </div></div>

      <div className='flex gap-2 justify-between flex-col items-center'>
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
        {/* <button className='w-full mt-5 bg-green-600 text-white font-semibold rounded-lg'>Confirm</button> */}
      </div>
    </div>
  )
}

export default WaitingForDriver