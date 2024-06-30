import React from 'react';
import { useNavigate } from 'react-router-dom';

function VacuumCard({
    vacuumName,
    vacuumImage,
    vacuumDescriptionFirst = "",
    vacuumDescriptionSecond = "",
    path
}) {

    const navigate = useNavigate();
    return (

        <div className='bg-gray-400 filter backdrop-blur-lg bg-opacity-5 h-fit w-fit  p-3 rounded-lg border border-white overflow-hidden  flex flex-col lg:flex-row  gap-5 shadow-md hover:bg-[#030f27]  hover:border-[#017BCC] transition-all ease-in duration-200'>

            <div className='flex  items-center justify-center lg:justify-start'>
                <div className='rounded-lg overflow-hidden w-fit bg-white'><img width={350} src={vacuumImage} alt={vacuumName} loading='lazy' /></div>
            </div>

            <div className='flex flex-col gap-5 lg:gap-0 lg:justify-between pb-3 sm:w-[70%]'>
                <h3 className='text-[#017BCC] text-lg xl:text-xl font-semibold w-fit border-l-4 border-l-current pl-4'>{vacuumName}</h3>

                <p className='text-xs lg:text-sm '>{vacuumDescriptionFirst}
                </p>
                <p className='hidden text-sm xl:block  '>{vacuumDescriptionSecond}
                </p>
                <button onClick={()=>(navigate(`${path}`))} className='w-fit px-3 text-sm py-2 border-2 rounded-lg hover:scale-105 hover:shadow-md border-[#017BCC] hover:text-[#017BCC] transition-all ease-in duration-200'>See Full Product Details</button>

            </div>

        </div>


    )
}

export default VacuumCard