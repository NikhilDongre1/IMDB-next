import Card from "@/components/Card";

const api_key = process.env.API_KEY;
export default async function Home({
  searchParams,
}: {
  searchParams: { genre?: string };
}) {

  const genre = (await searchParams)?.genre || "fetchTrending";

  const response = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const data = await response.json();
  const results = data.results;


  return (
    <>
      <Card results={results} />
    </>
  );
}
