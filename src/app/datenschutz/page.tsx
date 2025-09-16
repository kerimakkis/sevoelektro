'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Datenschutz() {
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
            Datenschutzerklärung
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Stand: {new Date().toLocaleDateString('de-DE')}
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
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p><strong>AkkisTech Kerim Akkis</strong></p>
                <p>Freisinger straße 1</p>
                <p>28215 Findorff Bremen</p>
                <p>Deutschland</p>
                <p>Telefon: +49 172 563 4515</p>
                <p>E-Mail: kerim@akkistech.de</p>
                <p>E-Mail: kerimakkis@gmail.com</p>
                <p>Webseite: https://akkistech.de</p>
                <p>Telefon: +49 170 954 3397</p>
                <p>E-Mail: info@sevoelektro.com</p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                2. Datenerfassung und -verwendung
              </h2>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                2.1 Kontaktformular
              </h3>
              <p>
                Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Betreff und Nachricht</li>
              </ul>
              <p>
                Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme. 
                Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                3. Cookies
              </h2>
              <p>
                Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern. 
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
              </p>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                3.1 Technisch notwendige Cookies
              </h3>
              <p>
                Diese Cookies sind für die Funktionalität der Website erforderlich und können nicht deaktiviert werden.
              </p>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                3.2 Analyse-Cookies
              </h3>
              <p>
                Wir verwenden keine Analyse-Cookies oder Tracking-Tools.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                4. Ihre Rechte
              </h2>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über die verarbeiteten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Sie können die Korrektur falscher Daten verlangen</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                <li><strong>Datenübertragbarkeit:</strong> Sie können die Übertragung Ihrer Daten verlangen</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                5. Datensicherheit
              </h2>
              <p>
                Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, 
                um Ihre Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                6. Kontakt
              </h2>
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p><strong>E-Mail:</strong> info@sevoelektro.com</p>
                <p><strong>Telefon:</strong> +49 170 954 3397</p>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
