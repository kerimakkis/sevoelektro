import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SEVOELEKTRO - Professionelle Elektrische Lösungen in Mörfelden-Walldorf",
  description: "Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung in Mörfelden-Walldorf und Umgebung. Jetzt anrufen: +49 170 954 3397",
  keywords: "Elektriker, Elektroinstallation, Elektroreparatur, Mörfelden-Walldorf, Elektrotechnik, Elektrische Lösungen, Seval Hayrulov, Elektroservice",
  authors: [{ name: "Seval Hayrulov", url: "https://sevoelektro.com" }],
  creator: "SEVOELEKTRO",
  publisher: "SEVOELEKTRO",
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
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://sevoelektro.com',
    siteName: 'SEVOELEKTRO',
    title: 'SEVOELEKTRO - Professionelle Elektrische Lösungen',
    description: 'Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung in Mörfelden-Walldorf.',
    images: [
      {
        url: '/SEVO_Logo3 (1) (1).png',
        width: 1200,
        height: 630,
        alt: 'SEVOELEKTRO Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEVOELEKTRO - Professionelle Elektrische Lösungen',
    description: 'Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung.',
    images: ['/SEVO_Logo3 (1) (1).png'],
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console verification code
  },
  alternates: {
    canonical: 'https://sevoelektro.com',
  },
  category: 'technology',
  classification: 'Business',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SEVOELEKTRO",
    "description": "Professionelle elektrische Lösungen für alle Ihre Anforderungen",
    "url": "https://sevoelektro.com",
    "telephone": "+491709543397",
    "email": "sevoelektro@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Feldberg Straße 70",
      "addressLocality": "Mörfelden-Walldorf",
      "postalCode": "64546",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.9939",
      "longitude": "8.5836"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "image": "https://sevoelektro.com/SEVO_Logo3%20(1)%20(1).png",
    "logo": "https://sevoelektro.com/SEVO_Logo3%20(1)%20(1).png",
    "founder": {
      "@type": "Person",
      "name": "Seval Hayrulov",
      "jobTitle": "Elektro - Elektronikingenieur"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "49.9939",
        "longitude": "8.5836"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Elektrische Dienstleistungen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektroinstallation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektroreparatur"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektrische Wartung"
          }
        }
      ]
    }
  };

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
