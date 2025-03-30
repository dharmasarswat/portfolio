import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/providers';
import Navbar from '@/components/shared/Navbar';

export const metadata: Metadata = {
  title: 'Dharmendra Sarswat - Full Stack Developer',
  description:
    'Personal portfolio and blog of Dharmendra Sarswat, a Full Stack Developer specializing in MERN stack with over 4 years of experience.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Dharmendra Sarswat' }],
  creator: 'Dharmendra Sarswat',
  publisher: 'Dharmendra Sarswat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dharmasarswat.vercel.app',
    title: 'Dharmendra Sarswat - Full Stack Developer',
    description:
      'Personal portfolio and blog of Dharmendra Sarswat, a Full Stack Developer specializing in MERN stack with over 4 years of experience.',
    siteName: 'Dharmendra Sarswat Portfolio',
    images: [
      {
        url: '/hi.webp',
        width: 192,
        height: 192,
        alt: 'Dharmendra Sarswat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dharmendra Sarswat - Full Stack Developer',
    description:
      'Personal portfolio and blog of Dharmendra Sarswat, a Full Stack Developer specializing in MERN stack with over 4 years of experience.',
    images: ['/hi.webp'],
    creator: '@dharmasarswat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto pb-28 pt-12 md:pt-24 px-6">
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
