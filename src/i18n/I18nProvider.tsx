import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { DEFAULT_LOCALE, LOCALES, type Locale, type LocaleConfig, translations } from './translations';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <K extends string>(path: K) => string;
  dir: 'ltr' | 'rtl';
  currentLocale: LocaleConfig;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'happycore-locale';

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && LOCALES.some((l) => l.code === stored)) return stored;

  const browserLang = navigator.language?.split('-')[0] as Locale;
  if (LOCALES.some((l) => l.code === browserLang)) return browserLang;

  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {}
  };

  useEffect(() => {
    const config = LOCALES.find((l) => l.code === locale) || LOCALES[0];
    document.documentElement.lang = locale;
    document.documentElement.dir = config.dir;
  }, [locale]);

  const currentLocale = useMemo(
    () => LOCALES.find((l) => l.code === locale) || LOCALES[0],
    [locale]
  );

  const t = <K extends string>(path: K): string => {
    const entry = getNestedValue(translations, path);
    if (!entry) return path;
    if (typeof entry === 'string') return entry;
    return entry[locale] || entry[DEFAULT_LOCALE] || path;
  };

  const value: I18nContextValue = {
    locale,
    setLocale,
    t,
    dir: currentLocale.dir,
    currentLocale
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
