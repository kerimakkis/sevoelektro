'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Factory, Sun, Wrench } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const services = [
    {
      icon: Home,
      title: 'Wohnungselektrik',
      description: 'Haus- und Wohnungselektrik, Beleuchtungssysteme und Sicherheitslösungen für Ihr Zuhause.',
      image: '/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg'
    },
    {
      icon: Factory,
      title: 'Industrieelektrik',
      description: 'Fabrik-, Werkstatt- und Industrieanlagen - professionelle elektrische Lösungen für Unternehmen.',
      image: '/markus-spiske-kK7uPfb2YWU-unsplash.jpg'
    },
    {
      icon: Sun,
      title: 'Solarenergie',
      description: 'Solaranlagen-Installation, Wechselrichter-Systeme und erneuerbare Energielösungen.',
      image: '/raze-solar-3fuyuCKx2iA-unsplash.jpg'
    },
    {
      icon: Wrench,
      title: 'Wartung & Reparatur',
      description: 'Regelmäßige Wartung elektrischer Systeme, Fehlerdiagnose und Reparaturdienstleistungen.',
      image: '/fer-troulik-NOIDN79xlng-unsplash.jpg'
    }
  ]

  return (
    <section id="services" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Unsere Leistungen</h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Moderne elektrische Lösungen für alle Ihre Anforderungen
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg border-l-4 border-blue-500 hover-lift hover:border-blue-400 transition-all duration-300 group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              >
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900/80 group-hover:bg-gray-900/70' 
                    : 'bg-white/80 group-hover:bg-white/70'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/70 to-blue-400/70 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white/80" />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
