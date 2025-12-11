# Data Management Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## 🚀 Quick Start

**Just want to add an employee?** → [Jump to Adding an Employee](#adding-an-employee)

**Just want to add a portfolio project?** → [Jump to Adding a Portfolio Project](#adding-a-portfolio-project)

---

## Table of Contents

- [Adding an Employee](#adding-an-employee)
- [Adding a Portfolio Project](#adding-a-portfolio-project)
- [Updating Company Information](#updating-company-information)
- [Managing Translations](#managing-translations)
- [Best Practices](#best-practices)

---

## Adding an Employee

Employees are displayed in the **Team Section** using the `EmployeeSection.astro` component.

### Step 1: Add Employee Data to `consts.ts`

**File:** [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)

Add a new employee entry to the `EMPLOYEES` object:

```typescript
export const EMPLOYEES: Record<string, EmployeeInfo> = {
    // ... existing employees ...
    
    // Add your new employee
    ABC: {  // Use a 3-letter trigram (e.g., initials)
        id: "ABC",
        name: "Anna Brown Carter",
        portrait: "/images/employees/anna-brown.jpg", // Optional: path to portrait image
        email: "anna.brown@yourcompany.com",
        phone: "+41 89 123 45 70",
        socials: {
            linkedin: "https://www.linkedin.com/in/annabrown/",
            facebook: "",  // Leave empty if not used
            instagram: "",
            twitter: "",
            github: "https://github.com/annabrown/",
        },
    },
};
```

> [!IMPORTANT]
> **ID (Trigram):** Use a unique 3-letter code (usually initials). This is used as a key for translations.

> [!NOTE]
> **Portrait:** Optional. If empty, an auto-generated avatar will be used based on the employee's name.

### Step 2: Add Employee Translations

**File:** [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

Add translations for the employee's title and bio in **all languages**:

```typescript
export const ui = {
    fr: {
        // ... existing translations ...
        
        // Add employee translations (French)
        'employee.ABC.title': 'Directrice Marketing',
        'employee.ABC.bio': 'Anna dirige notre stratégie marketing avec créativité et innovation.',
    },
    de: {
        // ... existing translations ...
        
        // Add employee translations (German)
        'employee.ABC.title': 'Marketing Direktorin',
        'employee.ABC.bio': 'Anna leitet unsere Marketingstrategie mit Kreativität und Innovation.',
    },
} as const;
```

**Translation Keys Format:**
- Title: `employee.{ID}.title`
- Bio: `employee.{ID}.bio`

### Step 3: Add Portrait Image (Optional)

If you have a portrait image:

1. Add the image to `public/images/employees/`
2. Reference it in `consts.ts` as shown above
3. Recommended size: 240x240px or larger (square)

If you leave the `portrait` field empty, the component will automatically generate an avatar using the employee's name.

### Step 4: Verify

1. Save all files
2. The employee will automatically appear in the Team section
3. Check both language versions to ensure translations are correct

---

## Adding a Portfolio Project

Portfolio projects are displayed in the **Portfolio Section** using the `PortfolioSection.astro` component with an interactive carousel and lightbox.

![Portfolio carousel with lightbox](assets/portfolio-carousel.webp)

*Interactive carousel navigation with lightbox for full-size viewing*

### Step 1: Prepare Your Project Image

**Option A: Use a local image**
1. Add your image to `src/assets/portfolio/`
2. Recommended size: 800x600px or similar aspect ratio
3. Supported formats: JPG, PNG, WebP

**Option B: Use an external URL**
- You can use any image URL (e.g., placeholder services, CDN)

### Step 2: Add Project to French Portfolio

**File:** [src/data/portfolio/fr.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/data/portfolio/fr.ts)

```typescript
import { nanoid } from "nanoid";
import type { ImageMetadata } from "astro";

// If using local image, import it:
import myProjectImage from "../../assets/portfolio/my-project.jpg";

export const portfolioFr: PortfolioProject[] = [
    // ... existing projects ...
    
    // Add your new project
    {
        id: nanoid(),  // Auto-generates unique ID
        title: "Mon Nouveau Projet",
        description: "Description détaillée du projet en français.\n\nVous pouvez utiliser plusieurs lignes.",
        image: myProjectImage,  // Use imported image
        // OR use external URL:
        // image: "https://example.com/image.jpg",
        
        // Optional: Call-to-action buttons
        primaryCtaText: "Voir le projet →",
        primaryCtaLink: "https://example.com/project",
        secondaryCtaText: "En savoir plus",
        secondaryCtaLink: "https://example.com/about",
    },
];
```

### Step 3: Add Project to German Portfolio

**File:** [src/data/portfolio/de.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/data/portfolio/de.ts)

Add the **same project** with German translations:

```typescript
import { nanoid } from "nanoid";
import myProjectImage from "../../assets/portfolio/my-project.jpg";

export const portfolioDe: PortfolioProject[] = [
    // ... existing projects ...
    
    {
        id: nanoid(),  // Different ID is OK
        title: "Mein Neues Projekt",
        description: "Detaillierte Projektbeschreibung auf Deutsch.\n\nSie können mehrere Zeilen verwenden.",
        image: myProjectImage,  // Same image
        primaryCtaText: "Projekt ansehen →",
        primaryCtaLink: "https://example.com/project",
        secondaryCtaText: "Mehr erfahren",
        secondaryCtaLink: "https://example.com/about",
    },
];
```

### Step 4: Add More Languages (If Applicable)

Repeat Step 3 for each additional language you support.

### Project Properties Explained

| Property | Required | Description |
|----------|----------|-------------|
| `id` | ✅ Yes | Unique identifier (use `nanoid()`) |
| `title` | ✅ Yes | Project title |
| `description` | ✅ Yes | Project description (supports multi-line with `\n`) |
| `image` | ✅ Yes | Imported image or URL string |
| `primaryCtaText` | ❌ No | Text for primary button |
| `primaryCtaLink` | ❌ No | URL for primary button |
| `secondaryCtaText` | ❌ No | Text for secondary button |
| `secondaryCtaLink` | ❌ No | URL for secondary button |

### Step 5: Verify

1. Save all files
2. The project will automatically appear in the portfolio carousel
3. Test the lightbox by clicking on the project image
4. Verify both language versions

---

## Updating Company Information

Company information is centralized in [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts).

### Edit Company Details

```typescript
export const COMPANY: CompanyInfo = {
    name: "Your Company Name",
    address: "Your Street Address",
    pobox: "P.O. Box 123",  // Leave empty if not used
    city: "CH-1000 Your City",
    phone: "+41 XX XXX XX XX",
    email: "contact@yourcompany.com",
    mapsUrl: "https://maps.google.com/?q=Your+Address",
    socials: {
        linkedin: "https://www.linkedin.com/company/yourcompany/",
        facebook: "https://facebook.com/yourcompany",
        instagram: "https://instagram.com/yourcompany",
        twitter: "https://twitter.com/yourcompany",
        github: "https://github.com/yourcompany",
    },
};
```

### Update Company Translations

**File:** [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

Update translatable company information:

```typescript
export const ui = {
    fr: {
        'business.name': 'Votre Entreprise',
        'business.tagline': 'Votre slogan ici',
        'business.description': 'Description de votre entreprise...',
        // ... more translations
    },
    de: {
        'business.name': 'Ihr Unternehmen',
        'business.tagline': 'Ihr Slogan hier',
        'business.description': 'Beschreibung Ihres Unternehmens...',
        // ... more translations
    },
};
```

---

## Managing Translations

### Translation Structure

All user-facing text is stored in [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts) and organized by category:

```typescript
export const ui = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.work': 'Nos Réalisations',
        
        // Business
        'business.name': 'Nom de l\'entreprise',
        'business.tagline': 'Slogan',
        
        // Team
        'team.title': 'Notre Équipe',
        'team.subtitle': 'Rencontrez les personnes derrière notre succès',
        
        // Employees
        'employee.JDU.title': 'Fondateur & CEO',
        'employee.JDU.bio': 'Biographie...',
        
        // Portfolio
        'portfolio.title': 'Nos Réalisations',
        
        // Contact
        'contact.title': 'Contactez-nous',
        // ... etc
    },
    de: {
        // Same keys, German translations
    },
};
```

### Adding a New Translation Key

1. **Add to all languages** with the same key:
   ```typescript
   fr: {
       'new.key': 'Texte français',
   },
   de: {
       'new.key': 'Deutscher Text',
   },
   ```

2. **Use in components:**
   ```astro
   ---
   import { useTranslations } from '@/i18n/utils';
   const t = useTranslations(Astro.currentLocale);
   ---
   
   <p>{t('new.key')}</p>
   ```

### Translation Categories

| Category | Prefix | Example |
|----------|--------|---------|
| Navigation | `nav.*` | `nav.home` |
| Business | `business.*` | `business.name` |
| Team | `team.*` | `team.title` |
| Employees | `employee.*` | `employee.JDU.title` |
| Portfolio | `portfolio.*` | `portfolio.title` |
| Contact | `contact.*` | `contact.title` |
| Site Meta | `site.*` | `site.title` |

---

## Best Practices

### Employee Management

✅ **Do:**
- Use consistent 3-letter trigrams (IDs)
- Add translations for all languages
- Optimize portrait images before adding
- Leave social fields empty if not used

❌ **Don't:**
- Use duplicate IDs
- Forget to add translations in all languages
- Use overly large portrait images

### Portfolio Management

✅ **Do:**
- Use consistent image sizes (800x600 recommended)
- Optimize images before importing
- Add projects to all language files
- Use `nanoid()` for unique IDs
- Test the lightbox functionality

❌ **Don't:**
- Use different projects in different languages
- Forget to import local images
- Use extremely large images (slow loading)

### Translation Management

✅ **Do:**
- Keep translation keys consistent across languages
- Use dot notation for organization
- Add comments for context
- Test all language versions

❌ **Don't:**
- Hardcode text in components
- Skip languages when adding new keys
- Use inconsistent naming conventions

---

## Quick Reference

### Adding an Employee
1. Add to `EMPLOYEES` in [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)
2. Add translations in [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts) (all languages)
3. Optionally add portrait image to `public/images/employees/`

### Adding a Portfolio Project
1. Add image to `src/assets/portfolio/` (if local)
2. Import image in [src/data/portfolio/fr.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/data/portfolio/fr.ts)
3. Add project object to `portfolioFr` array
4. Repeat for [src/data/portfolio/de.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/data/portfolio/de.ts) (and other languages)

### Updating Company Info
1. Edit `COMPANY` object in [src/consts.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/consts.ts)
2. Update translations in [src/i18n/ui.ts](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/i18n/ui.ts)

---

**Next Steps:**
- [Configure your site](CONFIGURATION.md)
- [Customize content and components](CUSTOMIZATION.md)
- [Add a new language](ADDING_LANGUAGES.md)
