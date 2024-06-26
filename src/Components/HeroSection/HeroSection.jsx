import React from 'react'
import { HeroVideoCard } from '../index';
import { Handshake, UsersRound, MousePointerClick } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate()

  return (
    <div className='w-full h-full overflow-hidden rounded-lg grid p-2  gap-3 lg:grid-cols-6 lg:grid-rows-6'>

      <div className='lg:col-span-3 lg:row-span-6'>
        <HeroVideoCard />
      </div>

      <div className='lg:col-span-3 lg:row-span-3 text-white rounded-lg bg-[#017BCC] shadow-md hover:bg-[#017BCC]  hover:scale-95 transition-all ease-in-out duration-300 p-5 flex flex-col gap-5 lg:gap-0 lg:justify-between '>

        <h3 className='text-lg lg:text-xl font-bold border-b-2 border-b-current pb-2 pr-6 w-fit flex items-center  justify-center gap-2 uppercase'><span><UsersRound /></span>Become Our Partner</h3>
        <p className='text-md font-medium'>Become a distributor for the best industrial vacuum cleaner equipment selling brand in the industry!</p>
        <button onClick={() => (navigate("/become-distributor"))} className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center  justify-center gap-2 uppercase hover:shadow-lg hover:scale-105  transition-all ease-in duration-200'><span><Handshake /></span>join hands</button>

      </div>

      <div className='flex flex-col sm:flex-row gap-2 lg:col-span-3 lg:row-span-3'>

      <div className='sm:w-1/2 flex flex-col justify-between p-5 bg-[#030f27] gap-6 lg:gap-0  rounded-lg overflow-hidden shadow-md hover:scale-95 transition-all ease-in-out duration-300 relative '>

          
            <h3 className='text-xl font-bold  w-fit uppercase '>We Manufacture Vacuums Ourself !</h3>
            <button className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center  hover:scale-105 hover:shadow-lg hover:border-[#017BCC] hover:text-[#017BCC]  justify-center gap-2 transition-all ease-in duration-200'><span><MousePointerClick /></span>Get In Touch</button>
         
        </div>

        <div className='sm:w-1/2 flex flex-col justify-between p-5 bg-[#030f27]  gap-6 lg:gap-0  rounded-lg overflow-hidden shadow-md hover:scale-95 transition-all ease-in-out duration-300  '>

         
            <h3 className='text-xl font-bold w-fit uppercase '>Want To Hire Our Vacuums !</h3>
            <button className='text-xs border-2 font-medium border-current w-fit py-2 px-3 rounded-lg flex items-center  hover:scale-105 hover:border-[#017BCC] hover:shadow-lg hover:text-[#017BCC] justify-center gap-2 transition-all ease-in duration-200'><span><MousePointerClick /></span>Visit Us Here</button>

        </div>

      </div>


    </div>
  )
}

export default HeroSection