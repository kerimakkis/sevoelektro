'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Cog, Wrench } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="py-32 md:py-40 lg:py-48 xl:py-56 relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{
          backgroundImage: "url('/hector-espinoza-LrH6fCRfvHg-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800/75' : 'bg-white/65'}`}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-none">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 xl:gap-18 items-center about-grid">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -20 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="py-16 md:py-20 lg:py-24 xl:py-28"
          >
            <h2 className={`text-4xl font-bold mb-8 pt-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Über uns</h2>
            <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Mit über 25 Jahren Erfahrung im Elektrosektor bieten wir zuverlässige Lösungen. 
              Wir verwenden moderne Technologie und hochwertige Materialien, um Ihre Projekte 
              auf höchstem Niveau zu realisieren.
            </p>
            <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Unser kundenorientierter Ansatz und unser Expertenteam stehen Ihnen bei allen 
              elektrischen Anforderungen zur Seite.
            </p>
            
            {/* Owner Information */}
            <div className={`mb-8 p-6 rounded-xl border-l-4 border-blue-500 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-blue-50/50'}`}>
              <div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Seval Hayrulov
                </h3>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                  Firmeninhaber (Elektro - Elektronikingenieur)  
                  <br />
                  +49 170 954 3397
                </p>
              </div>
            </div>
            
            <div className="pt-8 pb-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Mehr erfahren
              </button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 20, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : { opacity: 0, x: 100, rotateY: 20, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            className="flex items-center justify-center relative"
          >
            <div className="relative">
              {/* Main Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <img 
                  src="/seval_hayrulov2.jpeg" 
                  alt="Seval Hayrulov - Elektro- und Elektronikingenieur"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-float"
              >
                <Zap className="w-5 h-5 text-white/80" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [15, -15, 15],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -top-6 -right-6 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center animate-float"
              >
                <Cog className="w-5 h-5 text-white/80" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -180, -360]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center animate-float"
              >
                <Wrench className="w-5 h-5 text-white/80" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
