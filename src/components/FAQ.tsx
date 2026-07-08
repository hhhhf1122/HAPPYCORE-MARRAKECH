import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../i18n/I18nProvider';


type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  accentColor?: string;
};

export default function FAQ({ items, accentColor = 'stone' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const {t} = useI18n();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-stone-50">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-900">
          {t('blog.faq')}
        </h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-stone-50 transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-stone-900 pr-4">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-2xl text-${accentColor}-600 flex-shrink-0`}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-stone-600 leading-7">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
