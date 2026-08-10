/**
 * German Portfolio Content
 */

import type { PortfolioProject } from "./fr";
import alpinaSport from "../../assets/portfolio/alpina-sport-ecommerce.webp";
import jurisLeman from "../../assets/portfolio/juris-leman-website.webp";
import hotelBellerive from "../../assets/portfolio/hotel-bellerive-booking.webp";

export const portfolioDe: PortfolioProject[] = [
    {
        id: "alpina-sport-ecommerce",
        title: "E-Commerce-Relaunch — Alpina Sport",
        description:
            "Neuer Onlineshop für die Schweizer Sportmarke Alpina Sport: überarbeitete Customer Journey, TWINT-Zahlung und messbar mehr Conversions ab dem ersten Quartal.",
        image: alpinaSport,
    },
    {
        id: "juris-leman-website",
        title: "Website — Kanzlei Juris Léman",
        description:
            "Mehrsprachige Unternehmenswebsite für eine Genfer Anwaltskanzlei: Kompetenzbereiche, Profile der Partner und Online-Terminvereinbarung.",
        image: jurisLeman,
    },
    {
        id: "hotel-bellerive-booking",
        title: "Online-Buchung — Hotel Bellerive",
        description:
            "Buchungswebsite für ein Boutique-Hotel in Montreux: immersive Galerie, Verfügbarkeit in Echtzeit und sofortige Bestätigung — in drei Sprachen.",
        image: hotelBellerive,
    },
];
