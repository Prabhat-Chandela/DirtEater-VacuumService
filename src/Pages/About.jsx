import React from 'react';
import { Counter } from '../Components/index';
import { BadgeCheck, ShieldCheck, HeartHandshake, Award } from 'lucide-react';


function About() {
  return (
    <div className='w-full mt-[90px] lg:mt-[110px] p-3 lg:p-5 flex flex-col gap-7'>

      <section className='w-full flex flex-col gap-7 bg-white p-3 rounded-lg'>
        <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4 '>Dirt Eater Industrial Vacuum Service</h1>
        <p className='font-medium text-blue-950 text-xs'>At our company, we manufacture, customize, and sell a vast range of industrial vacuum cleaners, dedicated to being the most convenient and reliable solution for the industry. Our commitment to excellence drives us to work closely with our customers, developing additional tools and add-ons tailored to solve specific challenges. Whether you need a standard vacuum or a customized solution, our team is here to ensure your needs are met with precision and reliability.</p>
        <p className='font-medium text-blue-950 text-xs'>
          Industrial Vacuums and Engineering was formed because of a common vision from seasoned business, engineering and safety consultants. The vision is to protect workforce from various industries from Hazardous dust. Make Industrial Waste Management simple and fun and remove any frustration that forces workers to adapt unsafe working methods or by pass safe waste handling methods.
        </p>

        <div>
          <Counter />
        </div>

      </section>

      <section className='w-full flex flex-col gap-7 bg-white p-3 rounded-lg'>
        <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4'>Our Motto At Dirt Eater</h1>

        <p className='font-medium text-blue-950 text-xs'>We value our clients and we consider them as our business partner. Our partner in our growth. We work with them. We Engage, Educate and Evolve with our customers. We tightly bound by our values and we operate business using our values as our operating guidelines.</p>
        <p className='font-medium text-blue-950 text-xs'>
          If you have a dust related issue or having doubt about your waste management process, please get in touch with us. We are not coin operated. We don’t change for onsite demo or for consultation. Our product complies and we are backed by oversized insurance policies.
        </p>

        <div className='w-full grid gap-3 '>

          <div className='w-full bg-blue-950 text-white hover:bg-[#017BCC] transition-all ease-in duration-300 p-5 rounded-lg flex flex-col gap-5'>

            <h2 className='text-xl font-semibold border-b-2 border-b-white pb-2 pr-9 w-fit'>Our Vision</h2>
            <div className='flex flex-col gap-3'>
              <p className='w-full flex gap-2 text-xs sm:text-sm'><span><BadgeCheck /></span>Protect Workforce from Hazardous Dust</p>
              <p className='w-full flex gap-2 text-xs sm:text-sm'><span><BadgeCheck /></span>Make Industrial Waste Management Easy</p>
              <p className='w-full flex gap-2 text-xs sm:text-sm'><span><BadgeCheck /></span>Support Business Operations by improving Product and Service Quality</p>
              <p className='w-full flex gap-2 text-xs sm:text-sm'><span><BadgeCheck /></span>Help Businesses implement “Safety First” culture by sharing the knowledge of waste management and by providing right tools for the dust handling job.</p>
            </div>

          </div>

          <div className='w-full bg-blue-950 text-white hover:bg-[#017BCC] transition-all ease-in duration-300 p-5 rounded-lg flex flex-col gap-5'>

            <h2 className='text-xl font-semibold border-b-2 border-b-white pb-2 pr-9 w-fit'>Our Values</h2>
            <div className='flex flex-col gap-5'>

              <li className='flex flex-col gap-2 '><h5 className='uppercase font-semibold flex items-center gap-2'><span><ShieldCheck /></span>Safety First</h5>
                <p className='text-xs sm:text-sm sm:px-9'>We always put safety first. If that means saying NO to a business proposal. We wont adapt or implement any procedures that will or might compromise with worker's safety, environment or work place quality.</p></li>

              <li className='flex flex-col gap-2 '><h5 className='uppercase font-semibold flex items-center gap-2'><span><Award /></span>Quality Must</h5>
                <p className='text-xs sm:text-sm sm:px-9'>If we are not happy with the solution, even clients accept it, we wont be delivering that solution. For us Quality is MUST. No matter what we do not compromise with Quality of our products, services, after sales services or Free Consultation.</p></li>

              <li className='flex flex-col gap-2 '><h5 className='uppercase font-semibold flex items-center gap-2'><span><HeartHandshake /></span>Trust Always</h5>
                <p className='text-xs sm:text-sm sm:px-9'>We trust our clients and our clients trust us. If they have any query or questions, we always support that by providing maximum evidence, references or actual solutions. Trust is the driving force for us in the business. We don’t want our client to buy our machine without trying it.The business transaction will only happen if the client is 100% satisfy by our solution. Otherwise it will be a learning practice for both of us. NO STRINGS ATTACHED.</p></li>
            </div>
          </div>

        </div>

      </section>

      <section className='w-full flex flex-col gap-7 bg-white p-3 rounded-lg'>
        <h1 className='font-bold text-[#017BCC] text-2xl sm:text-5xl flex items-center gap-2 border-l-8 border-l-current pl-4'>Type H Industrial Vacuums</h1>
        <div className='flex flex-col gap-3'>
          <p className='font-medium text-blue-950 text-xs'>Type H Industrial Vacuums are designed and tested to meet international standards IEC 60335.2.69, Wet & Dry Industrial Vacuums for Commercial Use. Type H or H Class Industrial Vacuums are used to pick up Hazardous dust like Asbestos, Silica, Carcinogens, Toxic Chemicals and Pharmaceutical Products.</p>
          <p className='font-medium text-blue-950 text-xs'>Main Cherastricts of Type H vacuums is its waste handling and filtration capacity. The market is full with type H Vacuums equipped with H13 HEPA Filters and built with expired compliance standards.</p>
          <p className='font-medium text-blue-950 text-xs'>Dirt Eater is tested and certified by TUV for IEC 60335.2.69 :2017 and AZ/NZS 60335.2.69:2017 standards.</p>
          <p className='font-medium text-blue-950 text-xs'>Dirt Eater uses Oversized H14 HEPA filter as the main filter. Dirt Eater has prefilter made out nine filter bags that filters most of the dust before reaching the main HEPA filter. Twin filtration of Dirt Eater gives safer waste management operations in Hazardous Dust Handling operations.</p>
          <p className='font-medium text-blue-950 text-xs'>Dirt Eater uses 200micron Plastic Bag to collect the dust. Once the operation is over, it can be safely removed from the vacuum and can be stored or transported securely. This mechanism also reduces double dust handling issues in processes such as Asbestos removal.</p>
        </div>
       <div>
        {/* TO DO CAROUSEL */}
       </div>
      </section>

    </div>
  )
}

export default About;