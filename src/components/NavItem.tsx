'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavItem = ({title,params}:{title:string,params:string}) => {
    const searchparams = useSearchParams();
    const genre = searchparams.get('genre');

  return (
   <div className={`hover:font-bold
    ${
        genre === params
          ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
          : ''
      }`}>
   <Link href={`/?genre=${params}`}>{title}</Link>
   </div>
  )
}

export default NavItem

