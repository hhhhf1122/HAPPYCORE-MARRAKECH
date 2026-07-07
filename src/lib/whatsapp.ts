import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '212600000000';

type MessagesByLocale = Record<string, string>;

const messages = {
  default: {
    fr: 'Bonjour Happycore, je souhaite être accompagné pour organiser mon voyage au Maroc.',
    en: 'Hello Happycore, I would like help organizing my trip to Morocco.',
    ar: 'مرحبًا هابيكور، أرغب في الحصول على مساعدة لتنظيم رحلتي إلى المغرب.'
  } as MessagesByLocale,
  sisterhood: {
    fr: 'Bonjour Happycore, je souhaite en savoir plus sur Sisterhood et vérifier les disponibilités.',
    en: 'Hello Happycore, I would like to know more about Sisterhood and check availability.',
    ar: 'مرحبًا هابيكور، أرغب في معرفة المزيد عن الأخت والتحقق من التوفر.'
  } as MessagesByLocale,
  roots: {
    fr: 'Bonjour Happycore, je souhaite en savoir plus sur Roots et le voyage héritage.',
    en: 'Hello Happycore, I would like to know more about Roots and the heritage journey.',
    ar: 'مرحبًا هابيكور، أرغب في معرفة المزيد عن الجذور ورحلة التراث.'
  } as MessagesByLocale,
  executive: {
    fr: 'Bonjour Happycore, je souhaite organiser un appel confidentiel pour Executive.',
    en: 'Hello Happycore, I would like to arrange a confidential call for Executive.',
    ar: 'مرحبًا هابيكور، أرغب في ترتيب مكالمة سرية للتنفيذي.'
  } as MessagesByLocale,
  blog: {
    fr: 'Bonjour Happycore, je souhaite échanger sur votre blog et vos voyages au Maroc.',
    en: 'Hello Happycore, I would like to discuss your blog and trips to Morocco.',
    ar: 'مرحبًا هابيكور، أرغب في مناقشة مدونتكم ورحلاتكم إلى المغرب.'
  } as MessagesByLocale
};

function pickMessage(pathname: string, locale: string): string {
  let key: keyof typeof messages = 'default';
  if (pathname.includes('/sisterhood')) key = 'sisterhood';
  else if (pathname.includes('/roots')) key = 'roots';
  else if (pathname.includes('/executive')) key = 'executive';
  else if (pathname.includes('/blog')) key = 'blog';
  const set = messages[key];
  return (set as any)[locale] || (set as any).fr;
}

export function buildWhatsAppUrl(pathname: string, locale: string, customText?: string) {
  const text = customText || pickMessage(pathname, locale);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function useWhatsAppHref(customText?: string) {
  const { pathname } = useLocation();
  const { locale } = useI18n();
  return useMemo(
    () => buildWhatsAppUrl(pathname, locale, customText),
    [pathname, locale, customText]
  );
}
