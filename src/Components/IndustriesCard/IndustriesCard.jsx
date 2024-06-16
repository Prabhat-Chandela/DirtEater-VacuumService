import React from 'react'

function IndustriesCard({
    industryName = "Industry name",
    industryDetail = "Details about Industry",
    industryIcon = "",
    pagePath

}) {
    return (
        <div className='w-full h-full flex flex-col justify-between p-3 rounded-lg gap-2 bg-blue-950 shadow-lg cursor-pointer hover:bg-[#017BCC] hover:scale-105 transition-all ease-in-out duration-300'>
            <div className='flex gap-2 items-start'>
                <img className='w-12 h-12' src={industryIcon} alt={industryName}/>
                <h3 className='text-lg font-semibold tracking-wider'>{industryName}</h3>
            </div>

            <p className='text-xs'>{industryDetail}</p>

            <button></button>
        </div>
    )
}

export default IndustriesCard