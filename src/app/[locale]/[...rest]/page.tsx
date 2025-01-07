import { notFound } from 'next/navigation';

/** Rendered if user goes to a route that doesn't exists. */
export default function CatchAllPage() {
  notFound();
}
