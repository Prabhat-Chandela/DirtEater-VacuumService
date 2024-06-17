import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Blinds, PanelRightClose, TvMinimal,Newspaper,SquareUser,SquareGanttChart,NotepadTextDashed  } from 'lucide-react';



function Header() {

    const navItems = [
        {
            name: "HOME",
            path:"/",
            icon: <TvMinimal size={15}/>
        },
        {
            name: "VACUUM RANGE",
            path:"/vacuums",
            icon: <SquareGanttChart size={15}/>
        },
        {
            name: "ABOUT",
            path:"/about",
            icon: <NotepadTextDashed size={15}/>
        },
        {
            name: "BLOGS",
            path:"/blogs",
            icon: <Newspaper size={15}/>
        },
        {
            name: "CONTACT",
            path:"/contact",
            icon: <SquareUser size={15}/>
        },

    ]

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full flex items-center justify-between p-3 bg-white shadow-md h-[90px] lg:h-[110px] fixed z-10'>
            <div className='w-[20%] sm:w-[10%] lg:w-[7%] '>
                <img className='w-full drop-shadow-md' src="DE-site-logo.webp" alt="logo" />
            </div>

            <nav className="flex text-[#017BCC]">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className=" text-black focus:outline-none">
                            {isOpen ? <PanelRightClose color='#017BCC' /> : <Blinds color='#017BCC' />}
                        </button>
                    </div>
                    <div className={`bg-white absolute top-0 right-0 w-full h-screen mt-[90px] lg:mt-0 lg:h-full flex flex-col items-center lg:static lg:flex-row lg:w-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all ease-in-out duration-200 lg:translate-x-0 `}>
                        <ul className="flex flex-col gap-7 lg:gap-2 lg:flex-row lg:justify-between text-sm pt-10 lg:pt-0">
                            {navItems.map((item) => (
                                <li key={item.name}><NavLink to={item.path} className={({isActive})=>`lg:mt-0 px-4 py-2 cursor-pointer tracking-[1vw] lg:tracking-[0.3vw] font-bold drop-shadow-2xl flex items-center gap-2 transition-all ease-in-out duration-200 ${isActive ? "text-[#017BCC] underline underline-offset-8": "text-blue-950 hover:underline hover:underline-offset-8"} `}><span>{item.icon}</span>{item.name}</NavLink></li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;