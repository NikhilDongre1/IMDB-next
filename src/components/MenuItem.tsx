import React from 'react'
import Link from 'next/link'
const MenuItem = ({title,address,Icon}:{title:string,address:string,Icon:any}) => {
  return (
    <Link href={address} className='hover:text-amber-50'>
        <Icon  className='text-xl sm:hidden'/>
        <p className=' uppercase hidden sm:inline '>{title}</p>
    </Link>
  )
}

export default MenuItem
