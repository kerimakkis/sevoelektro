'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Impressum() {
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
            Impressum
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Angaben gemäß § 5 TMG
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
                Anbieter
              </h2>
              <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <p className="text-lg font-semibold mb-2">SEVOELEKTRO</p>
                <p><strong>Inhaber:</strong> Seval Hayrulov</p>
                <p><strong>Elektro- und Elektronikingenieur</strong></p>
                <br />
                <p><strong>Anschrift:</strong></p>
                <p>Feldberg Straße 70</p>
                <p>64546 Mörfelden-Walldorf</p>
                <p>Deutschland</p>
                <br />
                <p><strong>Kontakt:</strong></p>
                <p>Telefon: +49 170 954 3397</p>
                <p>E-Mail: info@sevoelektro.com</p>
              </div>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Berufsbezeichnung und berufsrechtliche Regelungen
              </h2>
              <p>
                <strong>Berufsbezeichnung:</strong> Elektro- und Elektronikingenieur<br />
                <strong>Verliehen in:</strong> Deutschland<br />
                <strong>Zuständige Kammer:</strong> Ingenieurkammer Hessen
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE123456789</strong> (Beispiel - bitte durch echte USt-ID ersetzen)
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Seval Hayrulov<br />
                Feldberg Straße 70<br />
                64546 Mörfelden-Walldorf<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-700 underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
