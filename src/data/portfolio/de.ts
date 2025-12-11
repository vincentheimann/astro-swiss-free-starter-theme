/**
 * German Portfolio Content
 */

import { nanoid } from "nanoid";
import type { ImageMetadata } from "astro";
import libererLeMouton from "../../assets/portfolio/liberer-le-mouton-heimvin.jpg";
import guideTypographeSuisse from "../../assets/portfolio/wall-e-guide-typographe-suisse-heimvin.png";

export interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    image: string | ImageMetadata;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export const portfolioDe: PortfolioProject[] = [
    {
        id: nanoid(),
        title: "Projekt Alpha",
        description: "Eine moderne Webanwendung mit modernsten Technologien",
        image: "https://placehold.co/800x600/3b82f6/white?text=Projekt+1",
        primaryCtaText: "Fallstudie →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
        secondaryCtaText: "Siehe Website",
        secondaryCtaLink: "https://heimvin.me/",
    },
    {
        id: nanoid(),
        title: "Projekt Beta",
        description: "Innovative Lösung zur Optimierung von Geschäftsprozessen",
        image: "https://placehold.co/800x600/10b981/white?text=Projekt+2",
        primaryCtaText: "Fallstudie →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
    },
    {
        id: nanoid(),
        title: "Projekt Gamma",
        description: "Kreatives Design-Showcase mit interaktiven Elementen",
        image: "https://placehold.co/800x600/f59e0b/white?text=Projekt+3",
    },
    {
        id: nanoid(),
        title: "Des Schaf befreien",
        description: "„Libérer le mouton“ („Des Schaf befreien“) ist ein erfundener Ausdruck, der sich auf die Geschichte des Teils (genannt „le mouton“) bezieht, das die Klinge der Guillotine auslöste. Man verwendet ihn beispielsweise, um eine sich in die Länge ziehende Besprechung zu beenden.\n\nEine elegante Art, etwas abzukürzen, ohne sich zu erklären.",
        image: libererLeMouton,
        primaryCtaText: "Auf LinkedIn ansehen →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_lib%C3%A9rer-le-mouton-vous-ne-connaissez-activity-7358094728673783809-iFH5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
    {
        id: nanoid(),
        title: "Leitfaden für Schweizer Typografen",
        description: "Auf Schweizer Tastaturen ist das geschwungene Apostroph nicht direkt verfügbar. Sein Vorkommen in einem Text verrät oft den Einsatz von ChatGPT. \n\nDieses kleine Zeichen wird zum verräterischen Detail. 💡",
        image: guideTypographeSuisse,
        primaryCtaText: "Auf LinkedIn ansehen →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_sur-les-claviers-suisses-et-une-bonne-partie-activity-7376171239289278464-o1Bg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
];

