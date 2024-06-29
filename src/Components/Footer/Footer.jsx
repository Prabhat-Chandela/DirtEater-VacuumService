import React from 'react';
import { NotepadText, SquareUser, Phone, MapPin, BookUser, Mail, Instagram, Youtube, Linkedin, Facebook, SquareGanttChart, BrickWall, MousePointerClick, ChevronsRight, Box } from 'lucide-react';

function Footer() {
    return (
        <div className='w-full flex flex-col gap-12 lg:gap-16 bg-[#030f27] p-5 pt-10 mt-5'>

            <div className='w-full flex flex-col gap-9 lg:gap-0 lg:flex-row lg:justify-between '>

                <div className='lg:w-[45%] flex flex-col gap-7  lg:h-[280px]'>
                    <img src="DE-site-logo.webp" alt="site-logo" width={150} />
                    <p className='font-semibold text-xs sm:text-sm text-white/70'>At our company, we manufacture, customize, and sell a vast range of industrial vacuum cleaners, dedicated to being the most convenient and reliable solution for the industry. Our commitment to excellence drives us to work closely with our customers, developing additional tools and add-ons tailored to solve specific challenges. Whether you need a standard vacuum or a customized solution, our team is here to ensure your needs are met with precision and reliability.</p>
                    <button className='font-bold text-xs sm:text-sm uppercase w-fit flex items-center gap-2 justify-center hover:text-[#017BCC] hover:translate-x-3 transition-all ease-in duration-200 '><span><NotepadText /></span> Our Privacy Policy</button>
                </div>

                <div className='lg:w-[45%] flex flex-col gap-7 lg:gap-0  lg:justify-between lg:h-[280px]'>
                    <h3 className='font-bold text-xl text-[#017BCC] uppercase flex items-center gap-2 border-b-2 border-b-current pb-2'> <span><SquareUser /></span>Get In Touch With Us</h3>

                    <div className='flex flex-col gap-9'>

                        <div className='w-full flex flex-col gap-7 sm:gap-0 sm:flex-row '>
                            <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 sm:w-1/2'><span className='text-[#017BCC]'><Phone /></span>(+61) 1800 438 822</h5>
                            <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center  gap-3 sm:w-1/2'><span className='text-[#017BCC]'><MapPin /></span>P.O. Box 3113, Toongabbie, NSW 2146 </h5>
                        </div>

                        <div className='w-full flex flex-col gap-7 sm:gap-0 sm:flex-row sm:justify-between '>
                            <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 sm:w-1/2'><span className='text-[#017BCC]'><BookUser /></span>ABN# : 57 612 672 250</h5>
                            <h5 className='font-semibold text-sm lg:text-xs xl:text-sm flex items-center gap-3 sm:w-1/2'><span className='text-[#017BCC]'><Mail /></span>hello@industrialvacuums.net.au</h5>
                        </div>

                    </div>

                    <div className='w-full flex flex-wrap justify-between sm:justify-normal gap-7'>
                        <div className='flex items-center gap-3 sm:gap-5 flex-wrap sm:w-1/2'>
                            <li className='cursor-pointer text-blue-950 flex items-center justify-center bg-white rounded-full p-2 hover:text-[#017BCC] hover:scale-110 transition-all ease-in duration-200'><Facebook size={20} /></li>
                            <li className='cursor-pointer text-blue-950 flex items-center justify-center bg-white rounded-full p-2 hover:text-[#017BCC] hover:scale-110 transition-all ease-in duration-200'><Linkedin size={20} /></li>
                            <li className='cursor-pointer text-blue-950 flex items-center justify-center bg-white rounded-full p-2 hover:text-[#017BCC] hover:scale-110 transition-all ease-in duration-200'><Youtube size={20} /></li>
                            <li className='cursor-pointer text-blue-950 flex items-center justify-center bg-white rounded-full p-2 hover:text-[#017BCC] hover:scale-110 transition-all ease-in duration-200'><Instagram size={20} /></li>
                        </div>
                        <button className='w-fit px-3 py-2 bg-white rounded-lg text-blue-950 text-sm font-semibold flex items-center gap-2 hover:bg-[#017BCC] hover:text-white hover:scale-105 transition-all ease-in duration-200'><span><MousePointerClick /></span>Ping Us Here</button>
                    </div>

                </div>

            </div>

            <div className='w-full flex flex-col lg:flex-row gap-9 lg:gap-0 lg:justify-between'>

                <div className='lg:w-[45%] flex flex-col gap-7 '>
                    <h3 className='font-bold text-xl text-[#017BCC] uppercase flex items-center gap-2 border-b-2 border-b-current pb-2'> <span><BrickWall /></span>Industries We serve</h3>
                    <ul className='flex flex-col sm:flex-row flex-wrap gap-7'>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>ASBESTOS</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>FIBERGLASS / COMPOSITES</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>CONCRETE</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>CONSTRUCTION</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>ROCKWALL / GIB</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>HIRE COMPANIES</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>MDF / WOOD</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><ChevronsRight /></span>PLASTIC</li>
                    </ul>
                </div>

                <div className='lg:w-[45%] flex flex-col gap-7 '>
                    <h3 className='font-bold text-xl text-[#017BCC] uppercase flex items-center gap-2 border-b-2 border-b-current pb-2'> <span><SquareGanttChart /></span>Our Vacuum range</h3>
                    <ul className='flex flex-col sm:flex-row flex-wrap gap-7'>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><Box /></span>Dirt Eater</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><Box /></span>Dirt Eater Jr</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><Box /></span>Dirt Eater Protector</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><Box /></span>
                            Dirt Eater Bigboss</li>
                        <li className='cursor-pointer flex items-center gap-2 text-white/70 hover:text-[#017BCC] text-xs font-semibold hover:translate-x-3 transition-all ease-in duration-200'><span><Box /></span>Customized Vacuums</li>
                    </ul>
                </div>

            </div>

            <div className='w-full mt-5 border-t-2 pt-4'>
                <h4 className='text-center font-semibold'>Copyright © 2015 - 2024. Industrial Vacuums and Engineering-DirtEater.</h4>
            </div>

        </div>
    )
}

export default Footer