import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6 py-16 dark:from-zinc-900 dark:to-black">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        {/* Logo: a little ticket icon + the app name */}
        <div className="mb-6 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-10 w-10 text-indigo-600 dark:text-indigo-400"
            aria-hidden="true"
          >
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2" />
            <path d="M13 17v2" />
            <path d="M13 11v2" />
          </svg>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Event<span className="text-indigo-600 dark:text-indigo-400">Pass</span>
          </h1>
        </div>

        {/* Short description */}
        <p className="mb-10 text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
          Simple digital ticketing for events.
        </p>

        {/* Buttons: stacked on phones, side by side on bigger screens */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/events/new"
            className="rounded-full bg-indigo-600 px-8 py-3 text-center font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            Create an Event
          </Link>
          <Link
            href="/events"
            className="rounded-full border border-zinc-300 bg-white px-8 py-3 text-center font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            Browse Events
          </Link>
        </div>
      </div>
    </main>
  );
}