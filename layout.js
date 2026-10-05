import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Next App',
  description: 'React + Next.js demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}