import React from 'react'

function IndustriesCard({
    industryName = "Industry name",
    industryDetail = "Details about Industry",
    industryIcon,
    industryImage,
    pagePath

}) {
    return (
        <div className='w-full h-[260px] lg:h-[280px] relative rounded-lg overflow-hidden hover:scale-105 transition-all ease-in-out duration-300 '>

            <div className='w-full h-full  overflow-hidden'>
                <img className='w-full h-full object-cover' src={industryImage} alt={industryName} />
            </div>

            <div className='w-full h-full  absolute top-0 left-0 bottom-0 z-0  flex flex-col justify-between p-3 bg-blue-950/40 shadow-lg cursor-pointer hover:bg-[#017BCC] '>
                <div className='flex gap-2 items-start'>
                    <h3 className='text-lg font-semibold tracking-wider flex items-center justify-center gap-2'><span>{industryIcon}</span>{industryName}</h3>
                </div>

                <p className='text-sm'>{industryDetail}</p>

                <button className='w-fit px-3 text-sm py-2 border-2 border-current rounded-lg hover:scale-105 hover:shadow-md transition-all ease-in duration-200'>Explore Industry</button>
            </div>

        </div>
    )
}

export default IndustriesCard