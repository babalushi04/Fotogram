# Fotogram

Eine moderne, barrierefreie Fotogalerie, die Bilder aus Kosovo und Albanien in einem responsiven Layout mit Lightbox-Funktion präsentiert.

## 📋 Projektbeschreibung

Fotogram ist das 4. Projekt meiner Weiterbildung zum Frontend Developer. Die Anwendung zeigt eine Bildergalerie mit 12 hochwertigen Fotos und bietet eine intuitive Lightbox-Navigation mit voller Tastaturunterstützung.

## ✨ Features

- **Responsive Bildergalerie** – Grid-Layout, das sich an verschiedene Bildschirmgrößen anpasst
- **Lightbox/Modal-Dialog** – Vollbildansicht mit nativen `<dialog>`-Element
- **Barrierefreiheit** – ARIA-Labels, semantisches HTML, Fokus-Management
- **Bilderzähler** – Aktuelle Position wird angezeigt (z.B. "3/12")
- **Click-Outside-to-Close** – Dialog schließt beim Klick außerhalb des Bildes

## 🛠️ Tech Stack

- **HTML5** – Semantische Struktur mit `<dialog>`, `<header>`, `<footer>`, `<section>`
- **CSS3** – Custom Properties, Flexbox/Grid, responsive Design
- **Vanilla JavaScript** – Keine Frameworks, nur natives DOM-API
- **Raleway Font** – Lokal eingebundene Schriftart

## 📂 Projektstruktur

```
Fotogram/
├── index.html          # Hauptseite mit Galerie
├── style.css           # Styling und Layout
├── script.js           # Dialog-Logik und Navigation
├── README.md           # Diese Datei
├── fonts/
│   └── raleway/        # Raleway-Schriftart (lokal)
└── img/
    ├── pics/           # Galeriebilder (Kosovo & Albanien)
    ├── logo_gram/      # Fotogram-Logo (SVG)
    └── favicon/        # Browser-Icon
```

## ♿ Barrierefreiheit

- **Alt-Texte** – Jedes Bild hat eine beschreibende Alternative
- **ARIA-Labels** – Buttons und Bereiche sind für Screenreader benannt
- **Keyboard-Support** – Alle Funktionen sind per Tastatur bedienbar:
  - `Tab` / `Shift+Tab` – Navigation durch Thumbnails
  - `Enter` – Bild in Lightbox öffnen
  - `Esc` – Lightbox schließen
- **Fokus-Management** – Sichtbare Fokus-Indikatoren

## 🎨 Funktionsweise

### Bildergalerie
- 12 Thumbnails im Grid-Layout
- Click oder Enter öffnet das Bild im Modal

### Lightbox-Navigation
- **Pfeiltasten** oder **Buttons** zum Durchblättern
- **Bilderzähler** zeigt Position (z.B. "5/12")
- **Backdrop-Click** oder **X-Button** schließt den Dialog

## 📸 Bildquellen

Die Fotos stammen aus Kosovo und Albanien und zeigen:
- Städte: Prishtina, Prizren.
- Landschaften: Berge, Strände, Burgen
- Kultur: Flaggen, Architektur

## 📄 Lizenz

Dieses Projekt wurde für Bildungszwecke erstellt und steht unter der **Developer Akademie**.

Die Schriftart Raleway unterliegt der **SIL Open Font License**.

## 👨‍💻 Autor

**Virxhin Bytyqi**  
Junior Webentwickler in Weiterbildung an der Developer Akademie - Frontend und Backend(Full Stack)
GitHub: [babalushi04](https://github.com/babalushi04)

---

**Entwickelt im Rahmen der Developer Akademie – November 2025**
