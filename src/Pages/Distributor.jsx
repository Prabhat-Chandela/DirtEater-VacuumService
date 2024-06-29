import React from 'react'
import {Queryform} from '../Components/index';

function Distributor() {
    return (
        <div className='w-full mt-[90px] lg:mt-[110px] p-3 lg:p-5 flex flex-col gap-7'>
            <section className='bg-white rounded-lg w-full p-3 flex flex-col gap-7'>
                <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4 '>Become a Distributor</h1>

                <div className='flex flex-col gap-5  '>

                    <div className='flex flex-col gap-5 '>
                        <p className='font-medium text-xs sm:text-sm text-blue-950'>Become an official distributor for dirt eater and sell the best industrial vacuum cleaner equipments in the Industry! As the leading manufacturer of commercial, industrial, and consumer cleaning equipment in Australia, we rely on our distributor partners throughout the country to help sell, service and promote our many lines. We are always looking for geographical areas where we would like to develop to maximize profits while providing top-notch customer care. </p>

                        <p className='font-medium text-xs sm:text-sm text-blue-950'>If you are ambitious and can add value to our expanding team, we would like to hear from you. Please fill out the form below and a representative will contact you.</p>
                    </div>

                    <div className='h-[300px] grid grid-cols-12 gap-1 grid-rows-6'>

                        <div className='h-full overflow-hidden rounded-lg col-span-6 sm:col-span-4 row-span-3 sm:row-span-6'>
                            <img className='w-full h-full object-cover' src="DE-distributor.webp" alt="distributor-page-image"/>
                        </div>
                        <div className='h-full overflow-hidden rounded-lg col-span-6 sm:col-span-2 row-span-3 sm:row-span-6 '>
                            <img className='w-full h-full object-cover' src="home-product-1.webp" alt="distributor-page-image"/>
                        </div>
                        <div className=' overflow-hidden rounded-lg col-span-6 sm:col-span-2 row-span-3 sm:row-span-6 '>
                            <img className='w-full h-full object-cover' src="home-product-2.webp" alt="distributor-page-image"/>
                        </div>
                        <div className=' overflow-hidden rounded-lg col-span-6 sm:col-span-4  row-span-3 sm:row-span-6'>
                            <img className='w-full h-full object-cover' src="DE-distributor-2.webp" alt="distributor-page-image"/>
                        </div>
                        
                       


                    </div>

                </div>


            </section>

            <section className='bg-white rounded-lg w-full lg:p-3 flex flex-col gap-7'>
                <h3 className='text-[#017BCC] uppercase font-bold ml-3 border-l-[6px] border-l-current pl-4 text-2xl'>Share Your Details below :</h3>

                <p className='font-medium text-blue-950 text-xs sm:text-sm px-3'>Are you interested in joining the leading brand in industrial vacuum solutions? We invite you to become a distributor for our top-of-the-line industrial vacuums. Simply fill out the form below with all the required information, and we will be delighted to welcome you to our team.</p>

                <div className='bg-[#030f27] rounded-lg w-full '>
                        <Queryform/>
                </div>
            </section>
        </div>
    )
}

export default Distributor