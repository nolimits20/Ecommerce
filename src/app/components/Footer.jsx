import Link from 'next/link'
import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

function Footer() {
  return (
    <footer className='text-white'>
        <div className='flex justify-between relative items-center border-b-2 border-[#CACEF7] py-10 px-32'>
          <ul className='flex items-center gap-10'>
            <li className='text-3xl font-bold'>
                <Link href='/'>NoLimitsStore</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/catalog'>Catalog</Link>
            </li>
            <li className='hover:underline' >
                <Link href='/delivery'>Delivery</Link>
            </li>
            <li className='hover:underline' >
                <Link href='/about'>About</Link>
            </li>
            <li className='hover:underline' >
                <Link href='/contact'>Contact</Link>
            </li>


        </ul>
        <ul className='flex gap-2 text-lg'>
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
        </div>
        <div className='flex justify-between px-32 py-10 text-sm'>
        <p>Created by &copy;<Link href='https://twitter.com/officialnolimt' target='_blank'>Nolimits {new Date().getFullYear()}</Link></p>

        <p>Nolimits Inc</p>
        </div>
    </footer>
  )
}

export default Footer