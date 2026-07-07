import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, Music, Sparkles, ArrowRight, CheckCircle, Flame } from 'lucide-react';
import { TrustBadges, Testimonials } from '../components/Marketing';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { useI18n } from '../i18n/I18nProvider';
import { Helmet } from 'react-helmet-async';
import { MARRAKECH, ESSAOUIRA, buildPlaceSchema, buildTouristAttractionSchema } from '../lib/schemas';

export default function Roots() {
  const { t } = useI18n();
  const FORM_URL = "/reservation";

  const faqItems = [
    {
      question: 'Ce voyage est-il réservé aux personnes d\'origine africaine ?',
      answer:
        'Roots est conçu pour la diaspora afro, mais nous accueillons toute personne authentiquement intéressée par l\'histoire et la culture Gnawa. L\'essentiel est l\'intention d\'apprentissage et de reconnexion.'
    },
    {
      question: 'Faut-il parler français ou arabe ?',
      answer:
        'Nos guides sont bilingues français/anglais. Vous pouvez participer dans l\'une ou l\'autre langue. Certains moments sont traduits en temps réel.'
    },
    {
      question: 'Quelle est la différence avec un voyage culturel classique ?',
      answer:
        'Un voyage classique visite. Roots rencontre, écoute, échange. Nous privilégions les connexions humaines aux visites panoramiques. L\'immersion est profonde, pas superficielle.'
    },
    {
      question: 'Combien de personnes par voyage ?',
      answer:
        'Maximum 8 personnes par édition pour préserver l\'intimité des rencontres et la qualité des échanges. Nous refusons souvent des candidatures pour maintenir ce format.'
    },
    {
      question: 'Quel est le prix du séjour Roots ?',
      answer:
        'À partir de 2 290€ par personne pour 6 jours/5 nuits (hébergement, transferts, activités culturelles, rencontres, certains repas). Postulez pour recevoir le dossier complet.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title={t('roots.seoTitle')}
        description={t('roots.meta')}
        canonical="/roots"
        keywords="voyage afro Maroc, diaspora afro Maroc, culture Gnawa Essaouira, voyage héritage, black travel Morocco, Gnawa heritage"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildPlaceSchema(ESSAOUIRA, "Essaouira, ville côtière du Maroc, est le cœur de l'expérience Roots : culture Gnawa, histoire afro-marocaine et artisanat."))}</script>
        <script type="application/ld+json">{JSON.stringify(buildPlaceSchema(MARRAKECH, "Marrakech est la porte d'entrée de l'expérience Roots, voyage sur les traces de l'héritage afro-marocain."))}</script>
        <script type="application/ld+json">{JSON.stringify(buildTouristAttractionSchema("Happycore Roots", "Voyage d'héritage afro-marocain entre Marrakech et Essaouira : culture Gnawa, routes transsahariennes et communauté vivante.", ESSAOUIRA, "https://images.pexels.com/photos/37442103/pexels-photo-37442103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"))}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/37442103/pexels-photo-37442103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" 
            alt="Essaouira Culture" 
            className="w-full h-full object-cover brightness-[0.6] object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 to-emerald-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-[#E6C687] text-emerald-950 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm"
            >
              {t('roots.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              {t('roots.title1')} <br className="hidden md:block"/> {t('roots.title2')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-emerald-50/90 mb-8 md:mb-10 leading-relaxed font-light max-w-2xl"
            >
              {t('roots.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                to={FORM_URL}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-emerald-950 bg-[#E6C687] rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl focus:ring-4 focus:ring-emerald-500/50"
              >
                Postuler pour l'expédition <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-emerald-200 text-sm flex items-center bg-emerald-950/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Flame className="w-4 h-4 mr-2 text-[#E6C687]" />
                Forte demande. Prochaine date bientôt complète.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features */}
      <section className="py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Une exploration culturelle profonde</h2>
            <p className="text-lg text-stone-600">
              Bien plus qu'un séjour touristique, c'est une véritable immersion dans l'histoire afro-marocaine. Un voyage de reconnexion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Music className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Culture Gnawa</h3>
              <p className="text-stone-600 leading-relaxed">
                Plongez dans les rythmes spirituels et l'histoire des confréries Gnawa à Essaouira, fiers descendants des populations subsahariennes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Routes Transsahariennes</h3>
              <p className="text-stone-600 leading-relaxed">
                Découvrez les carrefours historiques du commerce et de la culture qui reliaient le Maroc à l'Afrique de l'Ouest depuis des siècles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Communauté Vivante</h3>
              <p className="text-stone-600 leading-relaxed">
                Rencontrez des artisans, historiens et artistes locaux pour un échange authentique et réciproque, loin des clichés touristiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program / Inclusion */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#E6C687] font-bold uppercase tracking-wider text-sm mb-2 block">Le Séjour</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Votre itinéraire Héritage</h2>
            <ul className="space-y-6">
              {[
                "6 jours et 5 nuits entre la vibrante Marrakech et la sereine Essaouira.",
                "Cérémonie privée de musique Gnawa et rencontre avec un Maâlem (Maître).",
                "Exploration de l'ancienne médina et de son histoire cachée par des locaux.",
                "Hébergement dans des lieux chargés d'histoire, de charme et d'âme.",
                "Dîners thématiques autour de l'héritage culinaire afro-marocain.",
                "Transport privé et guide culturel expert francophone/anglophone."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-stone-800/50 p-4 rounded-2xl border border-stone-700/50">
                  <CheckCircle className="h-6 w-6 text-[#E6C687] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-stone-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center lg:text-left">
              <Link
                to={FORM_URL}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-emerald-950 bg-[#E6C687] rounded-full hover:bg-white transition-all shadow-xl w-full sm:w-auto"
              >
                Réserver mon appel découverte
              </Link>
              <p className="text-stone-400 text-sm mt-4">Places extrêmement limitées pour privilégier l'expérience de groupe.</p>
              <div className="mt-4">
                <Link to="/blog/voyage-afro-maroc-diaspora" className="text-sm font-medium text-[#E6C687] underline underline-offset-4">
                  Lire l'article sur le voyage afro au Maroc
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-[#E6C687] rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300" 
                alt="Architecture Essaouira" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover mt-12 relative z-10"
                loading="lazy"
              />
              <img 
                src="https://images.pexels.com/photos/15360707/pexels-photo-15360707.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=300" 
                alt="Détails Marrakech" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} accentColor="emerald" />

      <Testimonials type="roots" />
    </div>
  );
}
