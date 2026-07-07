import { useState } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { submitToSheet } from '../lib/submitToSheet';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;
    setStatus('submitting');
    try {
      await submitToSheet({ formType: 'inscription', email });
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-stone-950 py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 mb-4">
            Newsletter
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 px-2">
            {t('newsletter.title')}
          </h2>
          <p className="text-stone-400 leading-7 mb-8 max-w-2xl mx-auto text-sm md:text-base px-2">
            {t('newsletter.description')}
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 px-6 py-4 rounded-full"
            >
              <span className="text-sm font-medium">{t('newsletter.thanks')}</span>
            </motion.div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto px-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  required
                  disabled={status === 'submitting'}
                  className="flex-1 min-w-0 px-5 py-3 rounded-full bg-stone-900 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-600 transition-all disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting' || !email}
                  className="px-6 py-3 rounded-full bg-white text-stone-950 font-medium hover:bg-stone-200 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? '...' : t('newsletter.subscribe')}
                </button>
              </form>
              {status === 'error' && (
                <p className="text-rose-400 text-xs mt-4">
                  Une erreur est survenue. Merci de réessayer.
                </p>
              )}
            </>
          )}

          <p className="text-stone-600 text-xs mt-4 px-4">
            {t('newsletter.privacyNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}