/**
 * English Portfolio Content
 */

import { nanoid } from "nanoid";
import type { PortfolioProject } from "./fr";
import libererLeMouton from "../../assets/portfolio/liberer-le-mouton-heimvin.jpg";
import guideTypographeSuisse from "../../assets/portfolio/wall-e-guide-typographe-suisse-heimvin.png";

export const portfolioEn: PortfolioProject[] = [
    {
        id: nanoid(),
        title: "Project Alpha",
        description: "A modern web application built with cutting-edge technologies",
        image: "https://placehold.co/800x600/3b82f6/white?text=Project+1",
        primaryCtaText: "Case study →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
        secondaryCtaText: "Visit the site",
        secondaryCtaLink: "https://heimvin.me/",
    },
    {
        id: nanoid(),
        title: "Project Beta",
        description: "An innovative solution to streamline business processes",
        image: "https://placehold.co/800x600/10b981/white?text=Project+2",
        primaryCtaText: "Case study →",
        primaryCtaLink: "https://www.linkedin.com/in/vincentheimann/",
    },
    {
        id: nanoid(),
        title: "Project Gamma",
        description: "A creative design showcase with interactive elements",
        image: "https://placehold.co/800x600/f59e0b/white?text=Project+3",
    },
    {
        id: nanoid(),
        title: "Libérer le mouton",
        description: "“Libérer le mouton” (free the sheep) is an invented expression that playfully twists the story of the part that released the guillotine blade (called \"le mouton\"). It can be used, for example, to end a meeting that drags on.\n\nAn elegant way to cut things short without explaining yourself.",
        image: libererLeMouton,
        primaryCtaText: "View on LinkedIn  →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_lib%C3%A9rer-le-mouton-vous-ne-connaissez-activity-7358094728673783809-iFH5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
    {
        id: nanoid(),
        title: "The Swiss Typographer's Guide",
        description: "On Swiss keyboards, the curly apostrophe is not directly available. Its presence in a text often betrays the intervention of ChatGPT.\n\nThat little glyph becomes the telltale detail. 💡",
        image: guideTypographeSuisse,
        primaryCtaText: "View on LinkedIn  →",
        primaryCtaLink: "https://www.linkedin.com/posts/vincentheimann_sur-les-claviers-suisses-et-une-bonne-partie-activity-7376171239289278464-o1Bg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA2iI9gBVa0NYdOmz89bgUkkgm_MfKLlm1Q",
        secondaryCtaText: "",
        secondaryCtaLink: "#",
    },
];
