"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2">{error.message || "Please try again later."}</p>
          <button
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
