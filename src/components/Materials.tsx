'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plug, Lightbulb, Shield } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Materials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const materials = [
    {
      icon: Plug,
      title: 'Kabel & Verbindungen',
      items: [
        'NYA Kabel',
        'NYAF Kabel',
        'Stromkabel',
        'Steuerkabel',
        'Glasfaserkabel',
        'Anschlussdosen',
        'Klemmenblöcke',
        'Steckverbinder'
      ],
      image: '/jonathan-castaneda-5bpOMmr_MdI-unsplash.jpg'
    },
    {
      icon: Lightbulb,
      title: 'Beleuchtungssysteme',
      items: [
        'LED-Beleuchtung',
        'Leuchtstofflampen',
        'Spotlights',
        'Außenbeleuchtung',
        'Smart Lighting',
        'Dimmer-Systeme',
        'Steuerpanele',
        'Sicherheitsbeleuchtung'
      ],
      image: '/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg'
    },
    {
      icon: Shield,
      title: 'Sicherheitssysteme',
      items: [
        'Elektrische Schalttafeln',
        'Sicherungssysteme',
        'Erdungssysteme',
        'Überspannungsschutz',
        'USV-Systeme',
        'Generator-Systeme',
        'Sicherheitskameras',
        'Alarmanlagen'
      ],
      image: '/mostafa-mahmoudi-47jO5Y8nsYo-unsplash.jpg'
    }
  ]

  return (
    <section id="materials" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Hochwertige Materialien</h2>
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Zuverlässige elektrische Lösungen beginnen mit hochwertigen Materialien
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 materials-grid">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 120 }}
              className="relative overflow-hidden rounded-lg text-center hover-lift group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${material.image}')`,
                }}
              >
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/85 group-hover:bg-gray-800/80' 
                    : 'bg-white/85 group-hover:bg-white/80'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/50 to-blue-400/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <material.icon className="w-8 h-8 text-white/60" />
                </div>
                <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {material.title}
                </h3>
                <ul className="text-left space-y-2">
                  {material.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`py-1 border-b last:border-b-0 ${theme === 'dark' ? 'text-gray-300 border-gray-600' : 'text-gray-600 border-gray-300'}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
