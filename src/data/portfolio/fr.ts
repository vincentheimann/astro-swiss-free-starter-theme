/**
 * French Portfolio Content
 */

import type { ImageMetadata } from "astro";
import alpinaSport from "../../assets/portfolio/liberer-le-mouton-heimvin.jpg";
import jurisLeman from "../../assets/portfolio/wall-e-guide-typographe-suisse-heimvin.png";
import hotelBellerive from "../../assets/images/fallback-image.png";

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
        id: "alpina-sport-ecommerce",
        title: "Refonte e-commerce — Alpina Sport",
        description:
            "Nouvelle boutique en ligne pour la marque suisse d'articles de sport Alpina Sport : parcours d'achat repensé, paiement TWINT et une hausse mesurable des conversions dès le premier trimestre.",
        image: alpinaSport,
    },
    {
        id: "juris-leman-website",
        title: "Site vitrine — Étude Juris Léman",
        description:
            "Site institutionnel multilingue pour une étude d'avocats genevoise : domaines de compétence, profils des associés et prise de rendez-vous en ligne.",
        image: jurisLeman,
    },
    {
        id: "hotel-bellerive-booking",
        title: "Réservation en ligne — Hôtel Bellerive",
        description:
            "Site de réservation pour un hôtel de charme à Montreux : galerie immersive, disponibilités en temps réel et confirmation instantanée, en trois langues.",
        image: hotelBellerive,
    },
];
