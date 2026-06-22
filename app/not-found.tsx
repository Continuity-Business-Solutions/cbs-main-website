import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <p className="text-sm font-semibold tracking-wider text-primary uppercase">
          404
        </p>
        <h1 className="text-3xl font-bold text-heading">Page not found</h1>
        <p className="text-muted">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
