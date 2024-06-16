import React from 'react'
import { HeroVideoCard } from '../index';

function HeroSection() {
  return (
    <div className='w-full h-full rounded-lg grid p-2  gap-3 sm:grid-cols-6 sm:grid-rows-6'>

      <div className='sm:col-span-3 sm:row-span-6'>
        <HeroVideoCard />
      </div>

      <div className='sm:col-span-3 sm:row-span-3 rounded-lg bg-[#017BCC]'>

      </div>

      <div className='flex gap-2 sm:col-span-3 sm:row-span-3'>
        <div className='w-1/2 bg-blue-950 rounded-lg shadow-xl'></div>
        <div className='w-1/2 bg-blue-950 rounded-lg shadow-xl'></div>
      </div>


    </div>
  )
}

export default HeroSection