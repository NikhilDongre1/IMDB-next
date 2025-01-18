import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-amber-100 dark:text-gray-700 bg-gray-500 text-center font-semibold py-3 gap-6'>
      <NavItem title="Trending" params="fetchTrending" />
      <NavItem title="To Rated" params="fetchTopRated" />

     
    </div>
  )
}

export default Navbar
