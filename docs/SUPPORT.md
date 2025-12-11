# Support & Help

## Getting Support

Thank you for using the Astro Swiss Starter Theme! This is a free, open-source theme, and we're here to help you get the most out of it.

---

## What's Included in Support

### ✅ Covered by Support

- **Installation Help** - Assistance with setting up the theme
- **Configuration Questions** - Help with theme configuration and settings
- **Bug Fixes** - Resolution of any bugs or issues in the theme code
- **Documentation Clarification** - Explaining how features work
- **Update Assistance** - Help with updating to new versions
- **Best Practices** - Guidance on using the theme effectively

### ❌ Not Covered by Support

- **Custom Development** - Building new features or custom functionality
- **Third-Party Integrations** - Integrating with external services not documented
- **Hosting Issues** - Server configuration or hosting provider problems
- **Content Creation** - Writing content or creating images for your site
- **General Web Development** - Teaching HTML, CSS, JavaScript, or Astro basics
- **Customization Services** - Modifying the theme beyond configuration

> [!NOTE]
> If you need custom development or extensive customization, we can discuss this separately. Contact us for a quote.

---

## How to Get Support

### 1. Check the Documentation First

Before reaching out, please check our comprehensive documentation:

- **[Getting Started Guide](GETTING_STARTED.md)** - Installation and basic setup
- **[Data Management](DATA_MANAGEMENT.md)** - Adding content and data
- **[Styling Guide](STYLING.md)** - Customizing colors and design
- **[Customization Guide](CUSTOMIZATION.md)** - Advanced customization
- **[Configuration](CONFIGURATION.md)** - Configuration options
- **[Adding Languages](ADDING_LANGUAGES.md)** - Internationalization
- **[Deployment](DEPLOYMENT.md)** - Deploying your site
- **[Browser Support](BROWSER_SUPPORT.md)** - Browser compatibility

### 2. Check Common Issues (FAQ)

