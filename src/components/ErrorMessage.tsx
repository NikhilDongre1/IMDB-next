type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">
      <h2 className="text-xl font-semibold">Unable to load movies</h2>
      <p className="mt-2">{message}</p>
    </div>
  );
}
