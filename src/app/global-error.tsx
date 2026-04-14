"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <main className="site-page flex min-h-screen items-center justify-center px-4">
          <div className="site-card max-w-xl rounded-xl border px-8 py-10 text-center shadow-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Unexpected error
            </p>
            <h1 className="site-heading mb-4 text-4xl font-bold">
              Something went wrong
            </h1>
            <p className="site-copy mb-6">
              We hit an application error while loading this page. You can try
              again, or head back to the homepage.
            </p>
            {error.digest ? (
              <p className="mb-6 text-sm text-muted-foreground">
                Reference: {error.digest}
              </p>
            ) : null}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => reset()}
                className="inline-flex min-w-36 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex min-w-36 items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
              >
                Go home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
