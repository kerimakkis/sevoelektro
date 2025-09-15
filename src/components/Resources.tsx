'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Sun, Home, Factory, Wrench, Leaf, Eye, MessageCircle, Heart } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Resources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const resources = [
    {
      icon: BookOpen,
      title: 'Elektrosicherheits-Leitfaden',
      date: '15. Dezember 2024',
      readTime: '3 Min. Lesezeit',
      description: 'Wichtige Punkte für Elektrosicherheit in Haus und Büro sowie Sicherheitsmaßnahmen.',
      views: 245,
      comments: 12,
      likes: 8,
      image: '/bill-mead-wmaP3Tl80ww-unsplash.jpg'
    },
    {
      icon: Sun,
      title: 'Solarenergie-Systeme',
      date: '10. Dezember 2024',
      readTime: '5 Min. Lesezeit',
      description: 'Solaranlagen-Installation, Systemauswahl und Energiespar-Ratgeber.',
      views: 189,
      comments: 7,
      likes: 15,
      image: '/raze-solar-GXLPLG3_Vf4-unsplash.jpg'
    },
    {
      icon: Home,
      title: 'Hausinstallation',
      date: '5. Dezember 2024',
      readTime: '4 Min. Lesezeit',
      description: 'Neue Hausinstallation und Renovierung bestehender Installationen.',
      views: 312,
      comments: 18,
      likes: 22,
      image: '/frames-for-your-heart-iOLHAIaxpDA-unsplash.jpg'
    },
    {
      icon: Factory,
      title: 'Industrieelektrik',
      date: '1. Dezember 2024',
      readTime: '6 Min. Lesezeit',
      description: 'Fabrik- und Werkstattelektrik, Stromverteilung und Industriesicherheitsstandards.',
      views: 156,
      comments: 5,
      likes: 9,
      image: '/markus-spiske-kK7uPfb2YWU-unsplash.jpg'
    },
    {
      icon: Wrench,
      title: 'Elektrische Fehlerdiagnose',
      date: '28. November 2024',
      readTime: '3 Min. Lesezeit',
      description: 'Elektrische Fehlererkennung, sichere Eingriffe und professionelle Lösungsvorschläge.',
      views: 278,
      comments: 14,
      likes: 11,
      image: '/fer-troulik-NOIDN79xlng-unsplash.jpg'
    },
    {
      icon: Leaf,
      title: 'Energiespartipps',
      date: '25. November 2024',
      readTime: '4 Min. Lesezeit',
      description: 'Praktische Energiesparmethoden und intelligente Lösungen zur Senkung Ihrer Stromrechnung.',
      views: 423,
      comments: 23,
      likes: 35,
      image: '/virtue-solar-5ckHScrqmXc-unsplash.jpg'
    }
  ]

  return (
    <section id="resources" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alles zum Thema Elektrik von unseren Experten</h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 resources-grid">
          {resources.map((resource, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 80, rotateZ: index % 2 === 0 ? -10 : 10, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, rotateZ: 0, scale: 1 } : { opacity: 0, y: 80, rotateZ: index % 2 === 0 ? -10 : 10, scale: 0.9 }}
              transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              className={`rounded-lg overflow-hidden hover-lift cursor-pointer transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-900 hover:bg-gray-800' 
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div 
                className="h-48 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url('${resource.image}')`,
                }}
              >
                <div className={`absolute inset-0 flex items-center justify-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-500/40 to-blue-400/40' 
                    : 'bg-gradient-to-br from-white/50 to-white/40'
                }`}>
                  <resource.icon className={`w-16 h-16 ${theme === 'dark' ? 'text-white/70' : 'text-gray-800/70'}`} />
                </div>
              </div>
              <div className="p-6">
                <div className={`flex gap-4 mb-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>{resource.date}</span>
                  <span>•</span>
                  <span>{resource.readTime}</span>
                </div>
                <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {resource.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {resource.description}
                </p>
                <div className={`flex gap-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {resource.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {resource.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {resource.likes}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
