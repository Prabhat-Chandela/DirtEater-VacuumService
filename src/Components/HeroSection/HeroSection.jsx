import React from 'react'
import { HeroVideoCard } from '../index';
import { Handshake, UsersRound, MousePointerClick } from 'lucide-react';


function HeroSection() {
  return (
    <div className='w-full h-full rounded-lg grid p-2  gap-3 lg:grid-cols-6 lg:grid-rows-6'>

      <div className='lg:col-span-3 lg:row-span-6'>
        <HeroVideoCard />
      </div>

      <div className='lg:col-span-3 lg:row-span-3 text-white rounded-lg bg-[#017BCC] shadow-md hover:bg-[#017BCC]  hover:scale-95 transition-all ease-in-out duration-300 p-5 flex flex-col gap-5 lg:gap-0 lg:justify-between '>

        <h3 className='text-lg lg:text-xl font-bold border-b-2 border-b-current pb-2 pr-6 w-fit flex items-center  justify-center gap-2 uppercase'><span><UsersRound /></span>Become Our Partner</h3>
        <p className='text-md font-medium'>Become a distributor for the best industrial vacuum cleaner equipment selling brand in the industry!</p>
        <button className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center  justify-center gap-2 uppercase hover:border-blue-950  hover:text-blue-950 hover:scale-105  transition-all ease-in duration-200'><span><Handshake /></span>join hands</button>

      </div>

      <div className='flex flex-col sm:flex-row gap-2 lg:col-span-3 lg:row-span-3'>

        <div className='sm:w-1/2 bg-blue-950 rounded-lg shadow-md hover:scale-95 transition-all ease-in-out duration-300 p-5 flex flex-col gap-5 lg:gap-0 lg:justify-between'>

        <h3 className='lg:text-xl font-bold pb-2 pr-6 w-fit uppercase '>We Manufacture Industrial Vacuums Ourself.</h3>
        <button className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center hover:border-[#017BCC] hover:scale-105  hover:text-[#017BCC] justify-center gap-2 transition-all ease-in duration-200'><span><MousePointerClick /></span>Get In Touch</button>

        </div>

        <div className='sm:w-1/2 bg-blue-950 rounded-lg shadow-md hover:scale-95 transition-all ease-in-out duration-300 p-5 flex flex-col gap-5 lg:gap-0 lg:justify-between'>

          <h3 className='lg:text-xl font-bold pb-2 pr-6 w-fit uppercase '>Want To Buy or Rent Our Vacuums !</h3>
          <button className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center hover:border-[#017BCC] hover:scale-105  hover:text-[#017BCC] justify-center gap-2 transition-all ease-in duration-200'><span><MousePointerClick /></span>Visit Us Here</button>
        </div>

      </div>


    </div>
  )
}

export default HeroSection