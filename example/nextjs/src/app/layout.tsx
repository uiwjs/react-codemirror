import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <a href="/">Home</a> |<a href="/merge">Merge</a> |<a href="/textarea">TextArea</a>
          <br />
        </header>
        {children}
      </body>
    </html>
  );
}
