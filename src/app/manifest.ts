import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SEVOELEKTRO - Professionelle Elektrische Lösungen',
    short_name: 'SEVOELEKTRO',
    description: 'Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung in Mörfelden-Walldorf.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1f2937',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'utilities'],
    lang: 'de',
    orientation: 'portrait-primary',
  }
}
