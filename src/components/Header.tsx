'use client'

import { useState, useEffect } from 'react'
import { Lightbulb, LightbulbOff } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'materials', 'resources', 'contact', 'faq']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Startseite' },
    { href: '#contact', label: 'Angebot' },
    { href: '#about', label: 'Über uns' },
    { href: '#materials', label: 'Materialien' },
    { href: '#resources', label: 'Ressourcen' },
    { href: '#contact', label: 'Kontakt', key: 'kontakt' },
    { href: '#faq', label: 'FAQ' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      const headerHeight = 100 // Header height'ı artırdım
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-bg ${
      isScrolled ? 'shadow-lg backdrop-blur-md' : ''
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="/SEVO_Logo3 (1) (1).png" 
                alt="SEVOELEKTRO Logo" 
                className={`w-full h-full object-contain transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'brightness-0 invert' // Dark mode: beyaz logo
                    : 'brightness-0' // Light mode: siyah logo
                }`}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SEVO</h1>
              <span className="text-2sm text-gray-400">ELEKTROTECHNIK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item.key || item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-button ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              )
            })}
            
            {/* CTA Button - navigasyon ile aynı hizada */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary ml-8"
            >
              Angebot anfordern
            </button>
          </nav>

          {/* Theme Toggle Button - Sağ tarafa ortalı */}
          <button
            onClick={toggleTheme}
            className={`hidden md:block p-2 rounded-lg transition-colors duration-200 ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Lightbulb className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-pulse" />
            ) : (
              <LightbulbOff className="w-5 h-5 text-gray-400 opacity-60" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden flex flex-col space-y-1 mobile-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="flex flex-col space-y-1 py-4">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item.key || item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-button text-left w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center p-3 rounded-lg transition-colors duration-200 mt-4 ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Lightbulb className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-pulse mr-2" />
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Light Mode</span>
                </>
              ) : (
                <>
                  <LightbulbOff className="w-5 h-5 text-gray-400 opacity-60 mr-2" />
                  <span className="text-gray-900">Dark Mode</span>
                </>
              )}
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary w-full mt-4"
            >
              Angebot anfordern
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
