import { ReactNode } from 'react';
import './styles.css';

type Props = {
  children: ReactNode;
};

/**
 * Layout required for all pages. NextJS stuff...
 */
export default function RootLayout({children}: Props) {
  return children;
}
