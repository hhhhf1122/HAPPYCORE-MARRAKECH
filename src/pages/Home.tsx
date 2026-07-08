import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, Users, Globe, Briefcase } from 'lucide-react';
import { getLocalizedPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import MediaMentions from '../components/MediaMentions';
import Newsletter from '../components/Newsletter';
import JourneySelector from '../components/JourneySelector';
import Stats from '../components/Stats';
import { useI18n } from '../i18n/I18nProvider';
import { Helmet } from 'react-helmet-async';
import { buildOrganizationSchema, buildLocalBusinessSchema } from '../lib/schemas';

export default function Home() {
  const { t, locale } = useI18n();

  const offers = [
    {
      key: 'sisterhood',
      path: '/sisterhood',
      icon: Users,
      durationKey: 'dur5j',
      price: '1 323€',
      image: 'https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      classes: {
        iconBg: 'bg-rose-100',
        iconText: 'text-rose-600',
        linkText: 'text-rose-700',
        hoverGradient: 'from-rose-950/60'
      }
    },
    {
      key: 'roots',
      path: '/roots',
      icon: Globe,
      durationKey: 'dur6j',
      price: '1 603€',
      image: 'https://images.pexels.com/photos/37442103/pexels-photo-37442103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      classes: {
        iconBg: 'bg-emerald-100',
        iconText: 'text-emerald-600',
        linkText: 'text-emerald-700',
        hoverGradient: 'from-emerald-950/60'
      }
    },
    {
      key: 'executive',
      path: '/executive',
      icon: Briefcase,
      durationKey: 'durFlex',
      price: '2 450€',
      image: 'https://images.pexels.com/photos/15072154/pexels-photo-15072154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      classes: {
        iconBg: 'bg-blue-100',
        iconText: 'text-blue-600',
        linkText: 'text-blue-700',
        hoverGradient: 'from-blue-950/60'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={t('home.heroTitle')}
        description={t('home.heroSubtitle')}
        canonical="/"
        keywords="voyage maroc, marrakech, sisterhood, roots, executive, voyage solo femme, voyage afro, business trip"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildOrganizationSchema())}</script>
        <script type="application/ld+json">{JSON.stringify(buildLocalBusinessSchema())}</script>
      </Helmet>

      {/* Hero Section - Full Screen, Cinematic */}
      <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.pexels.com/photos/37441974/pexels-photo-37441974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"
            alt="Marrakech Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full pb-20 md:pb-28 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-300 mb-6"
            >
              {t('home.heroEyebrow')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-6 leading-[1.05] max-w-4xl"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-stone-200 font-light mb-10 leading-relaxed max-w-2xl"
            >
              {t('home.heroSubtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#selector"
                className="inline-flex items-center gap-2 bg-white text-stone-900 px-6 md:px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-stone-100 transition-all hover:scale-[1.02]"
              >
                {t('home.heroCta')}
                <ArrowDown className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 text-stone-300 text-xs">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-300 to-stone-500 border-2 border-stone-950"
                    />
                  ))}
                </div>
                <span>{t('home.heroTravelers')} {t('home.statTravelers').toLowerCase()}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 end-6 hidden md:flex flex-col items-center gap-2 text-stone-400 text-xs"
        >
          <span className="uppercase tracking-[0.2em]">{t('home.heroScroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-stone-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* Interactive Journey Selector */}
      <div id="selector">
        <JourneySelector />
      </div>

      {/* Stats */}
      <Stats />

      {/* The Three Experiences - Editorial Grid */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 md:mb-20 max-w-3xl mx-auto"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 mb-4">
              {t('home.sectionSubtitle')}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-950 leading-tight">
              {t('home.sectionTitle')}
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {offers.map((offer, idx) => {
              const Icon = offer.icon;
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={offer.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 lg:gap-20 items-center`}
                >
                  <Link to={offer.path} className="md:w-1/2 group block w-full">
                    <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-3xl">
                      <img
                        src={offer.image}
                        alt={offer.key}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${offer.classes.hoverGradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    </div>
                  </Link>
                  <div className="md:w-1/2">
                    <div className={`inline-flex w-12 h-12 rounded-full ${offer.classes.iconBg} items-center justify-center ${offer.classes.iconText} mb-6`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-stone-950 mb-4">
                      Happycore {t(`nav.${offer.key}` as any)}
                    </h3>
                    <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
                      {t(`home.${offer.key}Desc` as any)}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-stone-500">
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">{t('home.fromLabel')}</span>
                        <span className="text-lg font-semibold text-stone-950">{offer.price}</span>
                      </div>
                      <div className="w-px h-10 bg-stone-200" />
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-1">{t('home.durationLabel')}</span>
                        <span className="text-lg font-semibold text-stone-950">{t(`home.${offer.durationKey}` as any)}</span>
                      </div>
                    </div>
                    <Link
                      to={offer.path}
                      className={`inline-flex items-center gap-2 ${offer.classes.linkText} font-semibold hover:gap-3 transition-all group/link`}
                    >
                      <span className="text-sm uppercase tracking-[0.15em]">{t('common.discover')}</span>
                      <span className="w-8 h-px bg-current transition-all group-hover/link:w-12" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <MediaMentions />

      {/* Blog Preview */}
      <section className="py-16 md:py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 mb-4">{t('home.blogLabel')}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-stone-950 leading-tight">
                {t('home.blogTitle')}
              </h2>
            </div>
            <Link to="/blog" className="text-sm font-medium uppercase tracking-[0.2em] text-stone-900 underline underline-offset-8 hover:text-stone-600 transition-colors flex-shrink-0">
              {t('home.allGuides')}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {getLocalizedPosts(locale).slice(0, 3).map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl md:rounded-[1.75rem] overflow-hidden border border-stone-200 bg-stone-50 hover:bg-white transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.heroAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 mb-3">{post.category}</p>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-stone-950 group-hover:text-stone-700 transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
