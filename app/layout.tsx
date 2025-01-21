import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/providers';
import Navbar from '@/components/shared/Navbar';

export const metadata: Metadata = {
  title: 'Dharmendra Sarswat - Portfolio',
  description: 'Personal portfolio and blogs from Dharmendra Sarswat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto pb-28 pt-12 md:pt-24 px-6 ">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
