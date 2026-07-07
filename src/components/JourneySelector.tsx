import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

type Answer = 'sisterhood' | 'roots' | 'executive';

type Question = {
  key: string;
  answers: { label: string; value: Answer }[];
};

export default function JourneySelector() {
  const { t, locale } = useI18n();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const questions: Question[] = [
    {
      key: 'goal',
      answers: [
        { label: t('home.selectorQ1A1'), value: 'sisterhood' },
        { label: t('home.selectorQ1A2'), value: 'roots' },
        { label: t('home.selectorQ1A3'), value: 'executive' }
      ]
    },
    {
      key: 'duration',
      answers: [
        { label: t('home.selectorQ2A1'), value: 'sisterhood' },
        { label: t('home.selectorQ2A2'), value: 'roots' },
        { label: t('home.selectorQ2A3'), value: 'executive' }
      ]
    },
    {
      key: 'budget',
      answers: [
        { label: t('home.selectorQ3A1'), value: 'sisterhood' },
        { label: t('home.selectorQ3A2'), value: 'roots' },
        { label: t('home.selectorQ3A3'), value: 'executive' }
      ]
    }
  ];

  const selectAnswer = (value: Answer) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(questions.length), 300);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const getResult = (): Answer => {
    const counts: Record<Answer, number> = { sisterhood: 0, roots: 0, executive: 0 };
    answers.forEach((a) => counts[a]++);
    return (Object.keys(counts) as Answer[]).reduce((a, b) => counts[a] >= counts[b] ? a : b);
  };

  const result = getResult();

  const resultConfig = {
    sisterhood: {
      title: 'Sisterhood',
      path: '/sisterhood',
      price: '1 890€',
      duration: '5 jours',
      durationEn: '5 days',
      gradientClass: 'bg-gradient-to-br from-rose-500 to-rose-700',
      image: 'https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600'
    },
    roots: {
      title: 'Roots',
      path: '/roots',
      price: '2 290€',
      duration: '6 jours',
      durationEn: '6 days',
      gradientClass: 'bg-gradient-to-br from-emerald-700 to-emerald-900',
      image: 'https://images.pexels.com/photos/37442103/pexels-photo-37442103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600'
    },
    executive: {
      title: 'Executive',
      path: '/executive',
      price: '3 500€',
      duration: 'Flexible',
      durationEn: 'Flexible',
      gradientClass: 'bg-gradient-to-br from-blue-700 to-blue-900',
      image: 'https://images.pexels.com/photos/15072154/pexels-photo-15072154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600'
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 mb-4">
            <Sparkles className="inline-block w-3 h-3 me-2 -mt-0.5" />
            Guide intelligent
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-950 mb-4 leading-tight">
            {t('home.selectorTitle')}
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t('home.selectorSubtitle')}
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
          {/* Progress indicator */}
          <div className="h-1 bg-stone-100">
            <motion.div
              className="h-full bg-gradient-to-r from-stone-700 to-stone-900"
              animate={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="p-6 sm:p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step < questions.length ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                    {step + 1} / {questions.length}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-stone-950 mb-8">
                    {t(`home.selectorQuestion${step + 1}` as any)}
                  </h3>
                  <div className="space-y-3">
                    {questions[step].answers.map((answer, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        onClick={() => selectAnswer(answer.value)}
                        className="w-full group flex items-center justify-between p-5 md:p-6 rounded-2xl border border-stone-200 hover:border-stone-900 hover:bg-stone-50 transition-all text-start"
                      >
                        <span className="text-sm md:text-base font-medium text-stone-800 group-hover:text-stone-950">
                          {answer.label}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-1 transition-all flex-shrink-0 ms-2" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 mb-2">
                    {t('home.selectorResult')}
                  </p>
                  <p className="text-sm text-stone-600 mb-6">
                    {t('home.selectorRecommendation')}
                  </p>
                  <div className={`rounded-2xl overflow-hidden ${resultConfig[result].gradientClass} p-6 md:p-8 text-white mb-6`}>
                    <h4 className="text-2xl md:text-3xl font-semibold mb-2">
                      Happycore {resultConfig[result].title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm mb-6 opacity-90">
                      <span>{t('home.selectorFrom')} {resultConfig[result].price}</span>
                      <span>·</span>
                      <span>
                        {locale === 'en' ? resultConfig[result].durationEn : resultConfig[result].duration} {t('home.selectorDuration')}
                      </span>
                    </div>
                    <Link
                      to={resultConfig[result].path}
                      className="inline-flex items-center gap-2 bg-white text-stone-900 px-5 py-3 rounded-full font-semibold text-sm hover:bg-stone-100 transition-colors"
                    >
                      {t('common.discover')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {t('home.selectorReset')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
