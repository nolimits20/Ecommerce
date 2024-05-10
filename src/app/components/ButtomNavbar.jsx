import React from 'react'
import Link from 'next/link'
import { IoCart } from "react-icons/io5";

export const ButtomNavbar = () => {
    const cartVal = 0
  return (
    <nav className='bg-[#CACEF7] flex justify-between px-32 py-8'>
        <ul className='flex items-center gap-10'>
            <li className='text-3xl font-bold hover:text-[#3F4ADE]'>
                <Link href='/'>NoLimitsStore</Link>
            </li>
            <li className='hover:text-[#3F4ADE]'>
                <Link href='/catalog'>Catalog</Link>
            </li>
            <li className='hover:text-[#3F4ADE]'>
                <Link href='/delivery'>Delivery</Link>
            </li>
            <li className='hover:text-[#3F4ADE]'>
                <Link href='/about'>About</Link>
            </li>
            <li className='hover:text-[#3F4ADE]'>
                <Link href='/contact'>Contact</Link>
            </li>


        </ul>

        <ul className='flex items-center gap-5 text-lg'> 
            <li className='hover:text-[#3F4ADE] cursor-pointer'>Cart</li>
            <li className='cursor-pointer hover:text-[#3F4ADE]'><IoCart /></li>
            <li className='bg-[#1B2AB1] rounded-full text-white font-mono items-center px-3 py-1'>{cartVal}</li>
        </ul>


    </nav>
  )
}
