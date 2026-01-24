# Changelog
All notable changes to this project will be documented in this file.

This project follows a **human-curated release log**, not automated version noise.

---

## [1.0.0] – 2026-01-24
### Initial Public Release

#### Added
- Dashboard-style editorial landing page
- Global Water-Glass UI system (panels, cards, buttons, navigation)
- 3D animated hero using Three.js
- Global chefs directory
- Press release section
- Leadership & ambassadors page
- Floating Contact / Registration widget
- Floating Buy Me a Coffee widget (hardened, persistent)
- Progressive Web App (PWA)
  - Custom manifest
  - Service worker
  - Offline support
  - Installable on iOS & Android
  - Custom logo everywhere (no Vercel branding)

#### Fixed
- Widget z-index conflicts
- Script injection reliability in Next.js App Router
- Production build issues with Tailwind + Framer Motion
- Manifest typing errors

#### Notes
- Design and UI system are **locked**
- All future changes must respect scoped workflow rules
