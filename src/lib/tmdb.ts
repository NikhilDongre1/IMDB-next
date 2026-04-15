const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function getApiKey() {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    throw new Error("Missing TMDB API key. Set API_KEY in your environment.");
  }

  return apiKey;
}

export async function tmdbFetch<T>(
  path: string,
  searchParams?: Record<string, string | number | boolean | undefined>
): Promise<T> {
  const apiKey = getApiKey();
  const params = new URLSearchParams({
    api_key: apiKey,
  });

  for (const [key, value] of Object.entries(searchParams ?? {})) {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  }

  const url = `${TMDB_BASE_URL}${path}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error(`TMDB request failed with status ${response.status}.`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Unable to reach TMDB right now. ${error.message}`);
    }

    throw new Error("Unable to reach TMDB right now.");
  }
}
