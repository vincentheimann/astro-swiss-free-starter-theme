import { defineMiddleware } from "astro:middleware";
import { defaultLang, languages } from "./i18n/ui";

export const onRequest = defineMiddleware((context, next) => {
    // Astro's built-in i18n routing handles most cases
    // This middleware adds automatic locale detection for the root path

    const { url, currentLocale, redirect } = context;

    // If user visits root path and doesn't have a locale set
    if (url.pathname === "/" && !currentLocale) {
        // Get browser's preferred language
        const acceptLang = context.request.headers.get("accept-language");

        if (acceptLang) {
            // Simple parsing: get first language code (e.g., "de-DE,de;q=0.9" -> "de")
            const preferredLang = acceptLang.split(",")[0].split("-")[0].toLowerCase();

            // Check if preferred language is available (and not the default)
            if (preferredLang in languages && preferredLang !== defaultLang) {
                return redirect(`/${preferredLang}/`);
            }
        }
    }

    return next();
});
