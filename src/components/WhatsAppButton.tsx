import { motion } from 'framer-motion';
import { useWhatsAppHref } from '../lib/whatsapp';
import { useI18n } from '../i18n/I18nProvider';

export default function WhatsAppButton() {
  const href = useWhatsAppHref();
  const { t } = useI18n();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 end-5 z-[60] hidden md:inline-flex items-center rounded-full border border-emerald-200/80 bg-white/90 px-4 py-3 text-sm font-medium text-stone-900 shadow-lg shadow-stone-300/40 backdrop-blur-xl transition-transform hover:scale-[1.02]"
      aria-label="Contacter Happycore sur WhatsApp"
    >
      <span>{t('whatsapp.label')}</span>
    </motion.a>
  );
}
