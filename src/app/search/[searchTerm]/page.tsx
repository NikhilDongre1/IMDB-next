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

type SearchPageProps = {
  params: Promise<{ searchTerm: string }>;
};

type TmdbSearchResponse = {
  results: MovieCardItem[];
};

export default async function SearchPage({ params }: SearchPageProps) {
  const { searchTerm } = await params;
  try {
    const data = await tmdbFetch<TmdbSearchResponse>("/search/movie", {
      query: searchTerm,
      language: "en-US",
      page: 1,
      include_adult: true,
    });
    const results = Array.isArray(data.results) ? data.results : [];

    return (
      <div>
        {results.length === 0 ? (
          <h1 className='text-center pt-6'>No results found</h1>
        ) : (
          <Card results={results} />
        )}
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
}
