# Customization Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Editing Site Content](#editing-site-content)
- [Customizing Components](#customizing-components)
- [Adding New Pages](#adding-new-pages)
- [Working with Assets](#working-with-assets)
- [Layout Customization](#layout-customization)
- [Component Library](#component-library)

## Editing Site Content

### Author & Contact Information

**File:** [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)

Edit your personal/business contact information:

```typescript
export const AUTHOR_NAME = 'Your Name';
export const AUTHOR_EMAIL = 'your.email@example.com';
export const AUTHOR_PHONE = '+1 234 567 8900';
export const AUTHOR_LINKEDIN_LINK = 'https://www.linkedin.com/in/yourprofile/';
```

These constants are used throughout the site in components like [ContactLink.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/ContactLink.astro) and [Header.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/Header.astro).

### Translatable Content

**File:** [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

All user-facing text that needs translation is stored here. Edit the translations for each language:

#### Business Information

```typescript
fr: {
  'business.name': 'Votre Entreprise',
  'business.tagline': 'Votre slogan ici',
  'business.description': 'Description de votre entreprise...',
}
```

#### Navigation

```typescript
fr: {
  'nav.home': 'Accueil',
  'nav.work': 'Nos Réalisations',
  'nav.about': 'À Propos',
  'nav.contact': 'Contact',
}
```

#### SEO Metadata

```typescript
fr: {
  'site.title': 'Your Site Title | Tagline',
  'site.description': 'Your site description for search engines',
}
```

#### Owner/Founder Information

```typescript
fr: {
  'owner.name': 'Jean Dupont',
  'owner.role': 'Fondateur & CEO',
  'owner.bio': 'Biographie du fondateur...',
}
```

> [!TIP]
> Keep translation keys consistent across all languages. If you add a new key in French, add it in German (and all other languages) too.

### Site Metadata

The [BaseLayout.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro) component handles SEO metadata. It uses translations from `ui.ts`:

```astro
---
const pageTitle = title || t("site.title");
const pageDescription = description || t("site.description");
---

<head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
</head>
```

You can override these on individual pages:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Custom Page Title" 
  description="Custom page description"
>
  <!-- Page content -->
</BaseLayout>
```

---

## Customizing Components

### Header Component

**File:** [src/components/Header.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/Header.astro)

The header includes:
- Logo/brand name
- Navigation menu
- Contact links (phone, email)
- Language selector
- Theme toggle

**Customize the logo:**

```astro
<a href="/" class="logo">
  <!-- Replace with your logo image -->
  <img src="/logo.svg" alt="Your Brand" />
  <!-- Or use text -->
  <span>{t('business.name')}</span>
</a>
```

**Modify navigation items:**

```astro
<nav>
  <a href="#home">{t('nav.home')}</a>
  <a href="#work">{t('nav.work')}</a>
  <a href="#about">{t('nav.about')}</a>
  <a href="#contact">{t('nav.contact')}</a>
  <!-- Add new items -->
  <a href="#services">{t('nav.services')}</a>
</nav>
```

### Landing Component

**File:** [src/components/Landing.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/Landing.astro)

This is the main homepage component with sections for:
- Hero/introduction
- Portfolio showcase
- Owner/founder profile
- Contact form

**Customize sections:**

You can modify, reorder, or remove sections:

```astro
<BaseLayout>
  <Header />
  <Landing />  <!-- Replace with custom sections -->
</BaseLayout>
```

Or create custom sections:

```astro
<section class="hero">
  <h1>{t('business.name')}</h1>
  <p>{t('business.tagline')}</p>
</section>
```

### Contact Links

**File:** [src/components/ContactLink.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/ContactLink.astro)

Displays phone and email with icons. Uses constants from `consts.ts`:

```astro
---
import { AUTHOR_EMAIL, AUTHOR_PHONE } from '@/consts';
---

<a href={`mailto:${AUTHOR_EMAIL}`}>
  <Icon name="mail" />
  {AUTHOR_EMAIL}
</a>
```

### Language Selector

**File:** [src/components/LanguageSelector.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/LanguageSelector.astro)

Automatically displays all languages from `ui.ts`. No customization needed unless you want to change the styling or behavior.

### Theme Toggle

**File:** [src/components/ThemeToggle.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/ThemeToggle.astro)

Switches between light and dark mode. The component uses `localStorage` to persist the user's preference.

**Customize icons:**

```astro
<button id="theme-toggle" aria-label={t('theme.toggle')}>
  <Icon name="sun" class="light-icon" />
  <Icon name="moon" class="dark-icon" />
</button>
```

---

## Adding New Pages

### Single Language Page

Create a new file in `src/pages/`:

```astro
---
// src/pages/about.astro
import BaseLayout from '@/layouts/BaseLayout.astro';
import Header from '@/components/Header.astro';
---

<BaseLayout title="About Us">
  <Header />
  <main>
    <h1>About Us</h1>
    <p>Your content here...</p>
  </main>
</BaseLayout>
```

This page will be available at `/about` (for default language).

### Multi-Language Page

For i18n support, create the page in each language folder:

```
src/pages/
├── about.astro           # French (default) - /about
└── de/
    └── about.astro       # German - /de/about
```

Each file uses the same structure but pulls translations from `ui.ts`:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { useTranslations } from '@/i18n/utils';

const t = useTranslations(Astro.currentLocale);
---

<BaseLayout>
  <h1>{t('about.title')}</h1>
  <p>{t('about.description')}</p>
</BaseLayout>
```

### Dynamic Routes

Create dynamic routes using `[param].astro`:

```astro
---
// src/pages/blog/[slug].astro
export async function getStaticPaths() {
  return [
    { params: { slug: 'post-1' } },
    { params: { slug: 'post-2' } },
  ];
}

const { slug } = Astro.params;
---

<h1>Blog Post: {slug}</h1>
```

---

## Working with Assets

### Images

**Location:** `src/assets/`

Add images to this folder and import them in components:

```astro
---
import logo from '@/assets/logo.png';
import { Image } from 'astro:assets';
---

<Image src={logo} alt="Logo" width={200} height={100} />
```

For static images, use the `public/` folder:

```astro
<img src="/images/photo.jpg" alt="Photo" />
```

### Fonts

**Location:** `public/fonts/`

The theme uses Poppins font. To add custom fonts:

1. Add font files to `public/fonts/`
2. Update [src/styles/global.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/global.css):

```css
@font-face {
  font-family: "YourFont";
  src: url("/fonts/YourFont-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "YourFont", sans-serif;
}
```

### Favicon

**Location:** `public/favicon.svg`

Replace this file with your own favicon. Supported formats:
- `.svg` (recommended for scalability)
- `.ico`
- `.png`

Update the reference in [BaseLayout.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro) if using a different format:

```astro
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Icons

The theme uses [Tabler Icons](https://tabler.io/icons). To use an icon:

```astro
---
import Icon from '@tabler/icons/outline/mail.svg?component';
---

<Icon class="w-6 h-6" />
```

---

## Layout Customization

### Base Layout

**File:** [src/layouts/BaseLayout.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro)

This layout wraps all pages and provides:
- HTML structure
- SEO meta tags
- Language detection
- Theme initialization

**Add global scripts:**

```astro
<head>
  <!-- Existing meta tags -->
  <script src="/scripts/analytics.js"></script>
</head>
```

**Add global styles:**

```astro
---
import '@/styles/global.css';
import '@/styles/custom.css';  // Add your custom styles
---
```

### Creating Custom Layouts

Create new layouts for different page types:

```astro
---
// src/layouts/BlogLayout.astro
import BaseLayout from './BaseLayout.astro';

interface Props {
  title: string;
  date: string;
  author: string;
}

const { title, date, author } = Astro.props;
---

<BaseLayout title={title}>
  <article>
    <header>
      <h1>{title}</h1>
      <p>By {author} on {date}</p>
    </header>
    <slot />
  </article>
</BaseLayout>
```

Use in pages:

```astro
---
import BlogLayout from '@/layouts/BlogLayout.astro';
---

<BlogLayout title="My Post" date="2025-01-01" author="John Doe">
  <p>Blog content here...</p>
</BlogLayout>
```

---

## Component Library

### Starwind Components

The theme includes these Starwind UI components:

| Component | Location | Usage |
|-----------|----------|-------|
| Button | `src/components/starwind/button.astro` | Buttons with variants |
| Card | `src/components/starwind/card.astro` | Content cards |
| Carousel | `src/components/starwind/carousel.astro` | Image/content carousel |
| Avatar | `src/components/starwind/avatar.astro` | User avatars |
| Input | `src/components/starwind/input.astro` | Form inputs |
| Label | `src/components/starwind/label.astro` | Form labels |
| Textarea | `src/components/starwind/textarea.astro` | Multi-line inputs |
| Separator | `src/components/starwind/separator.astro` | Horizontal dividers |
| Dropdown | `src/components/starwind/dropdown.astro` | Dropdown menus |

### Using Starwind Components

```astro
---
import { Button } from '@/components/starwind/button';
import { Card } from '@/components/starwind/card';
---

<Card>
  <h2>Card Title</h2>
  <p>Card content</p>
  <Button variant="primary">Click Me</Button>
</Card>
```

### Adding More Components

Install additional Starwind components:

```bash
npx starwind add [component-name]
```

Browse available components at [starwind.dev](https://starwind.dev).

### Creating Custom Components

Create reusable components in `src/components/`:

```astro
---
// src/components/Feature.astro
interface Props {
  title: string;
  description: string;
  icon?: string;
}

const { title, description, icon } = Astro.props;
---

<div class="feature">
  {icon && <img src={icon} alt="" />}
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  .feature {
    padding: 2rem;
    border-radius: var(--radius);
    background: var(--card);
  }
</style>
```

Use in pages:

```astro
---
import Feature from '@/components/Feature.astro';
---

<Feature 
  title="Fast" 
  description="Lightning fast performance"
  icon="/icons/speed.svg"
/>
```

---

## Best Practices

### Content Organization

- ✅ Store language-agnostic data in `consts.ts`
- ✅ Store translatable content in `i18n/ui.ts`
- ✅ Keep components small and focused
- ✅ Use layouts for shared structure
- ✅ Organize assets by type (images, fonts, icons)

### Component Design

- ✅ Use TypeScript interfaces for props
- ✅ Provide sensible defaults
- ✅ Make components reusable
- ✅ Use CSS variables for theming
- ✅ Follow Astro's component conventions

### File Naming

- ✅ Use PascalCase for components: `Header.astro`
- ✅ Use kebab-case for pages: `about-us.astro`
- ✅ Use lowercase for utilities: `utils.ts`

---

**Next Steps:**
- [Learn about the styling system](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/STYLING.md)
- [Add a new language](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/ADDING_LANGUAGES.md)
- [Configure your site](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CONFIGURATION.md)
