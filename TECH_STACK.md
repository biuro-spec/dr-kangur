# DR KANGUR - Dokumentacja Techniczna

## Stos technologiczny

| Warstwa | Technologia | Wersja |
|---------|------------|--------|
| Framework | React | 19.0.0 |
| Build tool | Vite | 6.0.0 |
| Routing | React Router DOM | 7.0.0 |
| Animacje | Framer Motion | 11.11.11 |
| Ikony | Lucide React | 0.460.0 |
| Smooth scroll | Lenis | 1.1.18 |
| Styling | CSS inline + custom properties | - |
| Fonty | Google Fonts (Inter, Outfit) | - |
| Dev plugin | @vitejs/plugin-react | 4.3.3 |

**Brak backendu** - strona jest w pełni statyczna (SPA), bez API, bez bazy danych, bez .env.

---

## Architektura plików

```
src/
├── App.jsx                     # Router (3 routes: /, /blog, /blog/:slug)
├── main.jsx                    # Entry: StrictMode + BrowserRouter
├── index.css                   # Zmienne CSS, klasy globalne, scrollbar
│
├── components/
│   ├── Navbar.jsx              # Fixed nav, glassmorphism, logo crossfade
│   ├── Hero.jsx                # 2-kolumnowy hero z blur blobami
│   ├── Stats.jsx               # 4 statystyki w blue gradient bar
│   ├── About.jsx               # O nas - 6 punktów + obraz + floating badge
│   ├── Services.jsx            # 9 usług (grid 3x3) + wewnętrzny modal
│   ├── ServiceModal.jsx        # Modal SEO z footer (gradient header + ilustracja SVG)
│   ├── Team.jsx                # Sekcja zespołu
│   ├── Testimonials.jsx        # Karuzela 5 opinii (auto-advance 6s)
│   ├── Gallery.jsx             # 4 zdjęcia + lightbox
│   ├── Rental.jsx              # Wypożyczalnia sprzętu (ciemne tło)
│   ├── FAQ.jsx                 # 8 pytań, akordeon single-open
│   ├── Contact.jsx             # Formularz + info + Google Maps iframe
│   ├── Footer.jsx              # 4-kolumnowy footer + CTA banner + modale usług
│   ├── FloatingButtons.jsx     # Scroll-to-top (prawy) + telefon (lewy, mobile)
│   └── blog/
│       ├── BlogCard.jsx        # Karta artykułu z gradient headerem
│       ├── BlogHero.jsx        # Hero artykułu blogowego
│       ├── BlogContent.jsx     # Renderer 5 typów bloków treści
│       ├── BlogSidebar.jsx     # Spis treści (sticky) + CTA card
│       └── RelatedArticles.jsx # Powiązane artykuły
│
├── pages/
│   ├── HomePage.jsx            # Strona główna + Lenis smooth scroll
│   ├── BlogListPage.jsx        # Lista artykułów + search + filtry kategorii
│   └── BlogArticlePage.jsx     # Artykuł + breadcrumbs + sidebar + related
│
├── data/
│   ├── blogArticles.js         # 12 artykułów SEO (57KB) + 6 kategorii
│   ├── servicesSeo.js          # 6 usług z treścią SEO na Głubczyce + 50km
│   └── serviceIllustrations.js # 6 ilustracji SVG inline per usługa
│
├── utils/
│   └── seo.js                  # Meta tagi, Schema.org, useScrollToTop, formatDate, slugify
│
└── hooks/                      # (pusty - przygotowany na przyszłość)

public/
├── dr_kangur_logo.png          # Logo pełne (z tekstem)
├── dr_kangur_icon.png          # Ikona znaku drogowego
├── kangur_logo_v2.png          # Wariant logo
├── kangur_logo_v3.png          # Wariant logo
├── clinic_room.jpg             # Gabinet zabiegowy
├── clinic_gym.jpg              # Sala ćwiczeń
├── hero_premium.png            # Hero - terapia
└── hero_rehab.png              # Hero - rehabilitacja
```

