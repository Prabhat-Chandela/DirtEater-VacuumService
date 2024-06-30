import React from 'react';
import {VacuumCard} from '../index';

function VacuumsSection() {

    const vacuums=[
        {
            vacuumName:"Dirt Eater",
            vacuumImage:"dirt-eater.webp",
            vacuumDescriptionFirst : "Type H Cyclonic Industrial Vacuums with 3 Stage Motor and DUAL Filtration",
            vacuumDescriptionSecond:"Dirt EATER has high and constant suction, designed for rough usage, easy to clean, easy to maintain and performs well while handling difficult types of dust.",
            path:"/dirteater"
         
        },
        {
            vacuumName:"Dirt Eater Jr",
            vacuumImage:"dirt-eater-jr.webp",
            vacuumDescriptionFirst : "Compact but POWERFUL Type H Industrial Vacuums with 45L Waste Bin & 7M Hose",
            vacuumDescriptionSecond:"Dirt EATER Junior has a compliance certificate to use for HAZAROUDS Dust like Asbestos, Chemicals Dust & waste, Cement Dust, Silica Dust, and Concrete Dust, and more.",
            path:"/dirteater-jr"
          
        },
        {
            vacuumName:"DE Protector",
            vacuumImage:"dirt-eater-protector.webp",
            vacuumDescriptionFirst : "Type H Industrial Vacuums for Heavy Usage. Strong Build, H14 HEPA Filteration",
            vacuumDescriptionSecond:"Protector is more suitable for areas like hospitals, chemical and pharmacy operations, radioactive waste management, coal, toner etc. ",
            path:"/dirteater-protector"
            
        },
        
        {
            vacuumName:"DE Bigboss",
            vacuumImage:"dust-eater-bigboss.webp",
            vacuumDescriptionFirst : "Legendary Cyclonic Industrial Vacuums with best in class performance",
            vacuumDescriptionSecond:"The core purpose of this unit is to provide extra space, power and extended waste management cycles during business operation.",
            path:"/dirteater-bigboss"
        
        },
        
    ]

  return (
    <div className='grid gap-5 sm:grid-cols-6'>
        {vacuums.map((vacuum)=>(
            <div className='sm:col-span-3' key={vacuum.vacuumName}>
                <VacuumCard {...vacuum}/>
            </div>
        ))}
    </div>
  )
}

export default VacuumsSection