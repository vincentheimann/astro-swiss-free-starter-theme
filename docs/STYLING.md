# Styling Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Styling Architecture](#styling-architecture)
- [Design Tokens](#design-tokens)
- [Theme System](#theme-system)
- [Customizing Colors](#customizing-colors)
- [Typography](#typography)
- [Shadows & Effects](#shadows--effects)
- [Tailwind CSS Integration](#tailwind-css-integration)
- [Best Practices](#best-practices)

## Styling Architecture

The theme uses a layered CSS architecture for maximum flexibility:

```
global.css (entry point)
├── starwind.css        ← Starwind UI component styles
├── tokens.css          ← Design tokens (colors, spacing, shadows)
├── themes/
│   ├── light.css      ← Light mode overrides
│   └── dark.css       ← Dark mode overrides
└── utilities.css       ← Custom utility classes
```

**Import order matters!** This cascade ensures:
1. Starwind provides base component styles
2. Tokens define your brand identity
3. Themes adapt tokens for light/dark modes
4. Utilities add project-specific helpers

### Global CSS

**File:** [src/styles/global.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/global.css)

```css
@import "./starwind.css";
@import "./tokens.css";
@import "./themes/dark.css";
@import "./themes/light.css";
@import "./utilities.css";
```

---

## Design Tokens

**File:** [src/styles/tokens.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/tokens.css)

Design tokens are CSS variables that define your brand's visual identity.

### Brand Colors

```css
:root {
  /* Primary accent color */
  --accent: #fc4a1a;
  --accent-dark: #f7b733;
  --accent-rgb: 252, 74, 26;
  
  /* Secondary color */
  --secondary: #FFB36B;
}
```

**Usage:**
```css
.button {
  background: var(--accent);
  color: var(--primary-foreground);
}
```

### Neutral Colors

Defined as RGB values for flexibility with opacity:

```css
:root {
  --black: 15, 18, 25;
  --gray: 96, 115, 159;
  --gray-light: 229, 233, 240;
  --gray-dark: 34, 41, 57;
}
```

**Usage with opacity:**
```css
.overlay {
  background: rgba(var(--black), 0.5);  /* 50% opacity */
}
```

### Semantic Tokens

Semantic tokens provide meaning-based naming:

```css
:root {
  /* Text colors */
  --color-text-primary: rgb(var(--black));
  --color-text-secondary: rgb(var(--gray-dark));
  --color-text-muted: rgb(var(--gray));
  
  /* Background colors */
  --color-bg-primary: var(--background);
  --color-bg-secondary: rgba(0, 0, 0, 0.03);
  --color-bg-tertiary: rgba(0, 0, 0, 0.05);
  
  /* Borders */
  --color-border: rgba(0, 0, 0, 0.12);
  --color-border-light: rgba(0, 0, 0, 0.08);
}
```

### Starwind Component Tokens

These tokens are used by Starwind components:

```css
:root {
  --background: #ffffff;
  --foreground: #0f1219;
  --card: #ffffff;
  --card-foreground: #0f1219;
  --primary: var(--accent);
  --primary-foreground: #ffffff;
  --muted: rgb(246, 247, 249);
  --border: rgb(229, 233, 240);
  --radius: 0.75rem;
}
```

### State Colors

```css
:root {
  --info: #7dd3fc;
  --info-foreground: #082f49;
  --success: #86efac;
  --success-foreground: #052e16;
  --warning: #fcd34d;
  --warning-foreground: #451a03;
  --error: #ef4444;
  --error-foreground: #ffffff;
}
```

---

## Theme System

The theme supports automatic light/dark mode switching based on user preference.

### Light Theme

**File:** [src/styles/themes/light.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/themes/light.css)

Applied when `data-theme="light"` is set:

```css
[data-theme="light"] {
  --accent: #FF7A1A;
  --background: #ffffff;
  --foreground: #0f1219;
  --card: #ffffff;
  /* ... more overrides */
}
```

### Dark Theme

**File:** [src/styles/themes/dark.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/themes/dark.css)

Applied when `data-theme="dark"` or `.dark` class is set:

```css
[data-theme="dark"],
.dark {
  --accent: #f7b733;
  --background: #050505;
  --foreground: rgb(243, 244, 246);
  --card: rgba(255, 255, 255, 0.04);  /* Translucent */
  /* ... more overrides */
}
```

### Theme Initialization

The [BaseLayout.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro) includes an inline script to prevent FOUC (Flash of Unstyled Content):

```javascript
const isDark =
  localStorage.theme === "dark" ||
  (!(("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.toggle("dark", isDark);
document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
```

This runs before page render to apply the correct theme immediately.

### Theme Toggle Component

The [ThemeToggle.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/components/ThemeToggle.astro) component allows users to switch themes manually.

---

## Customizing Colors

### Changing Brand Colors

Edit [src/styles/tokens.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/tokens.css):

```css
:root {
  /* Change your primary brand color */
  --accent: #3b82f6;  /* Blue instead of orange */
  --accent-rgb: 59, 130, 246;
  
  /* Change secondary color */
  --secondary: #8b5cf6;  /* Purple */
}
```

### Per-Theme Color Adjustments

For different colors in light vs. dark mode:

**Light theme:**
```css
[data-theme="light"] {
  --accent: #3b82f6;  /* Bright blue */
}
```

**Dark theme:**
```css
[data-theme="dark"] {
  --accent: #60a5fa;  /* Lighter blue for dark backgrounds */
}
```

### Creating Color Variants

Add new color tokens:

```css
:root {
  --brand-purple: #8b5cf6;
  --brand-green: #10b981;
  --brand-pink: #ec4899;
}
```

Use in components:

```css
.special-button {
  background: var(--brand-purple);
}
```

---

## Typography

### Font Family

**File:** [src/styles/global.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/global.css)

The theme uses Poppins font:

```css
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf") format("ttf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1.7;
}
```

### Changing Fonts

1. Add font files to `public/fonts/`
2. Update `@font-face` declarations
3. Change `body` font-family

**Example - Using Inter:**

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

body {
  font-family: "Inter", system-ui, sans-serif;
}
```

### Typography Scale

Add custom font size tokens:

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}
```

---

## Shadows & Effects

### Shadow Tokens

Defined in [tokens.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/tokens.css):

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 15px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 25px rgba(0, 0, 0, 0.16);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.2);
}
```

Dark mode uses heavier shadows for better depth perception:

```css
[data-theme="dark"] {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.18);
  --shadow-md: 0 6px 14px rgba(0, 0, 0, 0.28);
  --shadow-lg: 0 10px 28px rgba(0, 0, 0, 0.35);
  /* ... */
}
```

### Border Radius

```css
:root {
  --radius: 0.75rem;  /* 12px */
}
```

Tailwind also provides radius utilities: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`.

---

## Tailwind CSS Integration

The theme uses **Tailwind CSS v4** with CSS variables for theming.

### Using Tailwind Utilities

```astro
<div class="p-4 bg-primary text-primary-foreground rounded-lg shadow-md">
  Styled with Tailwind
</div>
```

### Extending Tailwind

Tailwind v4 uses `@theme` directive in CSS. Edit [src/styles/starwind.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/starwind.css) to extend:

```css
@theme inline {
  --color-brand: var(--accent);
  --spacing-huge: 5rem;
}
```

Use in HTML:

```html
<div class="bg-brand p-huge">Custom utilities</div>
```

### Combining with CSS Variables

```css
.custom-component {
  background: var(--accent);
  @apply p-4 rounded-lg shadow-md;
}
```

---

## Utilities

**File:** [src/styles/utilities.css](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/styles/utilities.css)

Custom utility classes for common patterns:

### Card Surface

```css
.card-surface {
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-md);
  backdrop-filter: saturate(140%) blur(6px);
}
```

**Usage:**
```html
<div class="card-surface p-6">
  Beautiful card with glassmorphism effect
</div>
```

### Elevation Utilities

```css
.elevate-lg { box-shadow: var(--shadow-lg); }
.elevate-xl { box-shadow: var(--shadow-xl); }
.elevate-2xl { box-shadow: var(--shadow-2xl); }
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  /* ... hides visually but keeps accessible */
}
```

---

## Best Practices

### ✅ Do

- **Use CSS variables** for all colors and spacing
- **Define tokens first**, then use them in components
- **Test both themes** when changing colors
- **Use semantic naming** (`--color-text-primary` not `--dark-gray`)
- **Leverage Tailwind** for layout and spacing
- **Keep utilities focused** on reusable patterns

### ❌ Don't

- **Hardcode colors** in components
- **Skip theme testing** - always check light and dark modes
- **Override Starwind styles directly** - use tokens instead
- **Create too many utilities** - use Tailwind when possible
- **Forget accessibility** - maintain sufficient color contrast

### Color Contrast

Ensure WCAG AA compliance (4.5:1 for normal text):

```css
/* Good - high contrast */
--foreground: #0f1219;
--background: #ffffff;

/* Bad - low contrast */
--foreground: #cccccc;
--background: #ffffff;
```

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify.

### Performance

- **Use `font-display: swap`** to prevent FOUT
- **Minimize custom fonts** - stick to 2-3 weights max
- **Leverage CSS variables** for runtime theming without JS
- **Use `backdrop-filter` sparingly** - it's GPU-intensive

---

## Quick Reference

| What to Customize | File | Variable |
|-------------------|------|----------|
| Primary brand color | `tokens.css` | `--accent` |
| Secondary color | `tokens.css` | `--secondary` |
| Background color | `themes/light.css` or `dark.css` | `--background` |
| Text color | `themes/light.css` or `dark.css` | `--foreground` |
| Border radius | `tokens.css` | `--radius` |
| Shadows | `tokens.css` | `--shadow-*` |
| Font family | `global.css` | `font-family` in `body` |
| Font size | `global.css` | `font-size` in `body` |

---

**Next Steps:**
- [Customize content and components](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CUSTOMIZATION.md)
- [Configure your site](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CONFIGURATION.md)
- [Deploy to production](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/DEPLOYMENT.md)
