import Link from "next/link";
import { sampleEvents } from "@/lib/events";

export default function EventsPage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-gradient-to-b from-indigo-50 to-white px-6 py-12 dark:from-zinc-900 dark:to-black">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          ← Back to home
        </Link>

        <h1 className="mt-4 mb-8 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Upcoming Events
        </h1>

        {/* One card for each event in the list */}
        <div className="flex flex-col gap-4">
          {sampleEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {event.name}
              </h2>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {event.location}
              </p>
              <p className="mt-3 font-semibold text-indigo-600 dark:text-indigo-400">
                £{event.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}