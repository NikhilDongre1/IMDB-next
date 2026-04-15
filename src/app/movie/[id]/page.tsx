import React from 'react';
import ErrorMessage from "@/components/ErrorMessage";
import { FaFilm, FaStar } from "react-icons/fa";
import { MdDateRange, MdLanguage } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { tmdbFetch } from "@/lib/tmdb";
 
type MoviePageProps = {
  params: Promise<{ id: string }>;
};

type MovieDetails = {
  adult?: boolean;
  backdrop_path?: string | null;
  media_type?: string;
  original_language?: string;
  overview?: string;
  popularity?: number;
  release_date?: string;
  title?: string;
  vote_average?: number;
};

  const MoviePage = async ({ params }: MoviePageProps) => {
    const { id: movieId } = await params;
    try {
        const data = await tmdbFetch<MovieDetails>(`/movie/${movieId}`);
        console.log(data)
        const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

        return (
            <div className="flex flex-col justify-center items-center mt-6" key={movieId}>
                {data.backdrop_path ? (
                    <img
                        className="w-full h-auto max-w-4xl"
                        src={`${imageBaseUrl}${data.backdrop_path}`}
                        alt={data.title ?? "Movie backdrop"}
                    />
                ) : null}
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
                                <span className="font-semibold">Language:</span> {data.original_language?.toUpperCase()}
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
                                <span className="font-semibold">Rating:</span> {data.vote_average ?? 0} / 10
                            </p>
                        </div>

                        <div className="flex items-center">
                            <FaStar className="text-xl mr-2 text-purple-500" />
                            <p>
                                <span className="font-semibold">Popularity:</span> {data.popularity?.toFixed(0) ?? "N/A"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <ErrorMessage
                message={
                    error instanceof Error
                        ? error.message
                        : "The movie service is unavailable right now."
                }
            />
        );
    }
};

export default MoviePage;
