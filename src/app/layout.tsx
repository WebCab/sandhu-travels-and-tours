import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sandhu Travels and Tour | Curated Small-Group Expeditions & Tours',
  description:
    'Sandhu Travels and Tour — Curated small-group expeditions, sustainable cultural tours, and bespoke wilderness adventures across the globe.',
  keywords: [
    'small group tours',
    'expeditions',
    'sustainable travel',
    'cultural tours',
    'Patagonia trek',
    'Kyoto Kumano Kodo',
    'Lofoten aurora',
    'safari',
  ],
  authors: [{ name: 'Sandhu Travels and Tour' }],
  metadataBase: new URL('https://sandhutravels.com'),
  openGraph: {
    title: 'Sandhu Travels and Tour | Curated Small-Group Expeditions',
    description:
      'Intimate small-group expeditions limited to 12 guests. Led by local naturalists, historians, and mountaineers across Earth’s most extraordinary frontiers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sandhu Travels and Tour',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Font Awesome 6 Free Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
