# Configuration Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Astro Configuration](#astro-configuration)
- [Starwind Configuration](#starwind-configuration)
- [Global Constants](#global-constants)
- [i18n Configuration](#i18n-configuration)
- [TypeScript Configuration](#typescript-configuration)

## Astro Configuration

**File:** [astro.config.mjs](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/astro.config.mjs)

This file configures Astro's build system and i18n routing.

### Current Configuration

```javascript
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  // IMPORTANT: Replace with your actual domain before deployment
  site: "https://example.com",

  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

### Configuration Options

#### `site`

**IMPORTANT**: Your actual domain URL. This is used for canonical URLs, SEO, and social sharing.

**Default:** `"https://example.com"` (placeholder - must be changed!)

**Example:**
```javascript
site: "https://yourcompany.com"
```

> [!WARNING]
> Always update this before deploying! Using the placeholder will hurt your SEO.

#### `i18n.defaultLocale`

The default language for your site. This language will be served at the root path (`/`).

**Example:**
```javascript
defaultLocale: "fr"  // French is default
```

#### `i18n.locales`

Array of all supported language codes. Must match the languages defined in [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts).

**Example:**
```javascript
locales: ["fr", "de", "it", "rm"]  // Support 4 languages
```

#### `i18n.routing.prefixDefaultLocale`

When `false`, the default language is served at `/` instead of `/fr/`. Other languages use prefixes like `/de/`.

**Example:**
```javascript
prefixDefaultLocale: false  // French at /, German at /de/
prefixDefaultLocale: true   // French at /fr/, German at /de/
```

### Adding a New Locale

1. Add the locale code to the `locales` array
2. Add translations in [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)
3. Create page folder in `src/pages/[locale]/`

See [ADDING_LANGUAGES.md](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/ADDING_LANGUAGES.md) for detailed instructions.

---

## Starwind Configuration

**File:** [starwind.config.json](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/starwind.config.json)

This file configures the Starwind UI component library.

### Current Configuration

```json
{
  "$schema": "https://starwind.dev/config-schema.json",
  "tailwind": {
    "css": "src/styles/starwind.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "componentDir": "src/components",
  "components": [
    { "name": "button", "version": "2.2.0" },
    { "name": "card", "version": "1.3.0" },
    { "name": "carousel", "version": "1.0.1" },
    { "name": "avatar", "version": "1.2.1" },
    { "name": "input", "version": "1.3.1" },
    { "name": "label", "version": "1.2.0" },
    { "name": "textarea", "version": "1.3.1" },
    { "name": "separator", "version": "1.0.0" },
    { "name": "dropdown", "version": "1.2.2" }
  ]
}
```

### Configuration Options

#### `tailwind.css`

Path to the Starwind CSS file. This file contains the component styles.

**Default:** `"src/styles/starwind.css"`

#### `tailwind.baseColor`

Base color palette for components. Options: `neutral`, `slate`, `gray`, `zinc`, `stone`.

**Example:**
```json
"baseColor": "slate"  // Use slate color palette
```

#### `tailwind.cssVariables`

When `true`, uses CSS variables for theming (recommended for dark mode support).

**Default:** `true`

#### `componentDir`

Directory where Starwind components are installed.

**Default:** `"src/components"`

#### `components`

Array of installed Starwind components with their versions. This is managed automatically when you add/remove components.

### Adding Starwind Components

To add a new Starwind component:

```bash
npx starwind add [component-name]
```

This will automatically update `starwind.config.json` and install the component files.

See [Starwind](https://starwind.dev/) for more information.

---

## Global Constants

**File:** [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)

This file contains language-agnostic constants like contact information.

### Current Configuration

```typescript
// Language-agnostic contact information
export const AUTHOR_NAME = 'John Doe';
export const AUTHOR_EMAIL = 'info@professionalservices.com';
export const AUTHOR_PHONE = '+41 89 123 45 67';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/vincentheimann/';
```

### Customization

Replace these values with your actual information:

```typescript
export const AUTHOR_NAME = 'Your Name';
export const AUTHOR_EMAIL = 'your.email@example.com';
export const AUTHOR_PHONE = '+1 234 567 8900';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/yourprofile/';
```

### Usage in Components

Import these constants in your components:

```astro
---
import { AUTHOR_EMAIL, AUTHOR_PHONE } from '@/consts';
---

<a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>
<a href={`tel:${AUTHOR_PHONE}`}>{AUTHOR_PHONE}</a>
```

> [!NOTE]
> For translatable content (like business name, taglines), use [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts) instead.

---

## i18n Configuration

**File:** [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

This file defines all languages and translations for your site.

### Language Definitions

```typescript
export const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = 'fr';
```

### Translation Keys

All translations are organized by language and key:

```typescript
export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.work': 'Nos Réalisations',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    // ... more translations
  },
  de: {
    'nav.home': 'Startseite',
    'nav.work': 'Unsere Arbeiten',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    // ... more translations
  },
} as const;
```

### Translation Categories

| Category | Keys | Purpose |
|----------|------|---------|
| **Navigation** | `nav.*` | Menu items, links |
| **CTA** | `cta.*` | Call-to-action buttons |
| **Business** | `business.*` | Company name, tagline, description |
| **Portfolio** | `portfolio.*` | Portfolio section |
| **Owner** | `owner.*` | Owner/founder information |
| **Contact** | `contact.*` | Contact form and info |
| **Site** | `site.*` | SEO metadata (title, description) |
| **Author** | `author.*` | Author details (can be same as consts.ts) |
| **Theme** | `theme.*` | Theme toggle labels |

### Customizing Translations

1. **Edit existing translations:**
   ```typescript
   'business.name': 'Your Company Name',
   'business.tagline': 'Your tagline here',
   ```

2. **Add new translation keys:**
   ```typescript
   fr: {
     // ... existing keys
     'footer.copyright': '© 2025 Tous droits réservés',
   },
   de: {
     // ... existing keys
     'footer.copyright': '© 2025 Alle Rechte vorbehalten',
   },
   ```

3. **Use in components:**
   ```astro
   ---
   import { useTranslations } from '@/i18n/utils';
   const t = useTranslations(Astro.currentLocale);
   ---
   
   <p>{t('footer.copyright')}</p>
   ```

### Best Practices

- Keep translation keys consistent across all languages
- Use dot notation for namespacing (e.g., `nav.home`, `contact.form.name`)
- Store language-agnostic data (emails, phone numbers) in [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)
- Always include the `as const` assertion for type safety

---

## TypeScript Configuration

**File:** [tsconfig.json](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/tsconfig.json)

Basic TypeScript configuration for Astro.

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Path Aliases

The `@/*` alias maps to the `src/` directory, allowing clean imports:

```typescript
// Instead of:
import { useTranslations } from '../../../i18n/utils';

// Use:
import { useTranslations } from '@/i18n/utils';
```

---

## Environment Variables

For sensitive data or environment-specific configuration, create a `.env` file:

```bash
# .env
PUBLIC_SITE_URL=https://yoursite.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

Access in Astro components:

```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---
```

> [!IMPORTANT]
> Prefix public variables with `PUBLIC_` to make them available in client-side code. Never commit `.env` files to version control.

---

## Quick Reference

| What to Configure | File | Section |
|-------------------|------|---------|
| Default language | `astro.config.mjs` | `i18n.defaultLocale` |
| Supported languages | `astro.config.mjs` | `i18n.locales` |
| Language names & flags | `src/i18n/ui.ts` | `languages` object |
| Translations | `src/i18n/ui.ts` | `ui` object |
| Contact info | `src/consts.ts` | All exports |
| Component base color | `starwind.config.json` | `tailwind.baseColor` |
| Brand colors | `src/styles/tokens.css` | See [STYLING.md](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/STYLING.md) |

---

**Next Steps:**
- [Customize content and components](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CUSTOMIZATION.md)
- [Learn about the styling system](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/STYLING.md)
- [Add a new language](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/ADDING_LANGUAGES.md)
