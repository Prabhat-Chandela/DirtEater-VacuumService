import React from 'react'

function IndustriesCard({
    industryName = "Industry name",
    industryDetail = "Details about Industry",
    industryIcon,
    pagePath

}) {
    return (
        <div className='w-full h-fit sm:h-[250px] lg:h-[280px] flex flex-col sm:justify-between p-3 rounded-lg gap-5 bg-blue-950 shadow-lg cursor-pointer hover:bg-[#017BCC] hover:scale-105 transition-all ease-in-out duration-300'>
            <div className='flex gap-2 items-start'>
                <h3 className='text-lg font-semibold tracking-wider flex items-center justify-center gap-2'><span>{industryIcon}</span>{industryName}</h3>
            </div>

            <p className='text-sm'>{industryDetail}</p>

            <button className='w-fit px-3 text-sm py-2 border-2 border-current rounded-lg'>Explore Industry</button>
        </div>
    )
}

export default IndustriesCard