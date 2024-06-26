import React from 'react';
import { IndustriesCard } from '../index';
import { BrickWall,MountainSnow,Layers3,MonitorSmartphone,Waves,Scroll,Building2,HardHat,Boxes } from 'lucide-react';

function IndustriesSection() {

    const industries = [
        {
            industryName: "ASBESTOS",
            industryDetail: "CLASS H Vacuum, H14 HEPA Filter, Reduce Airborne Dust, Less Cleaning Time, Easy to Decontaminate, Strong Build, Heavy Duty, User Friendly.",
            industryIcon: <Waves />,
            industryImage:"Asbetos.webp"
        },
        {
            industryName: "FIBERGLASS / COMPOSITES",
            industryDetail: "Hazardous Material, Dusty Operational Processes, Damage due to Cross Contamination, Difficult Waste Management, Cyclonic HEPA Vacuum, Plastic Bag to Collect the Dust.",
            industryIcon: <Layers3 />,
            industryImage:"fiberglass.webp"
        },
        {
            industryName: "CONCRETE",
            industryDetail: "Best Suction In Its Class, Cyclonic Vacuum, Plastic Bag To Collect the Dust, 10+ Hour Non-Stop Operation, Strong Built, 10M to 25M Antistatic Hose.",
            industryIcon: <HardHat />,
            industryImage:"concerete-mainimg.webp"
        },
        {
            industryName: "CONSTRUCTION",
            industryDetail: "Clean Working Operations, Handles Multiple Types Of Dust At the Same Time, Wet & Dry, Up-to 25M Long Hose, Plastic Bag or Bag less, Super Strong Build, Easy To Move And Store.",
            industryIcon: <Building2 />,
            industryImage:"construction-img.webp"
        },
        {
            industryName: "ROCKWALL / GIB",
            industryDetail: "Reduces Airborne Dust, Shorten the cleaning time, Effective Waste Management, Longer Operational Cycle (10+ hours), H14 HEPA Filter, Long and Flexible Anti-static Hose.",
            industryIcon: <MountainSnow />,
            industryImage:"GIB-mainimg.webp"
        },
        {
            industryName: "HIRE COMPANIES",
            industryDetail: "Strong Cyclonic HEPA industrial Vacuums that comply, Proven Product for Hire Companies, No Down Time, Long Life, No Maintenance, Easy to Clean, Ready in Minute, Reliable Solution.",
            industryIcon: <MonitorSmartphone />,
            industryImage:"hire-equipment.webp"
        },
        {
            industryName: "MDF / WOOD",
            industryDetail: "Light Weight Dust, Huge Amount of Dust, Static Charge While Vacuuming, Hazardous Dust from Treated Timber, Constant Strong Suction, Long Hose, Cyclonic Vacuum, Delay in operation due to dust.",
            industryIcon: <Boxes />,
            industryImage:"MDF-WOOD-mainimg.webp"
        },
        {
            industryName: "PLASTIC",
            industryDetail: "irborne Dust from Grinding, Hazardous Dust from Paint Scrapping, Wet and Dry Dust, Cyclonic Wet and Dry HEPA Vacuum, Long hose up to 25M, Easy Waste Management, Vacuum that works.",
            industryIcon: <Scroll />,
            industryImage:"Plastic.webp"
        },

    ]

    return (
        <div className=' flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-[#017BCC] text-[5vw] sm:text-[3.2vw] lg:text-[2vw] tracking-widest font-bold flex items-center gap-2'><span><BrickWall /></span> INDUSTRIES WE SERVE</h2>
                <p className='text-blue-950 text-xs sm:text-sm font-medium'>We have extensive experience in designing and manufacturing industrial vacuum cleaners for liquids, solid, radioactive, and hazardous waste management, as well as waste management remodeling. We can construct Industrial Vacuum Cleaners for a range of industry sectors such as Asbestos Removal, Concrete Grinding, Construction, Surface Preparation, Food and Beverages, Paints and inks, Strip outs, and Demolition.</p>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-5 lg:gap-3'>
                {industries.map((industry) => (
                    <div key={industry.industryName} className='w-full sm:w-[48%] lg:w-[24%] '>
                        <IndustriesCard {...industry} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IndustriesSection;