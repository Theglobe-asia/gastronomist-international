# Gastronomist International

A modern, editorial, dashboard-style culinary platform built for a global community.
Designed with a cinematic **water-glass UI**, real-time interactions, and Progressive Web App (PWA) support.

---

## 🌍 Overview

**Gastronomist International** is a global culinary network focused on:
- Professional recognition
- Community building
- Collaboration across borders
- Modern gastronomy standards

The platform is designed as a **dashboard-style landing experience**, not a traditional marketing site.

---

## ✨ Key Features

### UI / UX
- Global **Water-Glass UI system** (panels, cards, buttons, navigation)
- Editorial + dashboard hybrid layout
- Responsive across desktop, tablet, and mobile
- Glass navigation header and floating widgets

### Interactive Components
- 3D animated hero (Three.js + React Three Fiber)
- Animated cards and panels
- Floating **Contact / Registration Widget**
- Floating **Buy Me a Coffee** widget (hardened against SPA + z-index issues)

### Pages
- `/` Landing Dashboard
- `/about` About & Leadership
- `/chefs` Global Chefs Directory
- `/press` Press Releases

---

## 📱 Progressive Web App (PWA)

This project is a **full PWA**, not just a website.

- Custom **App Manifest**
- Installable on iOS & Android
- Offline-ready via Service Worker
- **Custom logo used everywhere** (no Vercel branding):
  - Browser tab favicon
  - Home screen icon
  - App switcher
  - Splash / install UI

Logo source:
public/logo.png


---

## 🧠 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Framer Motion**
- **Three.js / @react-three/fiber**
- **Vercel** (deployment)
- **Resend** (email – limited to verified sender)

---

## 🧩 Project Structure (Key Files)

app/
├─ page.tsx # Dashboard landing page
├─ about/page.tsx # About & leadership
├─ chefs/page.tsx # Chefs directory
├─ press/page.tsx # Press releases
├─ manifest.ts # PWA manifest
├─ layout.tsx # Global layout + metadata

components/
├─ Header.tsx
├─ Footer.tsx
├─ Card.tsx
├─ BuyMeCoffee.tsx
├─ ContactWidget.tsx
├─ PwaRegister.tsx

public/
├─ logo.png
├─ sw.js # Service worker


---

## 🚀 Deployment

This project is deployed on **Vercel**.

### Production Deploy (Windows CMD)
```bat
git add .
git commit -m "Update"
vercel --prod
⚠️ Project Rules (Important)
These rules are locked for this project:

❌ No guessing

❌ No touching files outside the explicit task scope

✅ Always work from user-provided baseline files

✅ One file at a time

✅ Full clean copy-pasteable files only

✅ Always include commit + deploy steps

📩 Contact
For membership, collaboration, or press:

Use the Register Today widget on the site

© Gastronomist International
All rights reserved.


---

## Windows CMD: commit + deploy

```bat
git add README.md
git commit -m "Add project README documentation"
vercel --prod