# LN Conciergerie — Site Officiel

Site ultra-luxe pour **LN Conciergerie**, service de conciergerie de luxe worldwide.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **React Three Fiber / Three.js** (globe 3D + particules)

## Langues

- **Français** et **Anglais** : bascule dans le header (EN | FR).

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Logo

Placer le fichier logo dans `public/logoln.jpeg`. Si le fichier est absent, le header affichera le fallback « LN ».

## Structure

- `app/` — Pages (Home, Services, About, Contact)
- `components/` — Header, Footer, cartes services, boutons
- `components/three/` — Globe 3D et particules or
- `lib/i18n/` — Dictionnaires FR/EN
- `context/` — Locale (langue courante)

## Build

```bash
npm run build
npm start
```
