import { Helmet } from 'react-helmet-async';
import { LOCALES } from '../i18n/translations';

type SEOMeta = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
  publishedTime?: string;
  noindex?: boolean;
};

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://happycore.com';
const BRAND = import.meta.env.VITE_BRAND_NAME || 'Happycore';
const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/37441974/pexels-photo-37441974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200';

// Map locales to hreflang codes (ar -> ar-MA, fr -> fr-MA, en -> en)
const hreflangMap: Record<string, string> = {
  fr: 'fr-MA',
  en: 'en',
  ar: 'ar-MA'
};

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  keywords,
  publishedTime,
  noindex = false
}: SEOMeta) {
  const fullTitle = title.includes(BRAND) ? title : `${title} | ${BRAND}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Hreflang tags - tells search engines about language alternatives */}
      {LOCALES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={hreflangMap[l.code] || l.code}
          href={canonical ? `${SITE_URL}${canonical}` : SITE_URL}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={canonical ? `${SITE_URL}${canonical}` : SITE_URL}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ar_MA" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
