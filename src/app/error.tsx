"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Error Icon */}
        <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        {/* Error Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Something went wrong!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
          </p>

          {/* Error details in development */}
          {process.env.NODE_ENV === "development" && (
            <details className="text-left bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <summary className="cursor-pointer text-sm font-medium text-red-800 dark:text-red-200 mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-xs text-red-700 dark:text-red-300 overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Try Again
          </button>

          <div className="text-sm text-slate-500 dark:text-slate-400">
            <p>
              Or{" "}
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                return to homepage
              </a>
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 pt-4" aria-hidden="true">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </main>
  );
}
