import React from 'react';
import { NotepadText, SquareUser,Phone,MapPin,BookUser,Mail  } from 'lucide-react';

function Footer() {
    return (
        <div className='w-full bg-blue-950 p-5 pt-10 mt-5'>

            <div className='w-full flex flex-col gap-9 lg:flex-row lg:justify-between'>

                <div className='lg:w-[45%] flex flex-col gap-7'>
                    <img src="DE-site-logo.webp" alt="site-logo" width={150} />
                    <p className='font-semibold text-xs sm:text-sm text-white/70'>At our company, we manufacture, customize, and sell a vast range of industrial vacuum cleaners, dedicated to being the most convenient and reliable solution for the industry. Our commitment to excellence drives us to work closely with our customers, developing additional tools and add-ons tailored to solve specific challenges. Whether you need a standard vacuum or a customized solution, our team is here to ensure your needs are met with precision and reliability.</p>
                    <button className='font-bold text-xs sm:text-sm uppercase w-fit flex items-center gap-2 justify-center hover:text-[#017BCC] hover:scale-105 hover:border-b-2 hover:pb-2 transition-all ease-in duration-200 '><span><NotepadText /></span> Our Privacy Policy</button>
                </div>

                <div className='lg:w-[45%] flex flex-col gap-7 lg:justify-between'>
                    <h3 className='font-bold text-xl uppercase flex items-center gap-2 border-b-2 pb-2'> <span><SquareUser /></span>Get In Touch With Us</h3>
                    <div className='w-full flex flex-col gap-7  sm:flex-row sm:justify-between'>
                        <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-2 '><span><Phone /></span>(+61) 1800 438 822</h5>
                        <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center  gap-2 '><span><MapPin /></span>P.O. Box 3113, Toongabbie, NSW 2146 </h5>
                    </div>

                    <div className='w-full flex flex-col gap-7  sm:flex-row sm:justify-between'>
                        <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-2 '><span><BookUser /></span>ABN# : 57 612 672 250</h5>
                        <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-2 '><span><Mail /></span>hello@industrialvacuums.net.au</h5>
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>

            <div></div>

            <div></div>

        </div>
    )
}

export default Footer