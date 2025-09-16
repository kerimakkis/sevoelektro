'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Cookies() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            Cookie-Richtlinie
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Informationen über die Verwendung von Cookies auf unserer Website
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`prose prose-lg max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}
        >
          <div className={`space-y-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Was sind Cookies?
              </h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet oder Mobiltelefon) 
                gespeichert werden, wenn Sie unsere Website besuchen. Sie helfen uns dabei, Ihre 
                Präferenzen zu speichern und Ihre Erfahrung auf unserer Website zu verbessern.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Wie verwenden wir Cookies?
              </h2>
              <p>
                Wir verwenden Cookies, um:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ihre Präferenzen zu speichern (z.B. Dark/Light Mode)</li>
                <li>Die Funktionalität unserer Website zu gewährleisten</li>
                <li>Ihre Benutzererfahrung zu verbessern</li>
                <li>Die Leistung unserer Website zu optimieren</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Arten von Cookies
              </h2>
              
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Technisch notwendige Cookies
                </h3>
                <p>
                  Diese Cookies sind für die grundlegende Funktionalität unserer Website erforderlich. 
                  Sie können nicht deaktiviert werden.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>theme-preference:</strong> Speichert Ihre Dark/Light Mode Einstellung</li>
                  <li><strong>session-cookie:</strong> Verwaltet Ihre Browsersitzung</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg mt-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Analyse-Cookies
                </h3>
                <p>
                  <strong>Wir verwenden derzeit keine Analyse-Cookies oder Tracking-Tools.</strong>
                </p>
                <p className="mt-3">
                  Falls wir in Zukunft Analyse-Tools verwenden sollten, werden wir Sie darüber informieren 
                  und Ihre Zustimmung einholen.
                </p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cookie-Einstellungen verwalten
              </h2>
              <p>
                Sie können Ihre Cookie-Einstellungen in Ihrem Browser verwalten:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                <li><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies</li>
                <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies verwalten</li>
                <li><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Drittanbieter-Cookies
              </h2>
              <p>
                <strong>Wir verwenden keine Drittanbieter-Cookies.</strong>
              </p>
              <p className="mt-3">
                Unsere Website enthält keine eingebetteten Inhalte von Drittanbietern, die Cookies setzen könnten.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cookie-Lebensdauer
              </h2>
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Session-Cookies
                </h3>
                <p>
                  Diese Cookies werden gelöscht, wenn Sie Ihren Browser schließen.
                </p>
                
                <h3 className={`text-lg font-semibold mb-3 mt-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Persistente Cookies
                </h3>
                <p>
                  Diese Cookies bleiben auf Ihrem Gerät gespeichert, bis sie ablaufen oder Sie sie löschen.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>theme-preference:</strong> 1 Jahr</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies in Ihrem Browser zu deaktivieren</li>
                <li>Gespeicherte Cookies zu löschen</li>
                <li>Informationen über die verwendeten Cookies zu erhalten</li>
                <li>Der Verwendung von Cookies zu widersprechen (außer technisch notwendigen)</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Kontakt
              </h2>
              <p>
                Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte an:
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p><strong>E-Mail:</strong> sevoelektro@outlook.com</p>
                <p><strong>Telefon:</strong> +49 170 954 3397</p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Änderungen dieser Richtlinie
              </h2>
              <p>
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. 
                Änderungen werden auf dieser Seite veröffentlicht. 
                Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über Änderungen informiert zu bleiben.
              </p>
              <p className="mt-3">
                <strong>Letzte Aktualisierung:</strong> {new Date().toLocaleDateString('de-DE')}
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
