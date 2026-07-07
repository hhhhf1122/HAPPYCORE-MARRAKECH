import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useWhatsAppHref } from '../lib/whatsapp';
import { useI18n } from '../i18n/I18nProvider';

export default function StickyMobileCTA() {
  const { pathname } = useLocation();
  const whatsappHref = useWhatsAppHref();
  const { t } = useI18n();

  // Don't show on blog pages
  if (pathname.includes('/blog')) return null;

  const ctaConfig: Record<string, { label: string; formUrl: string; color: string }> = {
    '/sisterhood': {
      label: t('stickyCTA.sisterhood'),
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScX_x.../viewform',
      color: 'bg-rose-600 text-white'
    },
    '/roots': {
      label: t('stickyCTA.roots'),
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScX_y.../viewform',
      color: 'bg-[#E6C687] text-emerald-950'
    },
    '/executive': {
      label: t('stickyCTA.executive'),
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScX_z.../viewform',
      color: 'bg-blue-600 text-white'
    }
  };

  const config = ctaConfig[pathname];
  if (!config) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-stone-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      dir="ltr"
    >
      <div className="flex gap-2 max-w-md mx-auto">
        <a
          href={config.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 ${config.color} font-semibold py-3 px-3 rounded-full text-center text-xs sm:text-sm transition-transform hover:scale-[1.02] truncate`}
        >
          {config.label}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white font-semibold py-3 px-4 rounded-full text-center text-xs sm:text-sm transition-transform hover:scale-[1.02] flex-shrink-0"
          aria-label="WhatsApp"
        >
          WA
        </a>
      </div>
    </motion.div>
  );
}
