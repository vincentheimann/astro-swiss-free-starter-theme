// Inline script to prevent FOUC (Flash of Unstyled Content)
// This runs synchronously in the <head> before page render

(function () {
    const STORAGE_KEY = 'theme';

    function getStoredTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch {
            return null;
        }
    }

    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    const stored = getStoredTheme();
    const theme = stored === 'system' ? getSystemTheme() : (stored || getSystemTheme());

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
})();
