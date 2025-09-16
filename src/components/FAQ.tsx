'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const faqs = [
    {
      question: 'Wie lange dauert eine Elektroinstallation?',
      answer: 'Die Dauer hängt von der Projektgröße ab. Kleine Wohnprojekte dauern 1-3 Tage, große Industrieanlagen können mehrere Wochen in Anspruch nehmen.'
    },
    {
      question: 'Welche Unterlagen sind erforderlich?',
      answer: 'Für Elektroinstallationen benötigen wir: Projektgenehmigung, Materialzertifikate, Montagebericht und Prüfzertifikate.'
    },
    {
      question: 'Bieten Sie 24/7 Notdienst an?',
      answer: 'Ja, wir bieten 24/7 Notdienst für elektrische Störungen. Bei Notfällen sind wir innerhalb von 30 Minuten vor Ort.'
    },
    {
      question: 'Installieren Sie auch Solaranlagen?',
      answer: 'Ja, wir installieren Solaranlagen, Wechselrichter-Systeme und Netzanschlüsse mit unserem Expertenteam.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Häufig gestellte Fragen</h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-12 items-start">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80, rotateX: 30 }}
                animate={isInView ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -80, rotateX: 30 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full p-6 text-left flex justify-between items-center transition-colors duration-300 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
                >
                  <h3 className={`text-lg font-semibold pr-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 25, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : { opacity: 0, x: 80, rotateY: 25, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <motion.a
                href="#contact"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 8, -8, 0],
                  x: [0, 12, -12, 0],
                  y: [0, -8, 8, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 bg-gradient-to-br from-blue-500/70 to-blue-400/70 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:from-blue-600/80 hover:to-blue-500/80 transition-all duration-300"
              >
                <Mail className="w-12 h-12 text-white/80" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
