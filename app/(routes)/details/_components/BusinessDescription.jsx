import Image from 'next/image'
import React from 'react'

function BusinessDescription({ business }) {
  return business?.name && (
    <div>
    <div className='flex items-center'>
    <h2 className='font-bold text-[25px] inline-block'>Charging Price:</h2>
    <p className='mt-4 text-[180%] text-gray-600 inline-block ml-5'>₹{business.chargingPrice} /-</p>
</div>
      <h2 className='font-bold text-[25px] inline-block '>Rating :</h2>
      <p className='mt-4 text-lg text-gray-600 inline-block ml-5'>:{business.rating}</p>

      <h2 className='font-bold text-[25px] '>Description</h2>
      <p className='mt-4 text-lg text-gray-600'>{business.about}</p>


      <h2 className='font-bold text-[25px] mt-8'>Gallary</h2>
      <div className='grid grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-5 mt-5'>
        {business?.images?.map((item, index) => (
          <Image src={item?.url} key={index}
            alt='image'
            width={700}
            height={200}
            className='rounded-lg' />
        ))}
      </div>
    </div>
  )
}

export default BusinessDescription