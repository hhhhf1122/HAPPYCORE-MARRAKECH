import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Crown, Network, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { TrustBadges, Testimonials } from '../components/Marketing';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { useI18n } from '../i18n/I18nProvider';
import { Helmet } from 'react-helmet-async';
import { MARRAKECH, buildPlaceSchema, buildServiceSchema } from '../lib/schemas';

export default function Executive() {
  const { t } = useI18n();
  const FORM_URL = "/reservation";

  const faqItems = [
    {
      question: 'Quel est le délai minimum pour organiser un séjour Executive ?',
      answer:
        'Idéalement 3 semaines pour un programme complet. En urgence (7 jours), nous pouvons mobiliser nos réseaux pour un séjour de qualité, avec un accès légèrement plus limité aux lieux les plus exclusifs.'
    },
    {
      question: 'Le service est-il adapté aux équipes ou seulement aux individus ?',
      answer:
        'Nous gérons aussi bien les séjours individuels que les groupes de 2 à 12 dirigeants. Pour les équipes, nous adaptons la logistique (salles privées, activités de groupe, dîners d\'affaires).'
    },
    {
      question: 'Comment garantissez-vous la discrétion ?',
      answer:
        'NDA signé par toute l\'équipe, pas de photos sans autorisation, transferts en véhicules discrets, hébergements avec entrées privées. Notre clientèle inclut des personnalités publiques.'
    },
    {
      question: 'Quel est le budget à prévoir ?',
      answer:
        'À partir de 3 500€ par personne pour 3 jours/2 nuits (hébergement premium, conciergerie dédiée, accès golf/tennis, 2 dîners gastronomiques). Les programmes sur mesure démarrent à 8 000€.'
    },
    {
      question: 'Pouvez-vous organiser des rencontres business ciblées ?',
      answer:
        'Oui. Nous avons un réseau d\'entrepreneurs, investisseurs et décideurs locaux. Selon vos objectifs (investissement, partenariat, veille), nous orchestrons des rencontres qualifiées.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title={t('executive.seoTitle')}
        description={t('executive.meta')}
        canonical="/executive"
        keywords="business trip Marrakech golf, conciergerie Marrakech, déplacement professionnel Maroc, networking Marrakech, golf privé, executive travel"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildPlaceSchema(MARRAKECH, "Marrakech est la base de l'expérience Executive : business trips, golf, conciergerie premium et networking de haut niveau."))}</script>
        <script type="application/ld+json">{JSON.stringify(buildServiceSchema("Happycore Executive Conciergerie", "Service de conciergerie business haut de gamme à Marrakech : transferts privés, golf, networking qualifié et programmes sur-mesure pour dirigeants."))}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/15072154/pexels-photo-15072154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" 
            alt="Business Dinner VIP" 
            className="w-full h-full object-cover brightness-[0.35] object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center py-1.5 px-4 rounded-full bg-blue-900/40 border border-blue-400/50 text-blue-200 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
            >
              <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" /> {t('executive.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              {t('executive.title1')} <br className="hidden md:block"/>{t('executive.title2')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-stone-300 mb-8 md:mb-10 leading-relaxed font-light max-w-2xl mx-auto"
            >
              {t('executive.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <Link
                to={FORM_URL}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-900/50 focus:ring-4 focus:ring-blue-400"
              >
                <Phone className="mr-2 h-5 w-5" /> Réserver un appel confidentiel
              </Link>
              <p className="text-stone-400 text-sm flex items-center mt-2">
                <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" /> Discrétion absolue garantie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Un standard d'exigence unique</h2>
            <p className="text-lg text-stone-600">
              Chaque détail est orchestré pour optimiser votre temps et maximiser l'impact de votre séjour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group border border-stone-200 p-10 rounded-3xl hover:border-blue-600 hover:shadow-xl transition-all bg-stone-50 hover:bg-white">
              <div className="w-16 h-16 bg-white shadow-sm border border-stone-100 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center text-stone-800 group-hover:text-blue-600 transition-colors mb-8">
                <Crown className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Conciergerie Dédiée</h3>
              <p className="text-stone-600 leading-relaxed">
                Logistique ultra-fluide, transferts en berline de luxe, accès coupe-file et réservations dans les établissements les plus exclusifs de la ville ocre.
              </p>
            </div>
            <div className="group border border-transparent p-10 rounded-3xl transition-all bg-[#0a192f] text-white shadow-2xl relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full"></div>
              <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center text-white mb-8 relative z-10">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Sport & Business</h3>
              <p className="text-blue-100 leading-relaxed relative z-10">
                Accès prioritaire aux parcours de golf les plus prestigieux de Marrakech et aux courts de tennis privés pour allier détente et affaires au plus haut niveau.
              </p>
            </div>
            <div className="group border border-stone-200 p-10 rounded-3xl hover:border-blue-600 hover:shadow-xl transition-all bg-stone-50 hover:bg-white">
              <div className="w-16 h-16 bg-white shadow-sm border border-stone-100 group-hover:bg-blue-50 rounded-2xl flex items-center justify-center text-stone-800 group-hover:text-blue-600 transition-colors mb-8">
                <Network className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Networking Qualifié</h3>
              <p className="text-stone-600 leading-relaxed">
                Rencontres orchestrées avec des acteurs clés locaux, dîners d'affaires très discrets et événements de réseautage sur-mesure selon vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-[#0a192f] text-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/10 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/17383426/pexels-photo-17383426.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" 
                alt="Golf privé Marrakech" 
                className="rounded-3xl shadow-2xl opacity-90 border border-blue-900/50"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-2 block">Méthodologie</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">L'Excellence comme standard</h2>
              <p className="text-lg text-stone-300 mb-12 leading-relaxed font-light">
                Notre offre Executive est pensée pour les leaders qui ne font aucun compromis entre l'efficacité professionnelle et le raffinement personnel lors de leurs déplacements.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-[#0a192f] rounded-2xl flex items-center justify-center border border-blue-700/50 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-blue-500 transition-colors">
                    <span className="font-bold text-blue-400 text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Diagnostic Personnalisé</h4>
                    <p className="text-stone-400 leading-relaxed">Lors d'un premier appel, nous définissons ensemble vos objectifs business, votre emploi du temps et vos préférences lifestyle.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-[#0a192f] rounded-2xl flex items-center justify-center border border-blue-700/50 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-blue-500 transition-colors">
                    <span className="font-bold text-blue-400 text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Conception Sur-Mesure</h4>
                    <p className="text-stone-400 leading-relaxed">Création d'un itinéraire exclusif de A à Z incluant green fees, tables étoilées et sécurisation de salles de réunions privées.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-[#0a192f] rounded-2xl flex items-center justify-center border border-blue-700/50 shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:border-blue-500 transition-colors">
                    <span className="font-bold text-blue-400 text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Exécution Parfaite</h4>
                    <p className="text-stone-400 leading-relaxed">Une présence sur place discrète mais redoutablement efficace pour anticiper et garantir le bon déroulement de chaque étape.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center lg:text-left border-t border-stone-800 pt-8">
                <Link
                  to={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0a192f] bg-white rounded-full hover:bg-stone-200 transition-colors w-full sm:w-auto"
                >
                  Initier la planification <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="mt-4">
                  <Link to="/blog/business-trip-marrakech-golf-conciergerie" className="text-sm font-medium text-blue-200 underline underline-offset-4">
                    Lire le guide business trip Marrakech
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} accentColor="blue" />

      <Testimonials type="executive" />
    </div>
  );
}
