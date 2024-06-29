import React from 'react';
import { Facebook, Linkedin, Youtube, Instagram,Eye } from 'lucide-react';

function HeroVideoCard() {
  return (
    <div className='w-full max-h-[500px] relative rounded-lg overflow-hidden'>

      <div className='w-full'>
        <video className='w-full max-h-full object-center' src="DE-heroVideo.mp4" autoPlay muted loop preload='metadata'></video>
      </div>

      <div className='absolute w-full h-full top-0 left-0 bg-black/20  p-3 flex flex-col justify-between'>

        <div className='flex flex-col gap-7'>

          <h3 className='font-extrabold text-2xl sm:text-4xl text-white bg-white/10 w-fit p-2 rounded-lg drop-shadow-md backdrop-blur-md'>Heavy Duty Industrial Vacuums !</h3>
          <p className='font-semibold text-xs sm:text-sm'>
            Connect with us through our social channels to learn more about how we can serve you and create a significant impact in your industry. Stay updated with our latest offerings, insights, and success stories by following us.</p>
          <div className='flex items-center gap-5 sm:gap-9 flex-wrap '>
            <li className='cursor-pointer text-[#017BCC] flex items-center justify-center  rounded-full p-3 bg-white hover:bg-[#030f27] hover:scale-110 transition-all ease-in duration-200'><Facebook size={25} /></li>
            <li className='cursor-pointer text-[#017BCC] flex items-center justify-center  rounded-full p-3 bg-white hover:bg-[#030f27] hover:scale-110 transition-all ease-in duration-200'><Linkedin size={25} /></li>
            <li className='cursor-pointer text-[#017BCC] flex items-center justify-center  rounded-full p-3 bg-white hover:bg-[#030f27] hover:scale-110 transition-all ease-in duration-200'><Youtube size={25} /></li>
            <li className='cursor-pointer text-[#017BCC] flex items-center justify-center  rounded-full p-3 bg-white hover:bg-[#030f27] hover:scale-110 transition-all ease-in duration-200'><Instagram size={25} /></li>
          </div>

        </div>

        <button className='text-xs  text-white font-medium w-fit py-2 px-3 rounded-lg flex items-center  justify-center gap-2 uppercase bg-[#030f27] hover:scale-105 hover:text-[#017BCC] hover:border hover:border-[#017BCC]  transition-all ease-in duration-200'><span><Eye /></span>Watch more videos</button>

      </div>

    </div>
  )
}

export default HeroVideoCard;