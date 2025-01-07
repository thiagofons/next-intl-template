import { redirect } from 'next/navigation';

/*  
  Redirect to the default locale.

  Only works in static rendering mode.
*/
export default function RootPage() {
  redirect('/pt');
}
