export default function Loading() {
  return (
    <main className="min-h-[40vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-muted">Loading...</p>
      </div>
    </main>
  );
}