---

## System designu (CSS)

### Paleta kolorów
| Token | Wartość | Zastosowanie |
|-------|---------|-------------|
| `--primary` | `#CFA714` | Złoty - CTA, akcenty, gradient |
| `--secondary` | `#2C3034` | Ciemny - nagłówki, tła |
| `--accent-blue` | `#598BBC` | Niebieski - linki, badge, podtytuły |
| `--charcoal` | `#444A56` | Tekst body |
| `--indigo` | `#2D3953` | Gradienty hero, dark sections |
| `--bg-light` | `#f8f9fa` | Tło sekcji alternate |
| `#E5C14B` | - | Jaśniejszy złoty (gradient end) |

### Gradient główny
```css
--gold-gradient: linear-gradient(135deg, #CFA714 0%, #E5C14B 100%);
```
Używany w: przyciskach, CTA, scrollbar, floating buttons, badge kategorii.

### Typografia
| Element | Font | Weight | Tracking |
|---------|------|--------|----------|
| Body | Inter | 400/600/700 | normal |
| Headings | Outfit | 700/800 | -0.02em |

Ładowanie: Google Fonts z `display=swap` (FOUT) + preconnect.

### Komponenty CSS
- **`.btn-premium`** - pill button (border-radius: 100px), gold gradient, hover: translateY(-4px) scale(1.02)
- **`.card-premium`** - biała karta, radius 40px, shadow, hover: translateY(-10px) + shining effect
- **`.glass`** - glassmorphism: blur(20px) saturate(180%) + gold border

### Efekt shining (karty)
```css
.card-premium::after — gradient 120deg przesuwa się z left:-100% do left:150% w 0.7s
```

### Custom scrollbar
```css
thumb: gold gradient (180deg)
track: #f1f1f1
width: 10px
Firefox fallback: scrollbar-color + scrollbar-width: thin
```

---

## Routing

| Ścieżka | Komponent | Opis |
|----------|-----------|------|
| `/` | `HomePage` | Landing page z 12 sekcjami |
| `/blog` | `BlogListPage` | Lista artykułów + search + filtry |
| `/blog/:slug` | `BlogArticlePage` | Pojedynczy artykuł z sidebar |

**Scroll to top** na zmianę route: `useScrollToTop()` hook w App.jsx.

### Smart nawigacja (Navbar + Footer)
- Na `/`: anchor linki (`<a href="#section">`) — natywny scroll
- Na `/blog/*`: `navigate('/#section')` — React Router + hash
- Logo na `/`: smooth scroll to top
- Logo na blogu: `<Link to="/">`
- Blog link: zawsze `<Link to="/blog">`

---

## Animacje (Framer Motion)

