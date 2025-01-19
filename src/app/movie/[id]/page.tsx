import React from 'react';
import { FaFilm,FaStar } from "react-icons/fa";
import { MdDateRange,MdLanguage } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const MoviePage = async ({ params }: { params: any }) => {
    const movieId = params.id;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="flex flex-col justify-center items-center mt-6" key={movieId}>
            <img
                className="w-full h-auto max-w-4xl"
                src={`${imageBaseUrl}${data.backdrop_path}`}
                alt="img"
            />
           <div className="mx-auto max-w-4xl p-5 md:px-0  mt-3">
                <h1 className="text-3xl font-bold mb-4 ">{data.title}</h1>
                
                <p className="lg:text-xl mb-6 text-justify">{data.overview}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <MdDateRange className="text-xl mr-2 text-blue-500" />
                        <p>
                            <span className="font-semibold">Release Date:</span> {data.release_date}
                        </p>
                    </div>

                    <div className="flex items-center">
                        <MdLanguage className="text-xl mr-2 text-green-500" />
                        <p>
                            <span className="font-semibold">Language:</span> {data.original_language.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex items-center">
                        <FaFilm className="text-xl mr-2 text-red-500" />
                        <p>
                            <span className="font-semibold">Media Type:</span> {data.media_type}
                        </p>
                    </div>

                    <div className="flex items-center ">
                        <FaEye className={`text-xl mr-2 ${data.adult ? 'text-red-500' : 'text-gray-400'}`} />
                        <p>
                            <span className="font-semibold">{data.adult ? '18+ (Adult)' : 'All Ages'}</span>
                        </p>
                    </div>

                    <div className="flex items-center">
                        <FaStar className="text-xl mr-2 text-yellow-500" />
                        <p>
                            <span className="font-semibold">Rating:</span> {data.vote_average} / 10
                        </p>
                    </div>

                    <div className="flex items-center">
                        <FaStar className="text-xl mr-2 text-purple-500" />
                        <p>
                            <span className="font-semibold">Popularity:</span> {data.popularity.toFixed(0)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
