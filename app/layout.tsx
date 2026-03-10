import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mycelium Minerals | Gold & Silver Exploration in Bolivia',
    template: '%s | Mycelium Minerals',
  },
  description:
    'Mycelium Minerals is a gold and silver exploration company with 25,950 hectares of concessions in Bolivia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
