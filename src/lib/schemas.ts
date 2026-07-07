// src/lib/schemas.ts

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://happycore.com";
const BRAND = import.meta.env.VITE_BRAND_NAME || "Happycore";

// Coordonnées géographiques
export const MARRAKECH = {
  name: "Marrakech",
  latitude: 31.6295,
  longitude: -7.9811,
  address: {
    streetAddress: "Médina de Marrakech",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    postalCode: "40000",
    addressCountry: "MA",
  },
};

export const ESSAOUIRA = {
  name: "Essaouira",
  latitude: 31.5085,
  longitude: -9.7595,
  address: {
    streetAddress: "Médina d'Essaouira",
    addressLocality: "Essaouira",
    addressRegion: "Marrakech-Safi",
    postalCode: "44000",
    addressCountry: "MA",
  },
};

/**
 * Schéma Organization (pour toute l'entreprise)
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`, // à remplacer par ton vrai logo
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-600-000000", // à adapter
      contactType: "customer service",
      availableLanguage: ["French", "English", "Arabic"],
    },
    sameAs: [
      "https://www.instagram.com/happycore", // à adapter
      "https://www.facebook.com/happycore",
    ],
  };
}

/**
 * Schéma LocalBusiness (pour la page d'accueil)
 */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BRAND,
    description: "Agence de voyages stratégiques et culturels au Maroc",
    url: SITE_URL,
    telephone: "+212-600-000000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Médina de Marrakech",
      addressLocality: "Marrakech",
      addressRegion: "Marrakech-Safi",
      postalCode: "40000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: MARRAKECH.latitude,
      longitude: MARRAKECH.longitude,
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    priceRange: "€€€",
  };
}

/**
 * Schéma Place (pour une destination)
 */
export function buildPlaceSchema(
  place: typeof MARRAKECH | typeof ESSAOUIRA,
  description?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: place.name,
    description: description || `Découvrez ${place.name} avec Happycore.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: place.address.streetAddress,
      addressLocality: place.address.addressLocality,
      addressRegion: place.address.addressRegion,
      postalCode: place.address.postalCode,
      addressCountry: place.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: place.latitude,
      longitude: place.longitude,
    },
  };
}

/**
 * Schéma TouristAttraction (pour une expérience spécifique)
 */
export function buildTouristAttractionSchema(
  name: string,
  description: string,
  place: typeof MARRAKECH | typeof ESSAOUIRA,
  image?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: name,
    description: description,
    image: image || "https://images.pexels.com/.../default.jpg",
    location: {
      "@type": "Place",
      name: place.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: place.latitude,
        longitude: place.longitude,
      },
    },
  };
}

/**
 * Schéma Service (pour une offre Executive par exemple)
 */
export function buildServiceSchema(
  name: string,
  description: string,
  provider: string = BRAND,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    serviceType: "Travel service",
    areaServed: {
      "@type": "Place",
      name: "Maroc",
    },
  };
}
