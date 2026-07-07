import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Sun, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { TrustBadges, Testimonials } from '../components/Marketing';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import { useI18n } from '../i18n/I18nProvider';
import { Helmet } from 'react-helmet-async';
import { MARRAKECH, buildPlaceSchema, buildTouristAttractionSchema } from '../lib/schemas';

export default function Sisterhood() {
  const { t } = useI18n();
  const FORM_URL = "/reservation";

  const faqItems = [
    {
      question: 'Pourquoi choisir un voyage en groupe plutôt que solo complet ?',
      answer:
        'Notre format combine la liberté du solo (vous voyagez seule) avec la sécurité du groupe (6 personnes max, logistique privée). Vous gardez votre indépendance tout en bénéficiant d\'une infrastructure sécurisée.'
    },
    {
      question: 'Quelle est la meilleure période pour venir à Marrakech ?',
      answer:
        'Mars-mai et septembre-novembre offrent les températures les plus agréables (20-28°C). Évitez juillet-août si vous craignez la chaleur (35-45°C). Nos éditions sont calibrées pour les meilleures saisons.'
    },
    {
      question: 'Combien coûte le séjour Sisterhood ?',
      answer:
        'À partir de 1 890€ par personne pour 5 jours/4 nuits tout inclus (hébergement, transferts, activités, certains repas). Contactez-nous pour les dates exactes et disponibilités.'
    },
    {
      question: 'Puis-je venir si je n\'ai jamais voyagé seule ?',
      answer:
        'Absolument. Sisterhood est conçu pour les premières expériences solo sécurisées. 40% de nos participantes n\'avaient jamais voyagé seules avant.'
    },
    {
      question: 'Que se passe-t-il en cas d\'imprévu ou d\'urgence ?',
      answer:
        'Vous avez un contact humain disponible 24/7. Notre équipe sur place gère tout : médical, logistique, changement de programme. Vous n\'êtes jamais livrée à vous-même.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title={t('sisterhood.seoTitle')}
        description={t('sisterhood.meta')}
        canonical="/sisterhood"
        keywords="voyage solo femme Marrakech sécurisé, voyage femme seule Maroc, séjour femme Marrakech, riad femme seule, solo female travel Morocco"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildPlaceSchema(MARRAKECH, "Marrakech est la ville hôte de l'expérience Sisterhood, un voyage entre femmes alliant sécurité, culture et bien-être."))}</script>
        <script type="application/ld+json">{JSON.stringify(buildTouristAttractionSchema("Happycore Sisterhood", "Voyage entre femmes à Marrakech : sécurité, petits groupes, hébergement en riad, transferts privés et activités culturelles.", MARRAKECH, "https://images.pexels.com/photos/28076408/pexels-photo-28076408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920"))}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/28076408/pexels-photo-28076408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920" 
            alt="Femmes voyageant au Maroc" 
            className="w-full h-full object-cover brightness-[0.7] object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-sm"
            >
              {t('sisterhood.badge')}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              {t('sisterhood.title1')}<br />{t('sisterhood.title2')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-rose-50 mb-8 md:mb-10 leading-relaxed font-light max-w-xl"
            >
              {t('sisterhood.subtitle')}
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
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-rose-600 rounded-full hover:bg-rose-500 hover:scale-105 transition-all shadow-xl shadow-rose-900/40 focus:ring-4 focus:ring-rose-300"
                aria-label="Réserver ma place pour Sisterhood"
              >
                Vérifier les disponibilités <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-rose-200 text-sm flex items-center bg-rose-950/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <AlertCircle className="w-4 h-4 mr-2" />
                Seulement 6 places par édition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">La promesse Happycore Sisterhood</h2>
            <p className="text-lg text-stone-600">
              Nous avons conçu chaque détail pour garantir votre tranquillité d'esprit, de l'arrivée au départ. Vous n'avez qu'à profiter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Sécurité Maximale</h3>
              <p className="text-stone-600 leading-relaxed">
                Chauffeuse privée dédiée pour tous vos déplacements. Nos riads partenaires sont stritement audités pour garantir votre sécurité.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Petit Groupe</h3>
              <p className="text-stone-600 leading-relaxed">
                Un maximum de 6 femmes par séjour pour privilégier les connexions authentiques, la fluidité du voyage et une ambiance sororale.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 group-hover:bg-rose-100 transition-all duration-300">
                <Sun className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">Lâcher-prise Total</h3>
              <p className="text-stone-600 leading-relaxed">
                Aucune charge mentale. Itinéraire pré-organisé, réservations incluses, assistance 24/7. Respirez, vous êtes au Maroc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program / Inclusion */}
      <section className="py-24 bg-rose-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-rose-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600" 
              alt="Intérieur Riad Marrakech magnifique" 
              className="rounded-3xl shadow-2xl relative z-10"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-rose-600 font-bold uppercase tracking-wider text-sm mb-2 block">Le Programme</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">Ce qui est inclus dans votre séjour</h2>
            <ul className="space-y-6">
              {[
                "Hébergement 4 nuits dans un Riad traditionnel privatisé au cœur de la Médina.",
                "Petits-déjeuners gourmands et dîner de bienvenue traditionnel.",
                "Transferts aéroport aller-retour sécurisés avec notre chauffeuse.",
                "Visite guidée de la Médina par une experte locale accréditée.",
                "Journée bien-être : Hammam traditionnel et massage relaxant.",
                "Atelier cuisine marocaine entre femmes dans la bonne humeur."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-white p-4 rounded-2xl shadow-sm border border-rose-100/50">
                  <CheckCircle className="h-6 w-6 text-rose-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center lg:text-left">
              <Link
                to={FORM_URL}
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center px-8 py-4 text-lg font-bold text-white bg-rose-600 rounded-full hover:bg-rose-700 hover:shadow-2xl transition-all shadow-xl shadow-rose-600/30 w-full sm:w-auto"
              >
                <span>Rejoindre la liste d'attente</span>
              </Link>
              <p className="text-stone-500 text-sm mt-4">Sans engagement de paiement immédiat. Places limitées.</p>
              <div className="mt-4">
                <Link to="/blog/voyage-solo-femme-marrakech-securise" className="text-sm font-medium text-rose-700 underline underline-offset-4">
                  Lire le guide securite avant de reserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} accentColor="rose" />

      <Testimonials type="sisterhood" />
    </div>
  );
}
