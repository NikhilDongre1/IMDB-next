'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(search.trim()){
      console.log(`Searching for: ${search}`);
      router.push(`/search/${search}`);
    }
    setSearch('');
  }

  return (
    <form className='flex max-w-6xl justify-between mx-auto px-5 ' onSubmit={handleSearch}>
      <input type="text" placeholder="Search keywords..." className='flex-1 outline-none w-full h-14 bg-transparent' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className='text-amber-500 disabled:text-gray-400 cursor-pointer hover:text-amber-600' disabled={search === ''} >Search</button>
    </form>
  )
}

export default SearchBox
