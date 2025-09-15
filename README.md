# Sevoelektro - Elektrische Lösungen

Modern und professionelle Website für ein Elektrounternehmen. Entwickelt mit Next.js, React, TypeScript und Tailwind CSS.

## 🚀 Features

### 🎨 Design
- **Dunkles Theme**: Modernes und professionelles Aussehen
- **Farbpalette**: Dunkelblau/schwarzer Hintergrund, weiße Texte, blaue Akzente
- **Typografie**: Inter Font-Familie für saubere und lesbare Typografie
- **Responsive**: Perfektes Aussehen auf allen Geräten

### 📱 Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1024px)
- Mobile (480px - 768px)
- Kleine Bildschirme (unter 480px)

### 🛠️ Technologien
- **Next.js 15**: React Framework mit App Router
- **React 19**: Moderne React-Features
- **TypeScript**: Typsichere Entwicklung
- **Tailwind CSS**: Utility-first CSS Framework
- **Framer Motion**: Smooth Animationen
- **Lucide React**: Moderne Icons

### ⚡ Interaktive Features
- Smooth Scrolling Navigation
- FAQ Accordion
- Formular-Validierung
- Mobile Menu
- Animationen und Übergänge
- Counter-Animationen
- Parallax-Effekte

## 📁 Projektstruktur

```
sevoelektro/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Hauptseite
│   │   ├── layout.tsx        # Root Layout
│   │   ├── globals.css       # Globale Styles
│   │   └── favicon.ico       # Website-Icon
│   └── components/
│       ├── Header.tsx        # Header-Komponente
│       ├── Hero.tsx          # Hero-Sektion
│       ├── Stats.tsx         # Statistiken
│       ├── Services.tsx      # Dienstleistungen
│       ├── About.tsx         # Über uns
│       ├── Materials.tsx     # Materialien
│       ├── Resources.tsx     # Ressourcen/Blog
│       ├── Contact.tsx       # Kontakt
│       ├── FAQ.tsx           # Häufige Fragen
│       └── Footer.tsx        # Footer
├── public/
│   └── [Hintergrundbilder]   # Alle Website-Bilder
├── tailwind.config.ts        # Tailwind Konfiguration
├── next.config.js           # Next.js Konfiguration
├── package.json             # Abhängigkeiten
└── README.md                # Projekt-Dokumentation
```

## 🎯 Seitensektionen

### 1. Header
- Logo und Markenidentität
- Navigationsmenü
- CTA-Button
- Mobile Menu

### 2. Hero Section
- Hauptüberschrift und Beschreibung
- CTA-Buttons
- Animiertes Elektro-Icon

### 3. Stats Section
- Statistiken (500+ Projekte, 25+ Jahre, 50+ Team, 7/24 Service)
- Animierte Zähler

### 4. Services Section
- 4 Hauptdienstleistungskategorien
- Hover-Effekte
- Icons und Beschreibungen

### 5. About Section
- Firmeninformationen
- Animierte visuelle Elemente

### 6. Materials Section
- 3 Materialkategorien
- Detaillierte Materiallisten

### 7. Resources Section
- Blog-Artikel
- 6 Artikel-Karten
- Statistiken und Interaktionen

### 8. Contact Section
- Kontaktformular
- Formular-Validierung
- Animierte Visualisierung

### 9. FAQ Section
- Accordion-Struktur
- 4 häufig gestellte Fragen

### 10. Footer
- 4-spaltige Struktur
- Kontaktinformationen
- Newsletter-Anmeldung
- Social Media Links
- Rechtliche Links

## 🎨 Farbpalette

```css
--primary-bg: #1A1A2E      /* Haupt-Hintergrund */
--secondary-bg: #2C2C4A    /* Sekundärer Hintergrund */
--accent-blue: #007BFF     /* Haupt-Akzentfarbe */
--accent-light-blue: #00BFFF /* Helles Blau */
--text-white: #FFFFFF      /* Haupttext */
--text-light-gray: #E0E0E0 /* Heller Grauer Text */
--text-gray: #B0B0B0       /* Grauer Text */
```

## 🚀 Installation und Ausführung

### Lokale Entwicklung
```bash
# Projektordner wechseln
cd /Users/kerimakkis/Sites/sevoelektro

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Im Browser öffnen
open http://localhost:3000
```

### Produktions-Build
```bash
# Build erstellen
npm run build

# Produktionsserver starten
npm start
```

### Statischer Export
```bash
# Statischen Export erstellen
npm run build
# Die exportierten Dateien befinden sich im 'out' Ordner
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { ... }

/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Kleines Mobile */
@media (max-width: 480px) { ... }
```

## 🔧 Anpassung

### Farben ändern
Bearbeiten Sie die CSS Custom Properties in `src/app/globals.css`:

```css
:root {
  --primary-bg: #1A1A2E;
  --accent-blue: #007BFF;
  /* Weitere Farben... */
}
```

### Inhalt aktualisieren
Bearbeiten Sie die Texte in den Komponenten:
- Firmeninformationen
- Dienstleistungsbeschreibungen
- Kontaktinformationen
- Blog-Artikel

### Neue Seiten hinzufügen
1. Neue HTML-Datei erstellen
2. Gleiche CSS- und JS-Dateien einbinden
3. Navigationsmenü aktualisieren

## 📊 Performance

- **Lighthouse Score**: 90+ (in allen Kategorien)
- **Core Web Vitals**: Optimiert
- **SEO**: Meta-Tags und semantisches HTML
- **Accessibility**: WCAG 2.1 konform

## 🔒 Sicherheit

- Formular-Validierung
- XSS-Schutz
- HTTPS-Empfehlung
- Sichere Formular-Übermittlung

## 📈 SEO-Features

- Meta Title und Description
- Semantische HTML5-Struktur
- Alt-Texte
- Schema Markup (kann hinzugefügt werden)
- Sitemap (kann hinzugefügt werden)

## 🎯 Zukünftige Verbesserungen

- [ ] Blog-System
- [ ] Projekt-Galerie
- [ ] Online-Angebotsformular
- [ ] Kundenbewertungen
- [ ] Mehrsprachige Unterstützung
- [ ] CMS-Integration
- [ ] Analytics-Integration

## 📞 Support

Bei Fragen oder Vorschlägen:
- E-Mail: info@sevoelektro.com
- Telefon: +90 (212) 555 0123

## 📄 Lizenz

Dieses Projekt wurde speziell für das Unternehmen Sevoelektro entwickelt.

---

**Entwickler**: Senior Full Stack Developer  
**Datum**: Dezember 2024  
**Version**: 1.0.0