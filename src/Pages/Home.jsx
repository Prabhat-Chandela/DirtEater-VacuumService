import React from 'react';
import { IndustriesSection, HeroSection, VacuumsSection } from '../Components/index';
import { Aperture } from 'lucide-react';

function Home() {
  return (
    <div className='w-full mt-[90px] lg:mt-[110px] flex flex-col gap-7'>

      <section className='w-full h-fit lg:h-fit overflow-hidden'>
        <HeroSection />
      </section>

      <section className='w-full p-3 bg-white'>
        <IndustriesSection />
      </section>

      <section className='w-full grid sm:grid-cols-6 p-3 gap-3 overflow-hidden bg-white'>

        <div className='bg-[#030f27] sm:col-span-3 rounded-lg flex flex-col gap-6 p-3'>
          <h2 className='text-[#017BCC] border-l-[6px] border-l-current pl-4 text-3xl lg:text-5xl tracking-widest font-bold uppercase w-fit'><span></span> Why Choose Us ?</h2>
          <ul className='flex flex-col gap-5 lg:gap-7 p-3'>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Vacuum Cleaners with long hose capability</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>All units can be supplied to ATEX specification and HEPA filtration for use with hazardous dust</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Fine dust vacuuming with continuous suction</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Customized vacuum models & specialty applications</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Wet and dry vacuuming</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Extra-large capacity</li>
            <li className='text-xs sm:text-sm flex items-center gap-2 '> <span className='text-[#017BCC]'><Aperture /></span>Many useful vacuum waste handling options</li>
          </ul>
        </div>

        <div className='sm:col-span-3 h-full grid gap-1 grid-cols-6 '>
          <div className='h-full col-span-3 rounded-lg overflow-hidden ]'><img className='w-full  h-full object-cover' src="DE-distributor-5.webp" alt="DE-distributor-5" /></div>
          <div className='h-full col-span-3 rounded-lg overflow-hidden '><img className='w-full  h-full object-cover' src="DE-distributor-2.webp" alt="DE-distributor-2" /></div>
          <div className='h-full col-span-3 rounded-lg overflow-hidden '><img className='w-full  h-full object-cover' src="DE-distributor-3.webp" alt="DE-distributor-3" /></div>
          <div className='h-full col-span-3 rounded-lg overflow-hidden '><img className='w-full  h-full object-cover' src="DE-distributor-4.webp" alt="DE-distributor-4" /></div>
          
         
        </div>

      </section>

      <section className='w-full p-3 bg-[#030f27]'>

        <div className='flex flex-col gap-7 p-3'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-[#017BCC] text-[5vw] sm:text-[3.2vw] lg:text-[2vw] tracking-widest font-bold border-l-[6px] border-l-current pl-2 uppercase'><span></span> Products That meets industry standards</h2>
            <p className='text-white text-xs sm:text-sm font-medium'>We manufacture and sell the best industrial vacuum cleaners designed to meet all industry needs and requirements. Our vacuum systems are engineered with cutting-edge technology and rigorous quality standards to ensure exceptional performance, durability, and safety. Serving a wide array of sectors, including Asbestos Removal, Concrete Grinding, Construction, Surface Preparation, Food and Beverages, Paints and Inks, Strip Outs, and Demolition, our vacuums are tailored to handle the unique demands of each industry. Our commitment to innovation and excellence makes us a trusted partner in effective and efficient waste management solutions.</p>
          </div>

          <div>
            <VacuumsSection />
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home