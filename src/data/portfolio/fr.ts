/**
 * French Portfolio Content
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

export const portfolioFr: PortfolioProject[] = [
    {
        id: nanoid(),
        title: "Projet Alpha",
        description: "Une application web moderne construite avec des technologies de pointe",
        image: "https://placehold.co/800x600/3b82f6/white?text=Projet+1",
        primaryCtaText: "Étude de cas →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
        secondaryCtaText: "Voir le site",
        secondaryCtaLink: "https://heimvin.me/",
    },
    {
        id: nanoid(),
        title: "Projet Beta",
        description: "Solution innovante pour rationaliser les processus métier",
        image: "https://placehold.co/800x600/10b981/white?text=Projet+2",
        primaryCtaText: "Étude de cas →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
    },
    {
        id: nanoid(),
        title: "Projet Gamma",
        description: "Vitrine de design créatif avec des éléments interactifs",
        image: "https://placehold.co/800x600/f59e0b/white?text=Projet+3",
    },
    {
        id: nanoid(),
        title: "Libérer le mouton",
        description: "« Libérer le mouton » est une expression inventée qui détourne l’histoire de la pièce qui lâchait la lame de la guillotine (appellée \"le mouton\"). On l'utilise, par exemple, pour mettre fin à une réunion qui traîne.\n\nUne façon élégante d’abréger sans s’expliquer.",
        image: libererLeMouton,
        primaryCtaText: "Voir sur LinkedIn  →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_lib%C3%A9rer-le-mouton-vous-ne-connaissez-activity-7358094728673783809-iFH5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
    {
        id: nanoid(),
        title: "Guide du typographe suisse",
        description: "Sur les claviers suisses, l’apostrophe courbe n’est pas disponible directement. Sa présence dans un texte trahit souvent l’intervention de ChatGPT.\n\nCe petit signe devient le détail révélateur. 💡",
        image: guideTypographeSuisse,
        primaryCtaText: "Voir sur LinkedIn  →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_sur-les-claviers-suisses-et-une-bonne-partie-activity-7376171239289278464-o1Bg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
];

