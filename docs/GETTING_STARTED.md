# Getting Started

Welcome! Let's get your site running and customized in about 10 minutes.

---

## Install & Run (2 minutes)

```bash
# Clone the repository
git clone https://github.com/vincentheimann/astro-swiss-free-starter-theme.git
cd astro-swiss-starter-theme

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. You should see:

![Homepage in light mode](assets/homepage-light.png)
*Your site running with example content*

Try the dark mode toggle in the header:

![Homepage in dark mode](assets/dark-mode-toggle.webp)
*Automatic dark mode support*

---

## Before You Start - Important! ⚠️

**Update your site URL** in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://yoursite.com",  // ← Change this to YOUR domain
  // ...
});
```

This URL is used for:
- Canonical URLs and SEO
- RSS feeds (if you add them)
- Social sharing previews

> [!IMPORTANT]
> Don't skip this step! Using the placeholder URL will hurt your SEO.

---

## Make It Yours (8 minutes)

### 1. Update Your Company Info (3 minutes)

Open `src/consts.ts` and update:

```typescript
export const COMPANY: CompanyInfo = {
    name: "Your Company Name",           // ← Change this
    address: "Your Street Address",      // ← And this
    city: "CH-1000 Your City",          // ← And this
    phone: "+41 XX XXX XX XX",          // ← Your phone
    email: "contact@yourcompany.com",   // ← Your email
    // ... rest stays the same for now
};
```

Save and watch your browser update instantly!

### 2. Change Your Brand Colors (2 minutes)

Open `src/styles/tokens.css` and update the accent color:

```css
:root {
  --accent: #3b82f6;  /* Change to your brand color */
}
```

Try it! The theme will update immediately.

### 3. Update Site Name & Description (3 minutes)

Open `src/i18n/ui.ts` and find the `fr:` section (French):

```typescript
fr: {
  'business.name': 'Your Company Name',
  'business.tagline': 'Your tagline here',
  'site.title': 'Your Site Title',
  'site.description': 'Your site description for SEO',
  // ... more below
}
```

Do the same for the `de:` section (German) if you're using both languages.

---

## What You Just Built

You now have a **multilingual website** with:
- 🌍 French & German language support
- 🌓 Automatic dark/light mode
- 📱 Mobile-responsive design
- ⚡ Blazing-fast performance

---

## Next Steps - Pick Your Path

### Add Your Team
Want to add employees? → [Data Management Guide](DATA_MANAGEMENT.md#adding-an-employee)

### Add Your Work
Want to showcase projects? → [Data Management Guide](DATA_MANAGEMENT.md#adding-a-portfolio-project)

### Customize Design
Want to change colors, fonts, or styling? → [Styling Guide](STYLING.md)

### Add More Languages
Want to support more languages? → [Adding Languages](ADDING_LANGUAGES.md)

### Deploy Your Site
Ready to go live? → [Deployment Guide](DEPLOYMENT.md)

---

## Need Help?

- **All Documentation**: [README](../README.md#-documentation)
- **Astro Discord**: [astro.build/chat](https://astro.build/chat)
- **Issues**: [GitHub Issues](https://github.com/vincentheimann/astro-swiss-free-starter-theme/issues)

---

**Tip**: Keep the dev server running (`npm run dev`) while you make changes. Everything updates automatically!
