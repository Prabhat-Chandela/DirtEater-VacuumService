import React from 'react';
import { VacuumsSection } from '../Components/index';

function VacuumRange() {
  return (
    <div className='w-full mt-[90px] lg:mt-[110px] p-3 lg:p-5 flex flex-col gap-7'>

      <section className='w-full flex flex-col gap-7 bg-[#030f27] p-3 rounded-lg'>
      <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4 '>Industrial Wet and Dry Vacuum Cleaners</h1>

      <p className='font-medium text-white text-xs'>Industrial vacuum systems are wet and dry with the unrivaled power durability and performance you could expect from cleaning equipment in this category. These HEPA Vacuum Cleaners and Cyclonic Vacuum Systems use the most advanced cyclone technology, “Air Filter Path Technology” or simply AFPT, which for you means a level of performance unsurpassed by any other vacuum in its class. Guaranteed!</p>

    <VacuumsSection/>

      </section>


    </div>
  )
}

export default VacuumRange