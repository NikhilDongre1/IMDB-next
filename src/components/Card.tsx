import React from 'react'

const Card = ({ results }: { results: any }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className='flex flex-wrap justify-center max-w-8xl mx-auto mt-5'>
            {results.map((movie: any) => {
              return  <div key={movie.id} className='w-[320px] h-[466px] m-2 hover:scale-95 transition-transform duration-300 cursor-pointer  rounded rounded-lg dark:bg-neutral-900 bg-neutral-300' >
                <img className='w-[300px] h-[417px] mx-auto mt-2 object-cover rounded rounded-lg dark:bg-neutral-950  bg-slate-100'  src={`${imageBaseUrl}${movie.poster_path}`} alt="img" />
                <div className='flex justify-between px-4 py-2 '>

                <p className='font-bold'>{movie.title ?? movie.name ?? movie.original_name ?? movie.original_title}</p>
                <p className='font-semibold dark:text-amber-400 text-amber-800'>{movie.vote_average}/10</p>
                </div>
                </div>
            })}
        </div>
    )
}

export default Card
