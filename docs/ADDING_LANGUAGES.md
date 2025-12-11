# Adding a New Language Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Quick Start: Adding Italian](#quick-start-adding-italian)
- [How It Works](#how-it-works)
- [Translation Tips](#translation-tips)
- [Folder Structure](#folder-structure)
- [Example: Adding Spanish](#example-adding-spanish)
- [Troubleshooting](#troubleshooting)


## Quick Start: Adding Italian

Follow these 4 steps to add Italian (or any language):

### 1. Update `src/i18n/ui.ts`

Add the language to the `languages` object:

```typescript
export const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  it: { name: 'Italiano', flag: '🇮🇹' }, // ← Add this
} as const;
```

Add all translations to the `ui` object:

```typescript
export const ui = {
  fr: { /* French translations */ },
  de: { /* German translations */ },
  it: { // ← Add this entire section
    'nav.home': 'Home',
    'nav.work': 'I Nostri Lavori',
    'nav.about': 'Chi Siamo',
    'nav.contact': 'Contatto',
    // ... all other translation keys
  },
} as const;
```

### 2. Update `astro.config.mjs`

Add the locale to the Astro configuration:

```javascript
i18n: {
  defaultLocale: "fr",
  locales: ["fr", "de", "it"], // ← Add "it"
  routing: {
    prefixDefaultLocale: false,
  },
},
```

### 3. Create Page Folder

Create `src/pages/it/index.astro`:

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import Header from "../../components/Header.astro";
import Landing from "../../components/Landing.astro";
---

<BaseLayout>
  <Header />
  <Landing />
</BaseLayout>
```

### 4. Test

That's it! The system will now:
- ✅ Automatically detect Italian in the language selector
- ✅ Redirect Italian-speaking browsers to `/it/`
- ✅ Set HTML `lang="it"`
- ✅ Translate all content and meta tags

## How It Works

### Dynamic Language Detection in BaseLayout

The [`BaseLayout.astro`](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro) checks if the current locale exists in the `languages` object:

```typescript
const lang: Language = (currentLocale && currentLocale in languages) 
  ? currentLocale as Language 
  : defaultLang;
```

**No hardcoded checks** If you add a language to `ui.ts`, it's automatically supported.

### Dynamic Redirect in Middleware

The [`middleware.ts`](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/middleware.ts) redirects based on the `languages` object:

```typescript
if (preferredLang in languages && preferredLang !== defaultLang) {
    return redirect(`/${preferredLang}/`);
}
```

**Fully scalable** Any language you add will be auto-detected from the browser.

### Language Selector

The [`LanguageSelector.astro`](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/LanguageSelector.astro) imports from `ui.ts`:

```typescript
import { languages } from "@/i18n/ui";
```

It automatically displays all available languages with their flags.

## Translation Tips

### Copy an Existing Language

The easiest way is to:
1. Copy the French or German section from `ui.ts`
2. Paste it as your new language
3. Translate each value

### Required Translation Keys

Make sure to include all these keys (copy from existing languages):

- Navigation: `nav.*`
- Business: `business.*`
- Portfolio: `portfolio.*`
- Owner: `owner.*`
- Contact: `contact.*`
- Site metadata: `site.*`
- Author: `author.*`

### Keep Author Info Consistent

Some values like `author.email` and `author.phone` should be the same across all languages (unless you have different contact info per region).

## Folder Structure

```
src/
├── i18n/
│   ├── ui.ts          ← Add language here (Step 1)
│   └── utils.ts       ← No changes needed (dynamic)
├── layouts/
│   └── BaseLayout.astro  ← No changes needed (dynamic)
├── middleware.ts      ← No changes needed (dynamic)
├── pages/
│   ├── index.astro    ← French (default)
│   ├── de/
│   │   └── index.astro
│   └── it/            ← Create this (Step 3)
│       └── index.astro
└── astro.config.mjs   ← Add locale (Step 2)
```

## Example: Adding Spanish

```typescript
// 1. src/i18n/ui.ts
export const languages = {
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
} as const;

export const ui = {
  // ... fr, de
  es: {
    'nav.home': 'Inicio',
    'nav.work': 'Nuestros Trabajos',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    // ... rest of translations
  },
} as const;
```

```javascript
// 2. astro.config.mjs
locales: ["fr", "de", "es"],
```

```
3. Create: src/pages/es/index.astro
4. Test at: http://localhost:4321/es/
```

## Troubleshooting

### Language not appearing in selector?
Check that it's added to the `languages` object in `ui.ts` with the `as const` modifier.

### Dropdown shows but page doesn't translate?
Verify all translation keys exist in the `ui` object for that language.

### Browser not auto-redirecting?
Clear your browser cache or test in incognito. The middleware caches the `accept-language` header.

### TypeScript errors?
Make sure you have the `as const` on both the `languages` and `ui` objects in `ui.ts`.

---

**Next Steps:**
- [Configure your site settings](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CONFIGURATION.md)
- [Customize content and components](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CUSTOMIZATION.md)
- [Learn about the styling system](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/STYLING.md)

