import React from 'react';
import { Inputbox } from '../index';
import { MousePointerClick } from 'lucide-react';

function Distributorform() {
    return (
        <form className="flex flex-col lg:p-3">
            <div className="w-full p-3 flex flex-col gap-7">

                <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>
                    <Inputbox
                        label="Full Name :"
                        placeholder="Your Full Name"
                        className="w-full "
                    />
                    <Inputbox
                        label="Email :"
                        placeholder="Email"
                        type="Your email"
                        className="w-full"

                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>
                    <Inputbox
                        label="Company name :"
                        placeholder="Your Company name"
                        className="w-full"
                    />
                    <Inputbox
                        label="Mobile No :"
                        placeholder="Mobile No"
                        className="w-full"

                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>
                    <Inputbox
                        label="City :"
                        placeholder="Your current City"
                        className="w-full"
                    />
                    <Inputbox
                        label="Postal code :"
                        placeholder="Postal code"
                        className="w-full"

                    />
                </div>

              <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>
                    <Inputbox
                        label="Annual revenue :"
                        placeholder="Your Annual revenue"
                        type="number"
                        className="w-full"
                    />
                    <Inputbox
                        label="Website URL:"
                        placeholder="If you have a website?"
                        className="w-full"

                    />
                </div>

                <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>
                    <Inputbox
                        label="Intrested territory :"
                        placeholder="In what territory are you interested in selling?"
                        className="w-full"
                    />
                    <Inputbox
                        label="Start Date :"
                        placeholder="Which Date You are Planning to Start?"
                        className="w-full"

                    />
                </div>

            </div>

            <div className='w-full p-3 flex flex-col gap-7'>
            <textarea
                        placeholder="Enter Your Message Here"
                        rows="6"
                        className="bg-transparent border border-white outline-none rounded-lg p-3 focus:border-[#017BCC] text-[#017BCC] placeholder:white/30 "
                    />
                    <button className='w-fit px-3 py-2 flex items-center gap-2 text-sm  fnot-semibold text-white border-2 rounded-lg border-[#017BCC] hover:text-[#017BCC] hover:scale-105 transition-all ease-in duration-200'><span><MousePointerClick/></span>Click Here To Submit</button>
            </div>

        </form>
    )
}

export default Distributorform