import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import About from '@/components/About'
import Materials from '@/components/Materials'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "SEVOELEKTRO - Sevo Elektro | Professionelle Elektrische Lösungen in Mörfelden-Walldorf",
  description: "Sevo Elektro - Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung in Mörfelden-Walldorf und Umgebung. Jetzt anrufen: +49 170 954 3397",
  keywords: "sevoelektro, sevo elektro, sevo, elektro, SEVO Elektro, SEVOELEKTRO, mörfelden, elektroteknik, elektrik, Elektriker Mörfelden-Walldorf, Elektroinstallation, Elektroreparatur, Elektrotechnik, Seval Hayrulov, Elektroservice",
  openGraph: {
    title: "SEVOELEKTRO - Sevo Elektro | Professionelle Elektrische Lösungen",
    description: "Sevo Elektro - Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung in Mörfelden-Walldorf. Elektroteknik und Elektrik Spezialist.",
    type: 'website',
    locale: 'de_DE',
    url: 'https://sevoelektro.com',
    siteName: 'SEVOELEKTRO',
  },
  twitter: {
    title: "SEVOELEKTRO - Sevo Elektro | Professionelle Elektrische Lösungen",
    description: "Sevo Elektro - Professionelle elektrische Lösungen für alle Ihre Anforderungen. Elektroinstallation, Reparaturen, Wartung und Beratung. Elektroteknik und Elektrik Spezialist.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Materials />
      <Resources />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}