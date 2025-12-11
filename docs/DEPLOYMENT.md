# Deployment Guide

← [Back to README](../README.md) | [Getting Started](GETTING_STARTED.md) | [All Docs](../README.md#-full-documentation)

---

## Table of Contents

- [Building for Production](#building-for-production)
- [Deployment Platforms](#deployment-platforms)
- [Environment Variables](#environment-variables)
- [SEO Optimization](#seo-optimization)
- [Performance Optimization](#performance-optimization)

## Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Build Locally

Before deploying, test your production build:

```bash
npm run preview
```

Visit `http://localhost:4321` to preview the built site.

### Build Output

The build process:
1. ✅ Compiles TypeScript to JavaScript
2. ✅ Optimizes and bundles CSS
3. ✅ Minifies HTML
4. ✅ Optimizes images
5. ✅ Generates static routes for all languages
6. ✅ Creates sitemap (if configured)

**Output structure:**
```
dist/
├── index.html           # French homepage (default locale)
├── de/
│   └── index.html      # German homepage
├── _astro/             # Bundled CSS and JS
├── fonts/              # Font files
└── favicon.svg
```

---

## Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment for Astro
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs

**Deploy Steps:**

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Or connect via GitHub**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Astro and configures build settings
   - Click "Deploy"

**Build Settings:**
- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Netlify

**Deploy Steps:**

1. **Create `netlify.toml`** in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Or connect via GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Import your repository
   - Build settings are auto-detected from `netlify.toml`

### Cloudflare Pages

**Deploy Steps:**

1. **Via Dashboard**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Connect your GitHub repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output:** `dist`
     - **Framework preset:** Astro

2. **Via Wrangler CLI**:
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist
   ```

### GitHub Pages

**Setup:**

1. **Install Astro adapter**:
   ```bash
   npm install @astrojs/github-pages
   ```

2. **Update `astro.config.mjs`**:
   ```javascript
   import { defineConfig } from 'astro/config';
   
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/repo-name',
   });
   ```

3. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. **Enable GitHub Pages** in repository settings:
   - Source: `gh-pages` branch

### Static Hosting (Any Provider)

For providers like AWS S3, DigitalOcean Spaces, or traditional web hosts:

1. Build the site: `npm run build`
2. Upload the `dist/` folder contents to your hosting
3. Configure your web server to serve `index.html` for all routes

**Example Nginx config:**
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /var/www/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## Environment Variables

### Public Variables

Variables prefixed with `PUBLIC_` are available in client-side code.

**Create `.env` file:**
```bash
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Use in components:**
```astro
---
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
---

<meta property="og:url" content={siteUrl} />
```

### Private Variables

Variables without `PUBLIC_` prefix are only available server-side.

```bash
API_KEY=secret-key-here
DATABASE_URL=postgres://...
```

**Use in server-side code:**
```astro
---
const apiKey = import.meta.env.API_KEY;
// Only available during build, not in browser
---
```

### Platform-Specific Setup

**Vercel:**
- Add variables in Project Settings → Environment Variables

**Netlify:**
- Add variables in Site Settings → Environment Variables

**Cloudflare Pages:**
- Add variables in Settings → Environment Variables

> [!IMPORTANT]
> Never commit `.env` files to version control. Add `.env` to `.gitignore`.

---

## SEO Optimization

### Sitemap

> [!NOTE]
> Automatic sitemap generation is available in the [premium version](https://astroswiss.com). For the free version, you can manually create a sitemap or use the Astro sitemap integration.

**To add sitemap integration (optional):**

```bash
npx astro add sitemap
```

**Update `astro.config.mjs`:**
```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
});
```

This generates `sitemap.xml` automatically during build.

### Robots.txt

**Create `public/robots.txt`:**
```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Meta Tags

The [BaseLayout.astro](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/src/layouts/BaseLayout.astro) includes essential meta tags:

- ✅ Title and description
- ✅ Open Graph tags
- ✅ Language attribute
- ✅ Viewport meta tag

**Customize per page:**
```astro
<BaseLayout 
  title="Custom Page Title | Your Brand"
  description="Specific page description for SEO"
>
  <!-- Content -->
</BaseLayout>
```

### Structured Data

Add JSON-LD structured data for better search results:

```astro
---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Business Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png"
};
---

<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

---

## Performance Optimization

### Image Optimization

Use Astro's built-in `<Image>` component:

```astro
---
import { Image } from 'astro:assets';
import hero from '@/assets/hero.jpg';
---

<Image 
  src={hero} 
  alt="Hero image" 
  width={1200} 
  height={600}
  loading="lazy"
/>
```

Benefits:
- Automatic format conversion (WebP, AVIF)
- Responsive image generation
- Lazy loading
- Size optimization

### Font Loading

The theme uses `font-display: swap` to prevent FOUT:

```css
@font-face {
  font-family: "Poppins";
  src: url("/fonts/Poppins-Regular.ttf") format("ttf");
  font-display: swap;  /* Show fallback font while loading */
}
```

### CSS Optimization

- ✅ CSS is automatically minified during build
- ✅ Critical CSS is inlined
- ✅ Unused CSS is removed (via Tailwind purge)

### JavaScript Optimization

Astro ships zero JavaScript by default. Only interactive components include JS:

```astro
<script>
  // This JS is bundled and minified automatically
  document.getElementById('button').addEventListener('click', () => {
    console.log('Clicked!');
  });
</script>
```

### Lighthouse Score Tips

1. **Optimize images** - Use WebP/AVIF formats
2. **Minimize fonts** - Load only needed weights
3. **Enable compression** - Gzip/Brotli on server
4. **Use CDN** - Serve assets from edge locations
5. **Lazy load** - Defer non-critical resources

**Target scores:**
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### Cloudflare Pages

1. Go to Custom Domains
2. Add domain
3. Update DNS records (automatic if using Cloudflare DNS)

---

## Monitoring & Analytics

> [!NOTE]
> Advanced analytics integration with Google Tag Manager is available in the [premium version](https://astroswiss.com). For the free version, you can manually add analytics.

### Google Analytics (Manual Integration)

**Add to `.env`:**
```bash
PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Add to `BaseLayout.astro`:**
```astro
---
const gaId = import.meta.env.PUBLIC_GA_ID;
---

{gaId && (
  <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
  <script is:inline define:vars={{ gaId }}>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId);
  </script>
)}
```

### Plausible Analytics (Privacy-Friendly Alternative)

```astro
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18.x or higher
```

**Clear cache and rebuild:**
```bash
rm -rf node_modules dist .astro
npm install
npm run build
```

### 404 Errors on Deployment

Ensure your hosting is configured for SPA-style routing:
- Vercel/Netlify: Auto-configured
- Others: Configure server to serve `index.html` for all routes

### Slow Build Times

- Optimize images before adding to project
- Use `.astro` components instead of framework components
- Limit the number of pages generated

---

**Next Steps:**
- [Configure your site](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/CONFIGURATION.md)
- [Customize styling](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/STYLING.md)
- [Add new languages](file:///c:/Git/Astro%20Starter%20Theme%20Starwind%20i18n/astro-swiss-starter-theme/docs/ADDING_LANGUAGES.md)
