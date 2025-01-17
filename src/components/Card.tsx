import React from 'react'
import { FcRating } from "react-icons/fc";
import Link from 'next/link';

const Card = ({ results }: { results: any }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className='flex flex-wrap justify-center max-w-8xl mx-auto mt-5'>
            {results.map((movie: any) => {

                return <Link href={`/movie/${movie.id}`}>
                    <div key={movie.id} className='w-[320px] h-[466px] m-2 hover:scale-95 transition-transform duration-300 cursor-pointer  rounded rounded-lg dark:bg-neutral-800 bg-neutral-300' >
                        <img className='w-[300px] h-[417px] mx-auto mt-2 object-cover rounded rounded-lg dark:bg-neutral-950  bg-slate-100' src={`${imageBaseUrl}${movie.poster_path}`} alt="img" />
                        <div className='flex justify-between px-4 py-2 '>

                            <p className='font-bold'>{movie.title ?? movie.name ?? movie.original_name ?? movie.original_title}</p>

                            <div className='flex gap-1 items-center'>
                                <p className='font-semibold dark:text-amber-400 text-amber-800 flex gap-1'>{Math.round(movie.vote_average * 100) / 100} </p>
                                <span><FcRating className='text-xl' /></span>
                            </div>
                        </div>
                    </div>
                </Link>
            })}
        </div>
    )
}

export default Card
