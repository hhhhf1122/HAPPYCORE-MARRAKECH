import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { LOCALES } from '../i18n/translations';
import { showToast } from './Toast';

const toastMessages: Record<string, string> = {
  fr: 'Langue changée : Français',
  en: 'Language changed: English',
  ar: 'تم تغيير اللغة: العربية'
};

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale, currentLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const textColor = dark ? 'text-white/90 hover:text-white' : 'text-stone-700 hover:text-stone-900';
  const hoverBg = dark ? 'hover:bg-white/10' : 'hover:bg-stone-100';

  const handleSelect = (code: string) => {
    if (code !== locale) {
      setLocale(code as any);
      showToast(toastMessages[code] || toastMessages.fr);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 md:gap-2 min-w-[44px] min-h-[44px] justify-center px-2 md:px-3 py-2 rounded-full transition-colors text-[11px] font-medium tracking-wide uppercase ${textColor} ${hoverBg}`}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base leading-none">{currentLocale.flag}</span>
        <span className="hidden sm:inline">{currentLocale.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute end-0 mt-2 w-48 rounded-2xl bg-white shadow-xl shadow-stone-300/30 border border-stone-100 overflow-hidden z-50"
            >
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => handleSelect(l.code)}
                  dir={l.dir}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm transition-colors min-h-[44px] ${
                    locale === l.code
                      ? 'bg-stone-50 text-stone-900 font-medium'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span className="flex-1 text-start">{l.nativeName}</span>
                  {locale === l.code && (
                    <span className="text-emerald-500 text-xs">●</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
