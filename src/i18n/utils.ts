// src/i18n/utils.ts
import { ui, defaultLang, languages, type Language } from './ui';

/**
 * Get language from URL, with fallback to Astro.currentLocale
 * @param url - The URL object from Astro
 * @param currentLocale - Astro.currentLocale value
 */
export function getLangFromUrl(url: URL, currentLocale?: string): Language {
  // Prefer Astro's built-in locale detection
  if (currentLocale && currentLocale in ui) {
    return currentLocale as Language;
  }

  // Fallback: manual parsing (for edge cases)
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Get language metadata (name, flag)
 */
export function getLanguageData(lang: Language) {
  return languages[lang];
}

/**
 * Create a translation function for the given language
 */
export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
