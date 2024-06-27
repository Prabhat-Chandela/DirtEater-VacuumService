import React from 'react'

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

                    <div className='grid gap-5 place-items-center'>

                        <div className='w-fit overflow-hidden rounded-lg lg:hidden'>
                            <img src="DE-distributor.webp" alt="distributor-page-image" width={700} height={500} />
                        </div>
                        <div className='w-fit overflow-hidden rounded-lg lg:hidden'>
                            <img src="DE-distributor-2.webp" alt="distributor-page-image" width={700} height={500} />
                        </div>
                        <div className='w-fit overflow-hidden rounded-lg lg:hidden'>
                            <img src="DE-distributor-3.webp" alt="distributor-page-image" width={700} height={500} />
                        </div>


                    </div>

                </div>


            </section>

            <section className='bg-white rounded-lg w-full p-3'>

            </section>
        </div>
    )
}

export default Distributor