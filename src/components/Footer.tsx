'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, MessageCircle, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
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


  const footerLinks = [
    { href: '#home', label: 'Startseite' },
    { href: '#services', label: 'Angebot' },
    { href: '#about', label: 'Info' },
    { href: '#materials', label: 'Materialien' },
    { href: '#resources', label: 'Ressourcen' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#faq', label: 'FAQ' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 footer-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Feldberg Straße 70, 64546 Mörfelden-Walldorf</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>info@sevoelektro.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+49 170 954 3397</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary mt-6"
            >
              Angebot anfordern
            </button>
          </motion.div>


          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Menü</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Chat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Folgen Sie uns</h3>
            <div className="space-y-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "Hallo, ich interessiere mich für Ihre Elektro-Dienstleistungen. Können Sie mir ein Angebot machen?"
                )
                window.open(`https://wa.me/491709543397?text=${message}`, '_blank')
              }}
              className="btn-primary w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Jetzt chatten!
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-gray-400 text-sm">
              © 2024 Sevoelektro. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/datenschutz" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Impressum
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
          
          {/* AkkisTech Credit */}
          <div className="border-t border-gray-800 pt-2 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <span>Entwickelt und veröffentlicht von</span>
              <a 
                href="https://akkistech.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <img 
                  src="/logo_akkisTech.png" 
                  alt="AkkisTech Logo" 
                  className="w-18 h-18 object-contain"
                />
                <span className="font-semibold">AkkisTech</span>
              </a>
            </div>
            <div className="text-gray-500 text-xs">
              Professionelle Webentwicklung & IT-Lösungen
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