See the [FAQ section](#frequently-asked-questions) below for common questions and solutions.

### 3. Contact Support

If you can't find the answer in the documentation:

**Email Support**: hello@astroswiss.com

**GitHub Issues**: [Report bugs or request features](https://github.com/vincentheimann/astro-swiss-free-starter-theme/issues)

**Response Time**: Community-based support - we'll do our best to respond within a few days

**Support Type**: This is a free, open-source theme with community-based support

---

## When Contacting Support

To help us assist you quickly, please include:

1. **Theme Version** (check `package.json`)
2. **Detailed Description** of the issue
3. **Steps to Reproduce** the problem
4. **Screenshots or Error Messages** (if applicable)
5. **Browser and OS** you're using
6. **URL** of your site (if deployed)
7. **What you've already tried** to fix the issue

### Example Support Request

```
Subject: Issue with Dark Mode Toggle

Theme Version: 1.0.0
Browser: Chrome 120 on Windows 11

Description:
The dark mode toggle button doesn't switch themes when clicked.

Steps to Reproduce:
1. Navigate to homepage
2. Click the theme toggle button in header
3. Nothing happens

What I've tried:
- Cleared browser cache
- Tested in incognito mode
- Checked browser console for errors

Screenshot: [attached]
Site URL: https://mysite.com
```

---

## Frequently Asked Questions

### Installation & Setup

**Q: What are the system requirements?**
A: You need Node.js 18+ and npm. See [Getting Started](GETTING_STARTED.md) for details.

**Q: How do I install the theme?**
A: Extract the zip file, run `npm install`, then `npm run dev`. Full instructions in [Getting Started](GETTING_STARTED.md).

**Q: The build fails with errors. What should I do?**
A: Make sure you're using Node.js 18 or higher. Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Customization

**Q: How do I change the colors?**
A: Edit `src/styles/tokens.css` to change the color scheme. See [Styling Guide](STYLING.md).

**Q: How do I add my logo?**
A: Replace `src/assets/logo.svg` with your logo. See [Customization Guide](CUSTOMIZATION.md).

**Q: Can I add more languages?**
A: Yes! Follow the [Adding Languages Guide](ADDING_LANGUAGES.md).

**Q: How do I change the company information?**
A: Edit `src/consts.ts` to update company details. See [Data Management](DATA_MANAGEMENT.md).

### Content Management

**Q: How do I add portfolio projects?**
A: Add projects to `src/data/portfolio/fr.ts` and `de.ts`. See [Data Management](DATA_MANAGEMENT.md#adding-a-portfolio-project).

**Q: How do I add team members?**
A: Add employees to `src/consts.ts`. See [Data Management](DATA_MANAGEMENT.md#adding-an-employee).

**Q: How do I change the services?**
A: Edit translations in `src/i18n/ui.ts`. See [Data Management](DATA_MANAGEMENT.md).

### Deployment

**Q: How do I deploy my site?**
A: We recommend Netlify or Vercel. See [Deployment Guide](DEPLOYMENT.md) for step-by-step instructions.

**Q: My site works locally but not in production. Why?**
A: Check that your build completed successfully and that environment variables are set correctly.

**Q: How do I set up a custom domain?**
A: This depends on your hosting provider. See [Deployment Guide](DEPLOYMENT.md) for provider-specific instructions.

### Features

**Q: Does the contact form actually send emails?**
A: The form is a frontend template. You need to connect it to a backend service like Formspree, Netlify Forms, or your own API.

**Q: Is the theme SEO-friendly?**
A: Yes! It includes semantic HTML and meta tags. For advanced features like automatic sitemap generation and analytics integration, check out the [premium version](https://astroswiss.com).


### Technical Issues

**Q: Dark mode doesn't persist after page reload.**
A: This is usually a browser localStorage issue. Check your browser's privacy settings.

**Q: Images aren't loading.**
A: Make sure images are in `src/assets/` and imported correctly. Astro optimizes images at build time.

**Q: The language switcher doesn't work.**
A: Check that you have translations for all languages in `src/i18n/ui.ts`.

---

## Updates & Changelog

### Checking for Updates

Check the [CHANGELOG.md](../CHANGELOG.md) file for version history and updates.

### Updating the Theme

1. **Backup your customizations** (especially `consts.ts`, `ui.ts`, and custom components)
2. **Download the latest version** from GitHub releases
3. **Compare changes** using a diff tool (e.g., `git diff`)
4. **Merge your customizations** into the new version
5. **Test thoroughly** before deploying

> [!WARNING]
> Always backup your site before updating!

---

## Community Resources

### Astro Resources
- **[Astro Documentation](https://docs.astro.build)** - Official Astro docs
- **[Astro Discord](https://astro.build/chat)** - Community support

### Starwind Resources
- **[Starwind Documentation](https://starwind.dev)** - Component library docs

### Tailwind Resources
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Tailwind documentation

---

## Feedback & Feature Requests

We love hearing from our users! If you have:

- **Feature Requests** - Ideas for new features
- **Feedback** - Suggestions for improvements
- **Bug Reports** - Issues you've encountered

Please email us at: heimvin@gmail.com

---

## Show Your Support

If you find this theme useful, please consider:

- ⭐ **Star the repository** on [GitHub](https://github.com/vincentheimann/astro-swiss-free-starter-theme)
- 🐛 **Report issues** or suggest features
- 🤝 **Contribute** improvements or translations
- 📢 **Share** the project with others

Your support helps us improve and helps other developers discover this theme!

---

## Professional Services

Need custom development or extensive customization beyond the free theme?

- **Custom Development** - We offer professional development services
- **Theme Customization** - Tailored modifications for your specific needs
- **Premium Version** - Check out [astroswiss.com](https://astroswiss.com) for additional features

Contact us at hello@astroswiss.com for a consultation and quote.

---

**Last Updated**: December 10, 2024

Thank you for choosing the Astro Swiss Starter Theme! 🚀
