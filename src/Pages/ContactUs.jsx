import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import {Contactform} from '../Components/index';

function ContactUs() {
  return (
    <div className='w-full mt-[90px] lg:mt-[110px] p-3 lg:p-5 '>

      <section className='bg-white rounded-lg p-3 flex flex-col gap-7 '>

        <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4 uppercase '>Ping Us Here</h1>
        <p className='font-medium text-blue-950 text-xs sm:text-sm'>At Dirt Eater, we consider our customers as partners and deeply value their feedback. We are dedicated to being available 24/7 to address any queries and work diligently to resolve them. Feel free to reach out to us anytime, and we will be happy to assist you.</p>

        <div className='grid grid-cols-4 gap-2'>
          <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 px-3 py-2 rounded-lg text-[#030f27] border-2 border-[#017BCC] col-span-4 sm:col-span-2 lg:col-span-1'><span className='text-[#017BCC]'><Phone /></span>(+61) 1800 438 822</h5>
          <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center  gap-3 px-3 py-2 rounded-lg text-[#030f27] border-2 border-[#017BCC] col-span-4 sm:col-span-2 lg:col-span-1'><span className='text-[#017BCC]'><MapPin /></span>P.O. Box 3113, Toongabbie, NSW 2146 </h5>
          <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 px-3 py-2 rounded-lg text-[#030f27] border-2 border-[#017BCC] col-span-4 sm:col-span-2 lg:col-span-1'><span className='text-[#017BCC]'><Mail /></span>hello@industrialvacuums.net.au</h5>
          <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 px-3 py-2 rounded-lg text-[#030f27] border-2 border-[#017BCC] col-span-4 sm:col-span-2 lg:col-span-1'><span className='text-[#017BCC]'><Clock /></span>9 am to 6 pm Consulting Hours</h5>
        </div>

        <div className='bg-[#030f27] rounded-lg w-full '>
          <Contactform/>
        </div>

      </section>

    </div>
  )
}

export default ContactUs