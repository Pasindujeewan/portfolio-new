"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-950 dark:bg-night dark:text-white">
      <div className="glass max-w-lg rounded-3xl p-6 text-center shadow-glow">
        <h1 className="text-3xl font-black">Something went wrong</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{error.message || "Please try again."}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-slate-950 px-5 py-3 font-bold text-white dark:bg-white dark:text-slate-950">
          Try again
        </button>
      </div>
    </main>
  );
}
