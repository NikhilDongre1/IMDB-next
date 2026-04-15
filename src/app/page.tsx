import Card from "@/components/Card";
import ErrorMessage from "@/components/ErrorMessage";
import { tmdbFetch } from "@/lib/tmdb";

type MovieCardItem = {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  original_title?: string;
  poster_path: string;
  vote_average: number;
};

type HomePageProps = {
  searchParams: Promise<{ genre?: string }>;
};

type TmdbListResponse = {
  results: MovieCardItem[];
};
export default async function Home({ searchParams }: HomePageProps) {
  const { genre } = await searchParams;
  const selectedGenre = genre === "fetchTopRated" ? "fetchTopRated" : "fetchTrending";
  const path =
    selectedGenre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week";
  try {
    const data = await tmdbFetch<TmdbListResponse>(path, {
      language: "en-US",
      page: 1,
    });
    const results = Array.isArray(data.results) ? data.results : [];

    return (
      <>
        <Card results={results} />
      </>
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
}
