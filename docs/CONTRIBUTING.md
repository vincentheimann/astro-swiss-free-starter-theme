# Contributing Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Code Style & Conventions](#code-style--conventions)
- [Component Development](#component-development)
- [Adding Features](#adding-features)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## Development Setup

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git**

### Getting Started

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/vincentheimann/astro-swiss-free-starter-theme.git
   cd astro-swiss-starter-theme
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:4321`

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Run TypeScript type checking |

---

## Project Structure

```
astro-swiss-starter-theme/
├── docs/                    # Documentation
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, media
│   ├── components/         # Astro components
│   │   ├── *.astro        # Custom components
│   │   └── starwind/      # Starwind UI components
│   ├── i18n/              # Internationalization
│   │   ├── ui.ts         # Translations
│   │   └── utils.ts      # i18n utilities
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes (file-based)
│   ├── styles/            # CSS files
│   │   ├── tokens.css    # Design tokens
│   │   ├── themes/       # Light/dark themes
│   │   └── utilities.css # Custom utilities
│   ├── consts.ts         # Global constants
│   └── middleware.ts     # Language detection
├── astro.config.mjs       # Astro configuration
├── starwind.config.json   # Starwind configuration
└── package.json
```

---

## Code Style & Conventions

### File Naming

- **Components:** PascalCase - `Header.astro`, `ThemeToggle.astro`
- **Pages:** kebab-case - `about-us.astro`, `contact.astro`
- **Utilities:** camelCase - `utils.ts`, `helpers.ts`
- **Styles:** kebab-case - `global.css`, `tokens.css`

### TypeScript

Always use TypeScript for type safety:

```astro
---
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

const { title, description, variant = 'primary' } = Astro.props;
---
```

### Component Props

- Define interfaces for all component props
- Provide default values where appropriate
- Use optional props (`?`) for non-required fields
- Document complex props with JSDoc comments

```typescript
interface Props {
  /** The main heading text */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
}
```

### CSS Conventions

1. **Use CSS variables** for all colors and spacing:
   ```css
   .component {
     background: var(--card);
     color: var(--card-foreground);
     padding: var(--spacing-4);
   }
   ```

2. **Prefer Tailwind utilities** for layout:
   ```html
   <div class="flex items-center gap-4 p-6">
   ```

3. **Scoped styles** for component-specific CSS:
   ```astro
   <style>
     .custom-component {
       /* Scoped to this component */
     }
   </style>
   ```

4. **Theme-aware styles:**
   ```css
   .element {
     background: var(--background);
   }
   
   [data-theme="dark"] .element {
     /* Dark mode override if needed */
   }
   ```

---

## Component Development

### Creating a New Component

1. **Create the component file:**
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
     {icon && <img src={icon} alt="" class="feature-icon" />}
     <h3>{title}</h3>
     <p>{description}</p>
   </div>
   
   <style>
     .feature {
       padding: 2rem;
       border-radius: var(--radius);
       background: var(--card);
     }
     
     .feature-icon {
       width: 3rem;
       height: 3rem;
     }
   </style>
   ```

2. **Use the component:**
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

### Component Best Practices

- ✅ Keep components focused and single-purpose
- ✅ Use semantic HTML elements
- ✅ Provide accessible markup (ARIA labels, alt text)
- ✅ Support both light and dark themes
- ✅ Make components responsive by default
- ✅ Use TypeScript interfaces for props
- ❌ Don't hardcode colors or spacing
- ❌ Don't create overly complex components

---

## Adding Features

### Adding a New Page

1. **Create page file:**
   ```astro
   ---
   // src/pages/about.astro
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import Header from '@/components/Header.astro';
   import { useTranslations } from '@/i18n/utils';
   
   const t = useTranslations(Astro.currentLocale);
   ---
   
   <BaseLayout title={t('about.title')}>
     <Header />
     <main>
       <h1>{t('about.heading')}</h1>
       <p>{t('about.content')}</p>
     </main>
   </BaseLayout>
   ```

2. **Add translations:**
   ```typescript
   // src/i18n/ui.ts
   export const ui = {
     fr: {
       'about.title': 'À Propos',
       'about.heading': 'Notre Histoire',
       'about.content': '...',
     },
     de: {
       'about.title': 'Über Uns',
       'about.heading': 'Unsere Geschichte',
       'about.content': '...',
     },
   };
   ```

3. **Create language versions:**
   ```
   src/pages/
   ├── about.astro        # French (default)
   └── de/
       └── about.astro    # German
   ```

### Adding a New Language

Follow the [ADDING_LANGUAGES.md](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/ADDING_LANGUAGES.md) guide.

### Adding Starwind Components

```bash
npx starwind add [component-name]
```

This automatically:
- Installs the component in `src/components/starwind/`
- Updates `starwind.config.json`

---

## Testing

### Manual Testing

Before submitting a PR, test:

1. **Both themes:**
   - Toggle between light and dark mode
   - Verify colors and contrast

2. **All languages:**
   - Test each language route
   - Verify translations display correctly

3. **Responsive design:**
   - Test on mobile, tablet, desktop
   - Check navigation, forms, images

4. **Build:**
   ```bash
   npm run build
   npm run preview
   ```

### Type Checking

Run TypeScript checks:

```bash
npm run astro check
```

Fix any type errors before submitting.

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

---

## Pull Request Process

### Before Submitting

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Follow code style conventions
   - Add/update documentation if needed
   - Test thoroughly

3. **Commit with clear messages:**
   ```bash
   git commit -m "feat: add new feature X"
   git commit -m "fix: resolve issue with Y"
   git commit -m "docs: update configuration guide"
   ```

### Commit Message Format

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Submitting the PR

1. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request on GitHub:**
   - Provide clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - List what was tested

3. **PR Template:**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactoring
   
   ## Testing
   - [ ] Tested in light mode
   - [ ] Tested in dark mode
   - [ ] Tested all languages
   - [ ] Tested responsive design
   - [ ] Build succeeds
   
   ## Screenshots
   (If applicable)
   ```

### Review Process

- Maintainers will review your PR
- Address any feedback or requested changes
- Once approved, your PR will be merged

---

## Issue Reporting

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

### Feature Requests

Include:
- Clear description of the feature
- Use case / problem it solves
- Proposed implementation (optional)

---

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

---

## Questions?

- Check the [documentation](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/README.md)
- Open an issue for questions
- Join the [Astro Discord](https://astro.build/chat)

---

**Thank you for contributing!** 🎉
