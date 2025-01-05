import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4 '>
       <MenuItem title='home' address='/' Icon={AiFillHome} />
       <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <Link href='/' className='flex items-center gap-1'>
        <span className='text-l font-bold bg-amber-500 p-1 rounded'>IMDB</span> <span className='text-l hidden sm:inline'>Clone</span>
      </Link>
     
    </div>
  )
}

export default Header
