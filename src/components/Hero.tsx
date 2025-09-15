'use client'

import { Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
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
    <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} style={{ marginTop: 0, paddingTop: 0, top: 0 }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hobi-industri-NLBJ2I0lNr4-unsplash.jpg')",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0,
          padding: 0
        }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/70' : 'bg-white/60'}`}></div>
      </div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center hero-grid">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left hero-content"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text hero-title">
              Verwirkliche deine Elektro-Visionen
            </h2>
            <p className={`text-xl mb-8 leading-relaxed hero-subtitle ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Deine Anlaufstelle in Sachen Elektrotechnik - Professionelle Lösungen für alle elektrischen Anforderungen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-buttons">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary"
              >
                Angebot anfordern
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary"
              >
                Unsere Leistungen
              </button>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center relative hero-visual"
          >
            <div className="relative">
              {/* Main Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 bg-gradient-to-br from-blue-500/70 to-blue-400/70 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Zap className="w-16 h-16 text-white/80 animate-pulse-custom" />
              </motion.div>

              {/* Electric Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="electric-line electric-line-1"></div>
                <div className="electric-line electric-line-2"></div>
                <div className="electric-line electric-line-3"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
    </section>
  )
}
