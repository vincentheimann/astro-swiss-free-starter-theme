/**
 * Portfolio Data - i18n Helper
 * Returns portfolio content based on the current language
 */

import type { Language } from "../../i18n/ui";
import { portfolioFr, type PortfolioProject } from "./fr";
import { portfolioDe } from "./de";

const portfolioData = {
    fr: portfolioFr,
    de: portfolioDe,
} as const;

/**
 * Get portfolio projects for a specific language
 * @param lang - The language code (fr, de)
 * @returns Array of portfolio projects in the specified language
 */
export function getPortfolio(lang: Language): PortfolioProject[] {
    return portfolioData[lang] || portfolioData.fr;
}

// Export the type for use in components
export type { PortfolioProject };
