'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration
      const serviceId = 'service_votnslc' // EmailJS Service ID
      const templateId = 'template_ux819oi' // EmailJS Template ID
      const publicKey = '6fx7eDxVPymjwtNf8' // EmailJS Public Key
      
      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Seval Hayrulov',
        to_email: 'info@sevoelektro.com'
      }
      
      // Send email
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Email gönderim hatası:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 xl:py-32 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/daniele-la-rosa-messina-3-Xc8g-Zkvw-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/70'}`}></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -30 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="py-6 md:py-8 lg:py-10 xl:py-12"
          >
            <h2 className={`text-4xl font-bold mb-6 md:mb-8 lg:mb-10 xl:mb-12 pt-2 md:pt-4 lg:pt-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Kontaktieren Sie uns</h2>
            <p className={`text-xl mb-8 md:mb-10 lg:mb-12 xl:mb-16 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Es ist Zeit, etwas zu schaffen
            </p>
            
            <form onSubmit={handleSubmit} className={`p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg mt-4 md:mt-6 lg:mt-8 xl:mt-10 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white/90'}`}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Vorname"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Nachname"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-Mail-Adresse *"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Betreff"
                  className="form-input"
                />
              </div>
              
              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Nachricht schreiben..."
                  rows={5}
                  className="form-input"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center">
                  Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-600 text-white rounded-lg text-center">
                  Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                </div>
              )}
            </form>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : { opacity: 0, x: 100, rotateY: 30, scale: 0.8 }}
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
                className="w-24 h-24 bg-gradient-to-br from-blue-500/70 to-blue-400/70 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Mail className="w-12 h-12 text-white/80" />
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
                className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-float"
              >
                <Phone className="w-6 h-6 text-white" />
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
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-float"
              >
                <MapPin className="w-6 h-6 text-white" />
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
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-float"
              >
                <Clock className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
