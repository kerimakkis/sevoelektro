'use client'

import { useState, useEffect } from 'react'
import { Zap, Menu, X, Sun, Moon } from 'lucide-react'
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
    { href: '#services', label: 'Angebot' },
    { href: '#about', label: 'Info' },
    { href: '#materials', label: 'Materialien' },
    { href: '#resources', label: 'Ressourcen' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#faq', label: 'FAQ' }
  ]

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
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-bg ${
      isScrolled ? 'shadow-lg backdrop-blur-md' : ''
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/70 to-blue-400/70 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white/80" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">SEVOELEKTRO</h1>
              <span className="text-sm text-gray-400">Elektrische Lösungen</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item.href}
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
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-400" />
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
          <div className="flex flex-col space-y-2 py-4">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-button text-left w-full ${isActive ? 'active' : ''}`}
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
                  <Sun className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 text-blue-400 mr-2" />
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Dark Mode</span>
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
