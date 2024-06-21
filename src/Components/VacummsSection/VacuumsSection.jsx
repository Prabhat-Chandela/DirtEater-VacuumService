import React from 'react';
import {VacuumCard} from '../index';

function VacuumsSection() {

    const vacuums=[
        {
            vacuumName:"Dirt Eater",
            vacuumImage:"dirt-eater.webp",
            vacuumDescriptionFirst : "Dirt EATER, The Heavy Duty Cyclonic Industrial Vacuum equipped with H14 HEPA Filter, is the outcome of continually Engaging, Educating and Evolving with our customers. We understand their requirements for an Industrial Vacuum that performs for all forms of waste management.",
            vacuumDescriptionSecond :"Dirt EATER has high and constant suction, designed for rough usage, easy to clean, easy to maintain and performs well while handling difficult types of dust."
        },
        {
            vacuumName:"Dirt Eater Jr",
            vacuumImage:"dirt-eater-jr.webp",
            vacuumDescriptionFirst : "Dirt EATER JUNIOR is the mid-range Heavy Duty Cyclonic Industrial Vacuum equipped with an H14 HEPA Filter. Junior has a 45-liter waste bin and uses a 2-stage American motor for constant strong suction also Junior uses Cyclonic Filter Path Techniques just like our other equipment.",
            vacuumDescriptionSecond :"Dirt EATER Junior has a compliance certificate to use for HAZAROUDS Dust like Asbestos, Chemicals Dust & waste, Cement Dust, Silica Dust, and Concrete Dust, and more."
        },
        {
            vacuumName:"Dirt Eater Protector",
            vacuumImage:"dirt-eater-protector.webp",
            vacuumDescriptionFirst : "Dirt EATER PROTECTOR, as its name suggests, is the ultimate protecting machine for collecting and handling hazardous dust. It complies with local and international standards. Its strong build makes sure that dust is well intact even in the event of physical damage to the vacuum. The core purpose of this unit to provide extra protection in case of handling hazardous dusts like biohazards, chemicals, radioactive and combustible material.",
            vacuumDescriptionSecond :"Protector is more suitable for areas like hospitals, chemical and pharmacy operations, radioactive waste management, coal, toner etc. where cross contamination, exposure to the dust and equipment failure tolerance is zero. Protector is designed for continuous extended working operations. Without any break, Protector can work for numbers of days."
        },
        
        {
            vacuumName:"Dirt Eater Bigboss",
            vacuumImage:"dust-eater-bigboss.webp",
            vacuumDescriptionFirst : "Dirt EATER BIG BOSS is the heavy-duty cyclonic industrial vacuum with huge dust collection capacity. Big Boss is the answer to the fluffy, lightweight, easy to airborne and hard to manage dust. Big Boss is configured for extended working cycles where waste management is the key part of business operations. Having huge waste bin makes dust handline much easier and convenient.",
            vacuumDescriptionSecond :"The core purpose of this unit is to provide extra space, power and extended waste management cycles during business operation."
        },
        
    ]

  return (
    <div className='flex flex-col gap-5'>
        {vacuums.map((vacuum)=>(
            <div key={vacuum.vacuumName}>
                <VacuumCard {...vacuum}/>
            </div>
        ))}
    </div>
  )
}

export default VacuumsSection