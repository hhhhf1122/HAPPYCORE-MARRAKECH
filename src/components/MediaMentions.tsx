import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

const mentions = [
  { name: 'Vogue Arabia', logo: '✦' },
  { name: 'Condé Nast Traveler', logo: '✦' },
  { name: 'Forbes Afrique', logo: '✦' },
  { name: 'Le Figaro Madame', logo: '✦' }
];

export default function MediaMentions() {
  const { t } = useI18n();

  return (
    <section className="py-12 md:py-16 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-400 mb-6 md:mb-8">
            {t('media.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-6">
            {mentions.map((mention) => (
              <div
                key={mention.name}
                className="flex items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors"
              >
                <span className="text-base md:text-lg">{mention.logo}</span>
                <span className="text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">{mention.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
