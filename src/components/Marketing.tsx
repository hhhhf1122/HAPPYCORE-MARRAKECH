import { Shield, Star, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

export function TrustBadges() {
  const { t } = useI18n();

  return (
    <div className="py-10 md:py-12 border-y border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] sm:text-sm font-semibold text-stone-400 uppercase tracking-widest mb-8">
          {t('trustBadges.title')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <Shield className="h-7 w-7 md:h-8 md:w-8 text-stone-700 mb-2 md:mb-3" strokeWidth={1.5} />
            <span className="text-xs md:text-sm font-medium text-stone-800 leading-tight text-center">
              {t('trustBadges.safety')}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-7 w-7 md:h-8 md:w-8 text-stone-700 mb-2 md:mb-3" strokeWidth={1.5} />
            <span className="text-xs md:text-sm font-medium text-stone-800 leading-tight text-center">
              {t('trustBadges.guides')}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-7 w-7 md:h-8 md:w-8 text-stone-700 mb-2 md:mb-3" strokeWidth={1.5} />
            <span className="text-xs md:text-sm font-medium text-stone-800 leading-tight text-center">
              {t('trustBadges.support')}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Star className="h-7 w-7 md:h-8 md:w-8 text-stone-700 mb-2 md:mb-3" strokeWidth={1.5} />
            <span className="text-xs md:text-sm font-medium text-stone-800 leading-tight text-center">
              {t('trustBadges.excellence')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const reviews = {
  sisterhood: {
    fr: [
      { name: "Sarah M.", role: "Voyageuse Solo", text: "Je n'ai jamais voyagé seule avec autant de tranquillité. La chauffeuse était géniale et le riad magnifique. Une expérience libératrice." },
      { name: "Léa D.", role: "Entrepreneure", text: "Le groupe de 6 femmes a créé une atmosphère intime incroyable. Je suis repartie avec des amies pour la vie." }
    ],
    en: [
      { name: "Sarah M.", role: "Solo Traveler", text: "I've never traveled alone with such peace of mind. The driver was amazing and the riad was magnificent. A liberating experience." },
      { name: "Léa D.", role: "Entrepreneur", text: "The group of 6 women created an incredibly intimate atmosphere. I left with friends for life." }
    ],
    ar: [
      { name: "سارة م.", role: "مسافرة منفردة", text: "لم أسافر بمفردي براحة البال هذه من قبل. كانت السائقة رائعة والرياض رائع. تجربة محررة." },
      { name: "ليا د.", role: "رائدة أعمال", text: "مجموعة من 6 نساء خلقت أجواء حميمة بشكل لا يصدق. غادرت مع صديقات مدى الحياة." }
    ]
  },
  roots: {
    fr: [
      { name: "Marc K.", role: "Participant", text: "Une claque culturelle. Rencontrer les Maâlems Gnawas et comprendre les routes transsahariennes a changé ma vision de l'histoire." },
      { name: "Aisha T.", role: "Créatrice", text: "Ce n'est pas du tourisme, c'est un retour aux sources. L'organisation a su éviter tous les clichés pour une vraie immersion." }
    ],
    en: [
      { name: "Marc K.", role: "Participant", text: "A cultural slap. Meeting the Gnawa Maâlems and understanding the trans-Saharan routes changed my vision of history." },
      { name: "Aisha T.", role: "Creator", text: "This is not tourism, it's a return to roots. The organization avoided all clichés for a real immersion." }
    ],
    ar: [
      { name: "مارك ك.", role: "مشارك", text: "صفعة ثقافية. لقاء معلم كناوة وفهم طرق عبر الصحراء غير رؤيتي للتاريخ." },
      { name: "عائشة ت.", role: "مبدعة", text: "هذه ليست سياحة، إنها عودة إلى الجذور. تجنبت المنظمة كل الصور النمطية لانغماس حقيقي." }
    ]
  },
  executive: {
    fr: [
      { name: "Jean-Paul V.", role: "CEO", text: "Un service de conciergerie redoutable. Mes partenaires ont été impressionnés par la qualité des dîners et l'accès au golf privé." },
      { name: "Élodie B.", role: "Directrice Associée", text: "Discrétion, efficacité et lieux exclusifs. Happycore a transformé ce déplacement d'affaires en une véritable expérience de luxe." }
    ],
    en: [
      { name: "Jean-Paul V.", role: "CEO", text: "A formidable concierge service. My partners were impressed by the quality of the dinners and access to the private golf course." },
      { name: "Élodie B.", role: "Associate Director", text: "Discretion, efficiency and exclusive places. Happycore transformed this business trip into a true luxury experience." }
    ],
    ar: [
      { name: "جان بول ف.", role: "الرئيس التنفيذي", text: "خدمة كونسيرج هائلة. انبهر شركائي بجودة العشاءات والوصول إلى ملعب الغولف الخاص." },
      { name: "إيلودي ب.", role: "مديرة مشاركة", text: "التكتم والكفاءة والأماكن الحصرية. حولت هابيكور رحلة العمل هذه إلى تجربة فاخرة حقيقية." }
    ]
  }
};

export function Testimonials({ type }: { type: 'sisterhood' | 'roots' | 'executive' }) {
  const { locale } = useI18n();
  const typeReviews = (reviews[type] as any)[locale] || (reviews[type] as any).fr;

  return (
    <section className="py-16 md:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12 text-stone-900">
          {locale === 'fr' ? 'Ce que nos clients disent' : 
           locale === 'en' ? 'What our clients say' : 
           'ماذا يقول عملاؤنا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {typeReviews.map((review: any, idx: number) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current" />)}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed text-sm md:text-base">"{review.text}"</p>
              <div>
                <p className="font-bold text-stone-900 text-sm md:text-base">{review.name}</p>
                <p className="text-xs md:text-sm text-stone-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
