import React from 'react';
import { IndustriesSection, HeroSection } from '../Components/index';

function Home() {
  return (
    <div className='w-full mt-[90px] lg:mt-[110px]'>

      <section className='w-full h-fit lg:h-fit overflow-hidden'>
        <HeroSection />
      </section>

      <section className='w-full p-3 bg-white mt-5'>
        <IndustriesSection />
      </section>

    </div>
  )
}

export default Home