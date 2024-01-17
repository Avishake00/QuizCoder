import Link from 'next/link'
import React from 'react'
import { FaHome } from "react-icons/fa";
import Logoutbutton from './buttons/Logoutbutton';

const Navbar = () => {
  return (
   

      <nav className=' Nav flex items-center justify-between p-4 m-3 rounded-lg bg-cyan-600 text-white '>
        <div className='flex gap-1 items-center text-2xl font-semibold'>
          <Link href='/'>Home</Link>
          <FaHome/>
        </div>

        <div className='space-x-4 font-semibold'>
          <Link href='/Signup'>
            Signup
          </Link>
          <Link href='/Login'>
            Login
          </Link>
          <Logoutbutton/>
        </div>
      </nav>

  )
}

export default Navbar
