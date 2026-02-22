# DigiSoc — UNSW Digital Society Website

The official website for **UNSW Digital Society (DigiSoc)**, a student-run community at UNSW Sydney dedicated to equipping students with digital skills, industry connections, and creative experiences.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **React Router DOM 7** for client-side routing
- **CSS Variables** for light/dark theming

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about preview, upcoming events, team carousel, CTA |
| `/about` | About DigiSoc — mission, values, and history |
| `/events` | Event listings with Rubric ticketing integration |
| `/team` | Executive team profiles |
| `/sponsors` | Sponsor showcase |
| `/contact` | Contact form and social links |
| `/digipost` | DigiPost newsletter / blog |

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, Hero, etc.)
├── pages/          # Route-level page components
├── data/           # Static data (team, events, sponsors)
├── hooks/          # Custom React hooks (useTheme, useDocumentMeta, etc.)
public/             # Static assets (logos, robots.txt, sitemap.xml)
index.html          # Entry HTML with structured data & SEO meta
vite.config.ts      # Vite configuration
```

## Features

- Light and dark theme toggle (defaults to light)
- Scroll-reveal entrance animations
- Swipeable executive carousel
- Floating orbs and mouse-glow effects
- SEO-optimised with structured data, sitemap, and robots.txt
- Fully responsive, mobile-first design

## License

Internal project for UNSW Digital Society.
