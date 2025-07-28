'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navlink from './navLink'

const Navbar = () => {
    const [open,setOpen]=useState(false)
    const links = [
        { url: '/', name: 'Home' },
        { url: '/about', name: 'About' },
        { url: '/portfolio', name: 'Portfolio' },
        { url: '/contact', name: 'Contact' },
    ]
    return (
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className='hidden md:flex gap-4 mt-5  '>
                {links.map(link=>(
                   <Navlink link={link}  key={link.name}/> 
                ))}

            </div>
                {/* logo  */}
            <div className='mt-5 md:hidden lg:flex  '>
                <Link href="/" className='text-sm rounded-md p-2 bg-black font-semibold '>
                    <span className='text-white mr-1 p-1'>rafa</span>
                    <span className='w-12 h-8 bg-white text-black rounded p-1'>.dev</span>
                </Link>

            </div>
            {/* social links */}
            <div className='hidden md:flex gap-4  mt-5'>
                <Link href="https://github.com/rafa-houssam">
                <Image src="/github.png" alt='github' width={24} height={24}/></Link>
                <Link href="https://linkedin.com/rafa-houssam">
                <Image src="/linkedin.png" alt='linkedin' width={24} height={24}/></Link>
                <Link href="https://github.com/rafa-houssam">
                <Image src="/facebook.png" alt='facebook' width={24} height={24}/></Link>
                <Link href="https://github.com/rafa-houssam">
                <Image src="/instagram.png" alt='insta' width={24} height={24}/></Link>

            </div>
            {/* menu button */}
            <div className="mt-5 md:hidden ">
                <button
                    className="flex flex-col justify-between h-6 w-9 relative z-55 hover:cursor-pointer"
                    aria-label="Open navigation menu"
                    type="button"
                    onClick={() => setOpen(!open)}
                >
                    <span className="block w-8 h-1 bg-white rounded"></span>
                    <span className="block w-8 h-1 bg-white rounded"></span>
                    <span className="block w-8 h-1 bg-white rounded"></span>
                </button>
            </div>

            {/* menu list */}
            {open &&(<div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl'>
                {links.map(link=>(
                    <Link href={link.url} key={link.name}>{link.name}</Link>
                ))}

            </div>)}
            



        </div>
    )
}

export default Navbar