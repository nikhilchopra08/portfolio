"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import NavLinks from './NavLinks';

const navLinks = [
    {
        title: "Contact Me",
        path: "https://www.linkedin.com/in/nikhil-chopra-238334270/",
    },
    {
        title: "Resume",
        path: "https://drive.google.com/file/d/1SRoSWSjwMam3fYQh-t8edAvsPe29Ta6N/view?usp=share_link",
    },
]

const NavBar = () => {

    const [navbarOpen , setnavbarOpen] = useState(false);

  return (
    <nav className='top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semiBold'>Nikhil</Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ?( <button onClick={() => setnavbarOpen(true)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5' />
                        </button>) 
                        :( <button onClick={() => setnavbarOpen(false)} className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5' />
                        </button>) 
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navBar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLinks href={link.path} title={link.title}/>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
  )
}

export default NavBar