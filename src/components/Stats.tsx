'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: '500+', label: 'Abgeschlossene Projekte' },
    { number: '25+', label: 'Jahre Erfahrung' },
    { number: '50+', label: 'Fachkräfte' },
    { number: '7/24', label: 'Notdienst' }
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 border-l-4 border-blue-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
