/**
 * English Portfolio Content
 */

import type { PortfolioProject } from "./fr";
import alpinaSport from "../../assets/portfolio/liberer-le-mouton-heimvin.jpg";
import jurisLeman from "../../assets/portfolio/wall-e-guide-typographe-suisse-heimvin.png";
import hotelBellerive from "../../assets/images/fallback-image.png";

export const portfolioEn: PortfolioProject[] = [
    {
        id: "alpina-sport-ecommerce",
        title: "E-commerce Relaunch — Alpina Sport",
        description:
            "A new online store for Swiss sports brand Alpina Sport: a redesigned purchase journey, TWINT payments and a measurable lift in conversions from the first quarter.",
        image: alpinaSport,
    },
    {
        id: "juris-leman-website",
        title: "Website — Juris Léman Law Firm",
        description:
            "A multilingual corporate website for a Geneva law firm: practice areas, partner profiles and online appointment booking.",
        image: jurisLeman,
    },
    {
        id: "hotel-bellerive-booking",
        title: "Online Booking — Hôtel Bellerive",
        description:
            "A booking site for a boutique hotel in Montreux: an immersive gallery, real-time availability and instant confirmation — in three languages.",
        image: hotelBellerive,
    },
];
