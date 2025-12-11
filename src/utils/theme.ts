// Theme types
export type Theme = 'light' | 'dark';

/**
 * Get the current theme from localStorage with fallback to system preference
 * Following Tailwind CSS v4 best practices
 */
export function getTheme(): Theme {
    if (typeof window === 'undefined') return 'light';

    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

/**
 * Set theme and persist to localStorage
 * Sets both .dark class and [data-theme] attribute for maximum compatibility
 */
export function setTheme(theme: Theme): void {
    if (typeof window === 'undefined') return;

    // Store preference
    localStorage.theme = theme;

    const isDark = theme === 'dark';

    // Apply both class and data-theme attribute
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
    const current = getTheme();
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

/**
 * Reset to system preference
 */
export function resetToSystemTheme(): void {
    if (typeof window === 'undefined') return;

    // Remove stored preference
    localStorage.removeItem('theme');

    // Apply system preference
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Initialize theme on page load
 * Sets up listener for system preference changes
 */
export function initTheme(): void {
    // Theme is already applied by inline script in <head>
    // This just sets up the system preference listener

    if (typeof window === 'undefined') return;

    // Only listen to system changes if user hasn't set a preference
    if (!('theme' in localStorage)) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            if (!('theme' in localStorage)) {
                const theme = e.matches ? 'dark' : 'light';
                document.documentElement.classList.toggle('dark', e.matches);
                document.documentElement.setAttribute('data-theme', theme);
            }
        });
    }
}
