import React from 'react'

function VacuumCard({
    vacuumName,
    vacuumImage,
    vacuumDescriptionFirst = "",
    vacuumDescriptionSecond=""
}) {
    return (

        <div className='bg-blue-950 p-3 rounded-lg overflow-hidden flex flex-col sm:flex-row gap-5 hover:bg-[#017BCC] transition-all ease-in duration-200'>

            <div className='flex sm:w-[30%] lg:[w-20%]'>
                <div className='rounded-lg overflow-hidden w-fit bg-white'><img width={400} height={200} src={vacuumImage} alt={vacuumName} loading='lazy' /></div>
            </div>

            <div className='flex flex-col gap-3 lg:gap-0 sm:justify-between pb-3 xl:p-3 sm:w-[70%]'>
                <h3 className='text-lg xl:text-xl font-semibold w-fit border-l-4  pl-4 tracking-[8px]'>{vacuumName}</h3>
                <p className='text-xs lg:text-sm xl:text-lg '>{vacuumDescriptionFirst}
                </p>

                <p className='text-sm xl:text-lg hidden lg:block'>{vacuumDescriptionSecond}
                </p>
                <button className='w-fit px-3 text-sm py-2 border-2 border-current rounded-lg'>See Full Product Details</button>
            </div>

        </div>


    )
}

export default VacuumCard