### Wzorce wejścia
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.1 }}  // staggered
```

### Modals
```jsx
// Overlay
initial={{ opacity: 0 }} → animate={{ opacity: 1 }}
// Content
initial={{ opacity: 0, scale: 0.92, y: 30 }} → animate={{ opacity: 1, scale: 1, y: 0 }}
transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
```

### Easing curve
```
cubic-bezier(0.16, 1, 0.3, 1)  — custom "snappy" easing (wszędzie)
```

### Hover
```jsx
onMouseEnter/onMouseLeave na style props (inline)
whileHover={{ scale: 1.1, rotate: 5 }} (gallery)
```

### AnimatePresence
Używane w: mobilnym menu, modalach usług, karuzeli opinii, lightbox galerii.

---

## Lenis Smooth Scroll

Tylko na `HomePage`. Inicjalizacja:
```javascript
const lenis = new Lenis();
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
// cleanup: lenis.destroy()
```

Modal fix: `data-lenis-prevent` + `onWheel={e => e.stopPropagation()}` na overlay i content.

---

## SEO

### Meta tagi (dynamiczne)
- `updateMetaTags()` — ustawia title, description, keywords, og:* per artykuł
- `resetMetaTags()` — przywraca domyślne (strona główna)

### Schema.org
- **index.html**: `MedicalBusiness` (stały, 9 usług, rating 4.9/50 reviews)
- **Blog artykuły**: `MedicalWebPage` (dynamicznie inject/remove via `<script type="application/ld+json">`)

### Blog SEO
- 12 artykułów z: metaDescription, keywords[], publishDate, readTime
- 6 kategorii: Rehabilitacja pourazowa/pooperacyjna, Fizjoterapia manualna, Ćwiczenia, Ból przewlekły, Profilaktyka
- Structured content: heading, paragraph, list, callout, timeline

### Service Modals SEO
- 6 usług z treścią pozycjonującą na Głubczyce + miasta w promieniu 50km
- Miasta: Kędzierzyn-Koźle, Prudnik, Nysa, Racibórz, Krapkowice, Opole, Strzelce Opolskie, Brzeg

---

## Struktura danych bloga

```javascript
{
  id: number,
  slug: string,                    // URL-safe
  title: string,
  subtitle: string,
  metaDescription: string,
  category: string,                // z 6 kategorii
  keywords: string[],
  publishDate: "YYYY-MM-DD",
  readTime: number,                // minuty
  gradient: "linear-gradient(...)", // unikalny per artykuł
  icon: string,                    // nazwa ikony Lucide
  excerpt: string,
  content: ContentBlock[],
  relatedArticles: string[]        // slugi
}

// ContentBlock types:
{ type: 'heading',   text: string }
{ type: 'paragraph', text: string }
{ type: 'list',      items: string[] }
{ type: 'callout',   text: string }
{ type: 'timeline',  items: string[] }
```

---

## Responsive breakpoints

| Breakpoint | Zachowanie |
|-----------|-----------|
| `≥1024px` | Desktop: pełny navbar, gridy 3-4 kolumny |
| `768-1023px` | Tablet: hamburger menu, gridy 2 kolumny |
| `≤640px` | Mobile: 1 kolumna, mniejsze paddingi |

### Pattern
```jsx
// Inline <style> w komponentach:
<style>{`
  @media (max-width: 1024px) {
    selector { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 640px) {
    selector { grid-template-columns: 1fr !important; }
  }
`}</style>
```

Navbar: `windowWidth >= 1024` (JS resize listener, nie CSS).

---

## Podejście do stylowania

**100% inline styles** (poza index.css), bez CSS modules, bez CSS-in-JS library.

### Dlaczego
- Enkapsulacja per komponent
- Dynamiczne wartości bez interpolacji CSS
- Brak konfliktu klas
- Zero overhead build-time

### Hover/focus
Inline `onMouseEnter`/`onMouseLeave` zmieniające `e.currentTarget.style.*`.

### Media queries
`<style>` tag wewnątrz komponentu z `!important` na inline overrides.

### Reużywalne klasy
Tylko 3 w `index.css`: `.btn-premium`, `.card-premium`, `.glass`.

---

## Formularz kontaktowy

- Walidacja: regex telefon `^(\+48)?[0-9]{9}$`, email, min length
- Stany: idle → sending (disabled) → success (green) → auto-reset 4s
- Brak backendu — `setTimeout` mock 1.5s
- Google Maps: embed iframe

---

## Floating UI

- **Scroll-to-top**: pojawia się przy scrollY > 400px, opacity + transform transition
- **Telefon (mobile)**: pulsujący złoty button `@keyframes phonePulse`, ukryty ≥1024px
- Oba: `position: fixed`, `zIndex: 900`

---

## Build output

```
dist/index.html        ~3.5 KB
dist/assets/*.css      ~2.5 KB
dist/assets/*.js       ~1300 KB (chunk size warning)
Build time:            ~4s
```

Jedyny warning: chunk >500KB (brak code-splitting). Całość w jednym JS bundle.

---

## Branding stopki

```
Napisane kodem z najnowszymi technologiami przez <WebStudio47>
```
- Font: Space Grotesk
- "47" w kolorze `#8ec5fc`
- Link: https://webstudio47.pl
- Hover: text-shadow glow
