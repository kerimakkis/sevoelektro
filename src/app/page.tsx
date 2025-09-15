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