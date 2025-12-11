// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
// NOTE: For translatable content, use src/i18n/ui.ts instead.

// ============================================================================
// Type Definitions
// ============================================================================

export interface SocialLinks {
    linkedin: string;
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
}

export interface CompanyInfo {
    name: string;
    address: string;
    pobox: string;
    city: string;
    phone: string;
    email: string;
    mapsUrl: string;
    socials: SocialLinks;
}

export interface EmployeeInfo {
    id: string;
    name: string;
    portrait: string; // Path to portrait image, can be empty
    email: string;
    phone: string;
    socials: SocialLinks;
}

// ============================================================================
// Company Information (all language-agnostic)
// ============================================================================

export const COMPANY: CompanyInfo = {
    name: "SwissDigital Agency",
    address: "Avenue de la Gare 15",
    pobox: "", // Leave empty if not used
    city: "CH-1003 Lausanne",
    phone: "+41 21 555 01 23",
    email: "contact@swissdigital.example",
    mapsUrl: "https://maps.google.com/?q=Avenue+de+la+Gare+15+1003+Lausanne",
    socials: {
        linkedin: "https://www.linkedin.com/company/example",
        facebook: "",
        instagram: "https://www.instagram.com/example",
        twitter: "",
        github: "",
    },
};

// ============================================================================
// Employees (language-agnostic data)
// Only title and bio are translated in src/i18n/ui.ts
// Use trigram IDs (e.g., JDU for Jean Dupont)
// ============================================================================

export const EMPLOYEES: Record<string, EmployeeInfo> = {
    SMA: {
        id: "SMA",
        name: "Sophie Martin",
        portrait: "", // Path to portrait image, leave empty if not available
        email: "sophie.martin@swissdigital.example",
        phone: "+41 21 555 01 24",
        socials: {
            linkedin: "https://www.linkedin.com/in/example",
            facebook: "",
            instagram: "",
            twitter: "",
            github: "",
        },
    },
    LDU: {
        id: "LDU",
        name: "Luc Dubois",
        portrait: "", // Path to portrait image, leave empty if not available
        email: "luc.dubois@swissdigital.example",
        phone: "+41 21 555 01 25",
        socials: {
            linkedin: "https://www.linkedin.com/in/example",
            facebook: "",
            instagram: "https://www.instagram.com/example",
            twitter: "",
            github: "",
        },
    },
    ABE: {
        id: "ABE",
        name: "Anna Berger",
        portrait: "", // Path to portrait image, leave empty if not available
        email: "anna.berger@swissdigital.example",
        phone: "+41 21 555 01 26",
        socials: {
            linkedin: "https://www.linkedin.com/in/example",
            facebook: "",
            instagram: "",
            twitter: "https://twitter.com/example",
            github: "",
        },
    },
    // Add more employees as needed:
    // ABC: {
    //     id: "ABC",
    //     name: "Another Employee",
    //     portrait: "/images/employees/employee.jpg",
    //     email: "employee@swissdigital.example",
    //     phone: "+41 21 555 01 27",
    //     socials: { ... },
    // },
};
