import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mycelium Minerals | TSX-Listed Gold & Silver Producer',
    template: '%s | Mycelium Minerals',
  },
  description:
    'Mycelium Minerals is a TSX-listed gold and silver producer with producing assets in Bolivia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
