import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useI18n();

  const stats: StatItem[] = [
    { value: 480, suffix: '+', label: t('home.statTravelers') },
    { value: 98, suffix: '%', label: t('home.statRating') },
    { value: 7, suffix: '', label: t('home.statYears') },
    { value: 72, suffix: '%', label: t('home.statRepeat') }
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400 mb-10 text-center"
        >
          {t('home.statsTitle')}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs md:text-sm text-stone-400 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
