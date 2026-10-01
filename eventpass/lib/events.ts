// The shape of one event. Every event must have these fields.
export type Event = {
  id: number;
  name: string;
  date: string; // written as year-month-day, e.g. "2026-11-14"
  location: string;
  price: number; // in pounds
};

// TEMPORARY sample events so we can build the page.
// Later we will replace this list with real events from the database.
export const sampleEvents: Event[] = [
  {
    id: 1,
    name: "School Autumn Disco",
    date: "2026-11-14",
    location: "Greenfield School Hall",
    price: 5,
  },
  {
    id: 2,
    name: "Local Band Night",
    date: "2026-11-21",
    location: "The Old Barn, Camden",
    price: 8,
  },
  {
    id: 3,
    name: "Charity Quiz Evening",
    date: "2026-12-05",
    location: "Community Centre",
    price: 3,
  },
];