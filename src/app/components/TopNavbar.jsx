import React from 'react'
import Link from 'next/link'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

export const TopNavbar = () => {
  return (
    <nav className='bg-[#1B2AB1] text-white flex justify-between px-32 py-2'>
        <ul className='flex gap-2 text-lg'>
            <li>
                <Link href='tel:+2348163584868'>Call Oladele: +2348163584868</Link>
            </li>
            <li>
                <Link href='mailto:oladeleakomolede43@gmail.com'>Email Us: oladeleakomolede43@gmail.com</Link>
            </li>
        </ul>
        <ul className='flex items-center gap-2 text-lg'>
            <li className='hover:bg-[#2E39DC] rounded-full p-2'>
            <Link href='https://github.com/nolimits20'>
            <FaGithub />
          </Link>
            </li>
            <li className='hover:bg-[#2E39DC] rounded-full p-2'>
                <Link href='https://twitter.com/nolimits20'><FaTwitter/></Link>
            </li>
            <li className='hover:bg-[#2E39DC] rounded-full p-2'>
                <Link href='https://www.linkedin.com/in/oladele-akomolede-78ab1863/'><FaLinkedin/></Link>
            </li>
            <li className='hover:bg-[#2E39DC] rounded-full p-2'>
                <Link href='https://www.instagram.com/official_nolimitss/'><FaInstagram/></Link>
            </li>
            <li className='hover:bg-[#2E39DC] rounded-full p-2'>
                <Link href='https://twitter.com/nolimits20'><FaYoutube/></Link>
            </li>

        </ul>
    </nav>
  )
}
