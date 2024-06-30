import React from 'react';
import { Inputbox } from '../index';
import { MousePointerClick } from 'lucide-react';

function Contactform() {
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
                        label="City :"
                        placeholder="Your current City"
                        className="w-full"
                    />
                    <Inputbox
                        label="Mobile No :"
                        placeholder="Mobile No"
                        className="w-full"

                    />
                </div>


                <div className='flex flex-col sm:flex-row gap-7 sm:gap-3 w-full'>

                    <div className='w-full flex relative flex-col'>
                        <label className='w-fit absolute -top-3 left-3 bg-[#030f27] text-white px-3 py-1 text-sm font-semibold rounded-lg  inline-block mb-1' htmlFor="vacuum-select">Vacuum Range:</label>

                        <select className='px-3 py-5 rounded-lg bg-transparent placeholder:white/30 text-[#017BCC] outline-none border-white focus:border-[#017BCC]  duration-200 border' name="vacuums" id="vacuum-select">
                            <option value="">--Please choose a vacuum--</option>
                            <option value="Dirt eater Jr">Dirt eater Jr.</option>
                            <option value="Dirt eater">Dirt eater</option>
                            <option value="Dirt eater Protector">Dirt eater Protector</option>
                            <option value="Dirt eater Big Boss">Dirt eater Big Boss</option>
                            <option value="Customized vacuum">Customized vacuum</option>
                           
                        </select>
                    </div>

                    <Inputbox
                        label="Buy Date:"
                        placeholder="Which Date You are Planning to buy?"
                        className="w-full"
                        type="date"

                    />
                </div>


            </div>

            <div className='w-full p-3 flex flex-col gap-7'>
                <textarea
                    placeholder="Enter Your Message Here"
                    rows="6"
                    className="bg-transparent border border-white outline-none rounded-lg p-3 focus:border-[#017BCC] text-[#017BCC] placeholder:white/30 "
                />
                <button className='w-fit px-3 py-2 flex items-center gap-2 text-sm  fnot-semibold text-white border-2 rounded-lg border-[#017BCC] hover:text-[#017BCC] hover:scale-105 transition-all ease-in duration-200'><span><MousePointerClick /></span>Click Here To Submit</button>
            </div>

        </form>
    )
}

export default Contactform