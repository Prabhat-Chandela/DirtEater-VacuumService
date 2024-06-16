import React from 'react';
import { IndustriesSection, HeroSection } from '../Components/index';

function Home() {
  return (
    <div className='w-full mt-[15vh]'>

      <section className='w-full h-fit sm:h-[90vh] overflow-hidden bg-white'>
        <HeroSection />
      </section>

      <section className='w-full p-3 bg-white mt-5'>
        <IndustriesSection />
      </section>

    </div>
  )
}

export default Home