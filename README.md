# Mahir Durna – Portfolio

Personal portfolio website of Mahir Durna, frontend developer. Single-page app built with React, TypeScript, Vite and Tailwind CSS, with a German/English language switch, a contact form backed by a small PHP mailer, and legal pages (Impressum, Datenschutz).

Live: [mahir-durna.de](https://mahir-durna.de)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Files](#files)
- [Prerequisites](#prerequisites)
- [Quickstart](#quickstart)
- [Access](#access)
- [Usage](#usage)
  - [Scripts](#scripts)
  - [Editing Content](#editing-content)
  - [Translations](#translations)
  - [Contact Form](#contact-form)
  - [Verify](#verify)
- [Deployment](#deployment)

## Features

- Sections: Hero, About, Skills, Projects, References, Contact
- Terminal-inspired dark design (cyan accent, JetBrains Mono / Inter)
- German / English language switch – choice is stored in `localStorage`, first visit falls back to the browser language
- Contact form with client-side validation, sent via `mail.php`
- Legal pages at `/impressum` and `/datenschutz`, both translated
- Responsive layout with mobile navigation
- Self-hosted fonts via `@fontsource` (no requests to Google Fonts)

## Tech Stack

| Tool              | Version (from `package.json`)      |
| ----------------- | ---------------------------------- |
| React             | `^19.2.6`                          |
| TypeScript        | `~6.0.2`                           |
| Vite              | `^8.0.12`                          |
| Tailwind CSS      | `^4.3.0` (via `@tailwindcss/vite`) |
| ESLint / Prettier | see `package.json`                 |

## Files

| File                                               | Purpose                                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `README.md`                                        | This documentation                                                                                                   |
| `index.html`                                       | HTML entry point, meta tags                                                                                          |
| `src/main.tsx`                                     | React entry point, font imports                                                                                      |
| `src/App.tsx`                                      | Page layout and minimal path-based routing (`/`, `/impressum`, `/datenschutz`)                                       |
| `src/index.css`                                    | Tailwind import, theme tokens (colors, fonts), custom utilities                                                      |
| `src/components/`                                  | Page sections (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `References`, `Contact`, `Footer`, `SectionHeading`) |
| `src/pages/`                                       | Legal pages (`Impressum`, `Datenschutz`) and their shared `LegalLayout`                                              |
| `src/data/content.ts`                              | Language-independent data: contact links, skills, projects, reference authors                                        |
| `src/i18n/translations.ts`                         | All German and English UI texts                                                                                      |
| `src/i18n/datenschutz.ts`                          | Privacy policy content in German and English                                                                         |
| `src/i18n/LanguageContext.tsx`                     | Language provider and `useLanguage()` hook                                                                           |
| `public/mail.php`                                  | Server-side mailer for the contact form                                                                              |
| `public/.htaccess`                                 | Apache rewrite rule so `/impressum` and `/datenschutz` resolve to the app                                            |
| `public/robots.txt`                                | Crawler rules (search engines allowed, AI/SEO scrapers opted out)                                                    |
| `public/sitemap.xml`                               | Sitemap for search engines                                                                                           |
| `public/img/`, `public/svg/`, `public/profilbild/` | Images, icons and profile pictures                                                                                   |
| `eslint.config.js`, `.prettierrc`                  | Linting and formatting rules                                                                                         |
| `vite.config.ts`, `tsconfig*.json`                 | Build and TypeScript configuration                                                                                   |

## Prerequisites

- Node.js `20.19+` or `22.12+` (required by Vite 8) — check with: `node -v`
- npm — check with: `npm -v`

## Quickstart

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

## Access

The dev server runs at [http://localhost:5173](http://localhost:5173) (Vite default). `npm run preview` serves the production build at [http://localhost:4173](http://localhost:4173).

## Usage

### Scripts

| Command                    | Description                                |
| -------------------------- | ------------------------------------------ |
| `npm run dev`              | Start the Vite dev server with hot reload  |
| `npm run build`            | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview`          | Serve the production build locally         |
| `npm run lint`             | Run ESLint                                 |
| `npx prettier --write src` | Format the source code                     |

### Editing Content

- **Texts** (headings, descriptions, form labels, …): `src/i18n/translations.ts`
- **Projects**: add an entry to `projects` in `src/data/content.ts` (image, tags, GitHub and live URL) and add the matching description under `projects.descriptions.<id>` in **both** languages in `src/i18n/translations.ts`
- **Skills**: `skills` and `learning` in `src/data/content.ts`, icons go into `public/svg/`
- **References**: author and role in `src/data/content.ts`, quote text in `references.items` in `src/i18n/translations.ts` (same order)
- **Contact links** (email, GitHub, LinkedIn): `contact` in `src/data/content.ts`

### Translations

The English dictionary is typed against the German one (`const en: Translation`), so a missing or misspelled key in either language fails `npm run build`.

> [!NOTE]
> Language codes are `de` and `en`. The selected language is stored under the `lang` key in `localStorage`. The `<html lang>` attribute, page title and meta description update automatically.

### Contact Form

The form posts JSON (`name`, `email`, `message`) to `/mail.php`, which sends the message to the address set in `$siteEmail` inside `public/mail.php`.

> [!IMPORTANT]
> `mail.php` only runs on a server with PHP. With `npm run dev` or `npm run preview` the form always shows the error message — test it on the real server.

### Verify

1. `npm run lint` and `npm run build` finish without errors.
2. `npm run preview`, then check:
   - all sections render and the navigation links scroll to them
   - the `DE | EN` switch changes all texts and is kept after a reload
   - `/impressum` and `/datenschutz` open directly
3. After deployment, send a test message through the contact form.

## Deployment

1. Build the site:

   ```bash
   npm run build
   ```

2. Upload the **contents** of `dist/` (including the hidden `.htaccess`) to the web root of the server.

> [!IMPORTANT]
> The server needs PHP (for `mail.php`) and Apache with `mod_rewrite` enabled. Without the rewrite rule, opening `/impressum` or `/datenschutz` directly returns a 404.

> [!NOTE]
> `public/robots.txt` allows regular search engines, blocks `/mail.php` and opts out of known AI training crawlers and SEO scrapers. It is only a request: well-behaved bots follow it, malicious bots and spammers ignore it. If the domain changes, update the URLs in `robots.txt` and `public/sitemap.xml`.
