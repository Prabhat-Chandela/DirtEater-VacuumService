import React from 'react';
import CountUp from 'react-countup';

function Counter() {
    return (
        <div className='w-full flex flex-col gap-3 sm:flex-row sm:gap-0 sm:justify-between'>

            <div className='flex flex-col w-full sm:w-[32%] rounded-lg bg-blue-950 hover:bg-[#017BCC] font-bold items-center justify-center gap-7 text-lg py-5 transition-all ease-in duration-300'>
                <div className='flex items-center justify-center gap-2'>
                <CountUp className='text-5xl' start={0} end={2}  duration={2}></CountUp>
                <span className='text-5xl'>M+</span>
                </div>
              
                <h4 className='uppercase'>Happy Customers</h4>
            </div>

            <div className='flex flex-col w-full sm:w-[32%] rounded-lg bg-blue-950 hover:bg-[#017BCC] font-bold items-center justify-center gap-7 text-lg  py-5 transition-all ease-in duration-300' >
                <div>
                <CountUp className='text-5xl' start={500} end={1400}  duration={2}></CountUp>
                </div>
                
                <h4 className='uppercase'>Completed Projects</h4>
            </div>

            <div className='flex flex-col w-full sm:w-[32%] rounded-lg bg-blue-950 hover:bg-[#017BCC] font-bold items-center justify-center gap-7 text-lg py-5 transition-all ease-in duration-300'>
                <div className='flex items-center justify-center gap-2'>
                <CountUp className='text-5xl' start={0} end={130}  duration={2}></CountUp>
                <span className='text-5xl'>+</span>
                </div>
                
                <h4 className='uppercase'>Worldwide Branches</h4>
            </div>
        </div>
    )
}

export default Counter