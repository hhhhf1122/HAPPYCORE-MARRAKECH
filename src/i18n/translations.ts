export type Locale = 'fr' | 'en' | 'ar';

export type LocaleConfig = {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
};

export const LOCALES: LocaleConfig[] = [
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', flag: '🇫🇷' },
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇲🇦' }
];

export const DEFAULT_LOCALE: Locale = 'fr';

export const translations = {
  common: {
    brand: { fr: 'Happycore', en: 'Happycore', ar: 'هابيكور' },
    menu: { fr: 'Menu', en: 'Menu', ar: 'القائمة' },
    close: { fr: 'Fermer', en: 'Close', ar: 'إغلاق' },
    home: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' },
    blog: { fr: 'Blog', en: 'Blog', ar: 'المدونة' },
    readMore: { fr: 'Lire la suite', en: 'Read more', ar: 'اقرأ المزيد' },
    backToTop: { fr: 'Retour en haut', en: 'Back to top', ar: 'العودة للأعلى' },
    location: { fr: 'Marrakech, Maroc', en: 'Marrakech, Morocco', ar: 'مراكش، المغرب' },
    legal: { fr: 'Mentions Légales', en: 'Legal Notice', ar: 'الإشعار القانوني' },
    privacy: { fr: 'Confidentialité', en: 'Privacy', ar: 'الخصوصية' },
    allRightsReserved: { fr: 'Tous droits réservés', en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
    loading: { fr: 'Chargement...', en: 'Loading...', ar: 'جار التحميل...' },
    pageNotFound: { fr: 'Page introuvable', en: 'Page not found', ar: 'الصفحة غير موجودة' },
    goHome: { fr: "Retourner à l'accueil", en: 'Return home', ar: 'العودة للرئيسية' },
    discover: { fr: "Découvrir l'offre", en: 'Discover', ar: 'اكتشف' },
    contactUs: { fr: 'Nous contacter', en: 'Contact us', ar: 'اتصل بنا' },
    learnMore: { fr: 'En savoir plus', en: 'Learn more', ar: 'اعرف المزيد' },
    and: { fr: 'et', en: 'and', ar: 'و' }
  },
  nav: {
    sisterhood: { fr: 'Sisterhood', en: 'Sisterhood', ar: 'الأخوة' },
    roots: { fr: 'Roots', en: 'Roots', ar: 'الجذور' },
    executive: { fr: 'Executive', en: 'Executive', ar: 'التنفيذي' }
  },
  footer: {
    experiences: { fr: 'Expériences', en: 'Experiences', ar: 'التجارب' },
    contactConcierge: { fr: 'Contact & Conciergerie', en: 'Contact & Concierge', ar: 'الاتصال والخدمة' },
    description: {
      fr: "Redéfinissez l'art du voyage. Des expériences sur-mesure au cœur du Maroc, conçues pour inspirer, connecter et transformer.",
      en: 'Redefine the art of travel. Bespoke experiences in the heart of Morocco, designed to inspire, connect and transform.',
      ar: 'أعد تعريف فن السفر. تجارب مصممة خصيصًا في قلب المغرب، مصممة للإلهام والربط والتحويل.'
    },
    email: { fr: 'concierge@happycore.com', en: 'concierge@happycore.com', ar: 'concierge@happycore.com' },
    whatsapp: { fr: 'WhatsApp concierge', en: 'WhatsApp concierge', ar: 'واتساب الخدمة' }
  },
  trustBadges: {
    title: { fr: 'Engagements & Garanties Happycore', en: 'Happycore Commitments', ar: 'التزامات هابيكور' },
    safety: { fr: 'Sécurité Auditée', en: 'Audited Safety', ar: 'أمان مدقق' },
    guides: { fr: 'Guides Certifiés', en: 'Certified Guides', ar: 'مرشدون معتمدون' },
    support: { fr: 'Assistance 24/7', en: '24/7 Support', ar: 'دعم على مدار الساعة' },
    excellence: { fr: 'Excellence Client', en: 'Customer Excellence', ar: 'تميز العملاء' }
  },
  newsletter: {
    title: { fr: 'Recevez nos guides privés et offres en avant-première', en: 'Receive our private guides and exclusive offers', ar: 'احصل على أدلتنا الخاصة والعروض الحصرية' },
    description: {
      fr: "Conseils de voyage, itinéraires secrets et invitations aux prochaines éditions. Zéro spam, uniquement du contenu à forte valeur.",
      en: 'Travel tips, secret itineraries and invitations to upcoming editions. Zero spam, only high-value content.',
      ar: 'نصائح السفر ومسارات سرية ودعوات للطبعات القادمة. صفر رسائل غير مرغوب فيها، فقط محتوى عالي القيمة.'
    },
    placeholder: { fr: 'votre@email.com', en: 'your@email.com', ar: 'بريدك@الإلكتروني.كوم' },
    subscribe: { fr: "S'inscrire", en: 'Subscribe', ar: 'اشترك' },
    thanks: { fr: "Merci ! Votre inscription est confirmée.", en: 'Thanks! Your subscription is confirmed.', ar: 'شكرًا! تم تأكيد اشتراكك.' },
    privacyNote: { fr: "En vous inscrivant, vous acceptez notre politique de confidentialité.", en: 'By subscribing, you accept our privacy policy.', ar: 'بالاشتراك، فإنك تقبل سياسة الخصوصية الخاصة بنا.' }
  },
  media: {
    title: { fr: 'Ils parlent de nous', en: 'As featured in', ar: 'كما ظهر في' }
  },
  home: {
    heroEyebrow: { fr: 'Voyages d\'exception · Marrakech', en: 'Exceptional Travel · Marrakech', ar: 'سفر استثنائي · مراكش' },
    heroTitle: { fr: 'Redéfinissez le Voyage.', en: 'Redefine Travel.', ar: 'أعد تعريف السفر.' },
    heroSubtitle: {
      fr: 'Trois expériences sur-mesure au cœur du Maroc, conçues pour inspirer, connecter et transformer.',
      en: 'Three bespoke experiences in the heart of Morocco, designed to inspire, connect and transform.',
      ar: 'ثلاث تجارب مصممة خصيصًا في قلب المغرب، للإلهام والربط والتحويل.'
    },
    heroCta: { fr: 'Trouver mon expérience', en: 'Find my experience', ar: 'ابحث عن تجربتي' },
    heroScroll: { fr: 'Explorer', en: 'Explore', ar: 'استكشف' },
    selectorTitle: { fr: 'Quelle expérience vous correspond ?', en: 'Which experience fits you?', ar: 'أي تجربة تناسبك؟' },
    selectorSubtitle: {
      fr: 'Répondez à trois questions. Nous vous guidons vers le voyage parfait.',
      en: 'Answer three questions. We guide you to the perfect journey.',
      ar: 'أجب عن ثلاثة أسئلة. نرشدك إلى الرحلة المثالية.'
    },
    selectorQuestion1: { fr: 'Quel est votre objectif principal ?', en: 'What is your main goal?', ar: 'ما هو هدفك الرئيسي؟' },
    selectorQ1A1: { fr: 'Voyager en sécurité, en tant que femme', en: 'Travel safely, as a woman', ar: 'السفر بأمان كامرأة' },
    selectorQ1A2: { fr: 'Reconnecter avec mon héritage', en: 'Reconnect with my heritage', ar: 'إعادة الاتصال بتراثي' },
    selectorQ1A3: { fr: 'Réseauter et faire du business', en: 'Network and do business', ar: 'التواصل والأعمال' },
    selectorQuestion2: { fr: 'Combien de jours avez-vous ?', en: 'How many days do you have?', ar: 'كم يومًا لديك؟' },
    selectorQ2A1: { fr: '4-5 jours', en: '4-5 days', ar: '4-5 أيام' },
    selectorQ2A2: { fr: '5-6 jours', en: '5-6 days', ar: '5-6 أيام' },
    selectorQ2A3: { fr: 'Flexible', en: 'Flexible', ar: 'مرن' },
    selectorQuestion3: { fr: 'Votre budget par personne ?', en: 'Your budget per person?', ar: 'ميزانيتك لكل شخص؟' },
    selectorQ3A1: { fr: '1 500€ - 2 500€', en: '1,500€ - 2,500€', ar: '1,500€ - 2,500€' },
    selectorQ3A2: { fr: '2 000€ - 3 000€', en: '2,000€ - 3,000€', ar: '2,000€ - 3,000€' },
    selectorQ3A3: { fr: '3 000€+', en: '3,000€+', ar: '3,000€+' },
    selectorResult: { fr: 'Votre expérience idéale', en: 'Your ideal experience', ar: 'تجربتك المثالية' },
    selectorRecommendation: { fr: 'Nous vous recommandons', en: 'We recommend', ar: 'نوصي بـ' },
    selectorReset: { fr: 'Recommencer', en: 'Start over', ar: 'ابدأ من جديد' },
    selectorFrom: { fr: 'À partir de', en: 'From', ar: 'ابتداءً من' },
    selectorDuration: { fr: 'durée', en: 'duration', ar: 'المدة' },
    statsTitle: { fr: 'Pourquoi nous choisir', en: 'Why choose us', ar: 'لماذا تختارنا' },
    statTravelers: { fr: 'Voyageuses', en: 'Travelers', ar: 'مسافرات' },
    statRating: { fr: 'Satisfaction', en: 'Satisfaction', ar: 'الرضا' },
    statYears: { fr: 'Années d\'expertise', en: 'Years of expertise', ar: 'سنوات من الخبرة' },
    statRepeat: { fr: 'Reviennent', en: 'Return', ar: 'يعودون' },
    sisterhoodDesc: {
      fr: 'Séjour sécurisé pour femmes voyageant seules au Maroc. Chauffeuse dédiée, riad audité, sérénité absolue.',
      en: 'Secure stay for women traveling alone in Morocco. Dedicated driver, audited riad, absolute serenity.',
      ar: 'إقامة آمنة للنساء المسافرات بمفردهن في المغرب. سائقة مخصصة، رياض مدقق، صفاء تام.'
    },
    rootsDesc: {
      fr: "Voyage Héritage pour la diaspora afro. Culture Gnawa, routes transsahariennes, immersion authentique.",
      en: 'Heritage travel for the Afro diaspora. Gnawa culture, trans-Saharan routes, authentic immersion.',
      ar: 'سفر تراثي للجالية الأفريقية. ثقافة كناوة، طرق عبر الصحراء، انغماس أصيل.'
    },
    executiveDesc: {
      fr: "Déplacement stratégique à Marrakech. Golf privé, networking qualifié, conciergerie d'excellence.",
      en: 'Strategic business trip to Marrakech. Private golf, qualified networking, excellence concierge.',
      ar: 'رحلة عمل استراتيجية إلى مراكش. غولف خاص، شبكة علاقات مؤهلة، خدمة كونسيرج متميزة.'
    },
    blogTitle: {
      fr: "Des articles pensés pour capter les recherches longues et les vraies intentions de réservation.",
      en: 'Articles designed to capture long searches and real booking intentions.',
      ar: 'مقالات مصممة لالتقاط عمليات البحث الطويلة ونوايا الحجز الحقيقية.'
    },
    blogSubtitle: {
      fr: "Chaque article répond à une intention précise: sécurité, héritage culturel ou séjour business premium.",
      en: 'Each article answers a specific intent: safety, cultural heritage or premium business stay.',
      ar: 'كل مقال يجيب على نية محددة: السلامة، التراث الثقافي أو إقامة عمل متميزة.'
    },
    blogLabel: { fr: 'Blog & guides', en: 'Blog & guides', ar: 'المدونة والأدلة' },
    allGuides: { fr: 'Voir tous les guides', en: 'See all guides', ar: 'شاهد جميع الأدلة' },
    sectionSubtitle: { fr: 'Nos trois univers', en: 'Our three universes', ar: 'عوالمنا الثلاثة' },
    sectionTitle: { fr: 'Une expérience pour chaque voyageur', en: 'An experience for every traveler', ar: 'تجربة لكل مسافر' },
    fromLabel: { fr: 'À partir de', en: 'From', ar: 'ابتداءً من' },
    durationLabel: { fr: 'Durée', en: 'Duration', ar: 'المدة' },
    heroTravelers: { fr: '480+', en: '480+', ar: '480+' },
    dur5j: { fr: '5 jours', en: '5 days', ar: '5 أيام' },
    dur6j: { fr: '6 jours', en: '6 days', ar: '6 أيام' },
    durFlex: { fr: 'Flexible', en: 'Flexible', ar: 'مرن' }
  },
  sisterhood: {
    badge: { fr: 'Exclusivité Femme', en: 'Women Exclusive', ar: 'حصري للنساء' },
    title1: { fr: 'Votre Voyage Solo,', en: 'Your Solo Journey,', ar: 'رحلتك الفردية،' },
    title2: { fr: 'En Toute Sécurité.', en: 'In Complete Safety.', ar: 'بأمان تام.' },
    subtitle: {
      fr: 'Séjour de 5 jours à Marrakech pour femmes voyageant seules. Chauffeuse dédiée, riad audité, groupe intime de 6 personnes maximum. Reprenez le pouvoir sur vos aventures.',
      en: '5-day stay in Marrakech for women traveling alone. Dedicated driver, audited riad, intimate group of 6 maximum. Take back the power over your adventures.',
      ar: 'إقامة لمدة 5 أيام في مراكش للنساء المسافرات بمفردهن. سائقة مخصصة، رياض مدقق، مجموعة حميمة من 6 أشخاص كحد أقصى.'
    },
    meta: {
      fr: 'Séjour 5 jours pour femmes voyageant seules au Maroc. Chauffeuse dédiée, riad audité, groupe de 6 max. Réservez sans engagement.',
      en: '5-day stay for women traveling alone in Morocco. Dedicated driver, audited riad, group of 6 max. Book without commitment.',
      ar: 'إقامة 5 أيام للنساء المسافرات بمفردهن في المغرب. سائقة مخصصة، رياض مدقق، مجموعة من 6 أشخاص كحد أقصى.'
    },
    seoTitle: { fr: 'Voyage Solo Femme Marrakech Sécurisé', en: 'Safe Solo Female Travel Marrakech', ar: 'سفر منفرد آمن للنساء مراكش' },
    cta: { fr: 'Vérifier les disponibilités', en: 'Check availability', ar: 'تحقق من التوفر' },
    scarcity: { fr: 'Seulement 6 places par édition', en: 'Only 6 places per edition', ar: '6 أماكن فقط لكل طبعة' },
    promise: { fr: 'La promesse Happycore Sisterhood', en: 'The Happycore Sisterhood promise', ar: 'وعد هابيكور للأخوة' },
    promiseSub: {
      fr: "Nous avons conçu chaque détail pour garantir votre tranquillité d'esprit, de l'arrivée au départ.",
      en: 'We designed every detail to guarantee your peace of mind, from arrival to departure.',
      ar: 'صممنا كل التفاصيل لضمان راحة بالك، من الوصول إلى المغادرة.'
    },
    safetyTitle: { fr: 'Sécurité Maximale', en: 'Maximum Safety', ar: 'أمان أقصى' },
    safetyDesc: {
      fr: 'Chauffeuse privée dédiée pour tous vos déplacements. Nos riads partenaires sont strictement audités.',
      en: 'Dedicated private driver for all your trips. Our partner riads are strictly audited.',
      ar: 'سائقة خاصة مخصصة لجميع رحلاتك. يتم تدقيق رياضاتنا الشريكة بدقة.'
    },
    groupTitle: { fr: 'Petit Groupe', en: 'Small Group', ar: 'مجموعة صغيرة' },
    groupDesc: {
      fr: "Un maximum de 6 femmes par séjour pour privilégier les connexions authentiques et l'ambiance sororale.",
      en: 'A maximum of 6 women per stay to promote authentic connections and a sisterly atmosphere.',
      ar: '6 نساء كحد أقصى لكل إقامة لتعزيز الروابط الأصيلة والأجواء الأخوية.'
    },
    relaxTitle: { fr: 'Lâcher-prise Total', en: 'Total Letting Go', ar: 'الاسترخاء التام' },
    relaxDesc: {
      fr: "Aucune charge mentale. Itinéraire pré-organisé, réservations incluses, assistance 24/7.",
      en: 'No mental load. Pre-organized itinerary, reservations included, 24/7 assistance.',
      ar: 'لا عبء ذهني. مسار منظم مسبقًا، حجوزات شاملة، مساعدة على مدار الساعة.'
    },
    programLabel: { fr: 'Le Programme', en: 'The Program', ar: 'البرنامج' },
    programTitle: { fr: 'Ce qui est inclus dans votre séjour', en: 'What is included in your stay', ar: 'ما هو مدرج في إقامتك' },
    inclusions: [
      {
        fr: 'Hébergement 4 nuits dans un Riad traditionnel privatisé au cœur de la Médina.',
        en: '4-night accommodation in a privatized traditional Riad in the heart of the Medina.',
        ar: 'إقامة 4 ليالٍ في رياض تقليدي خاص في قلب المدينة القديمة.'
      },
      {
        fr: 'Petits-déjeuners gourmands et dîner de bienvenue traditionnel.',
        en: 'Gourmet breakfasts and traditional welcome dinner.',
        ar: 'إفطور ذواقة وعشاء ترحيبي تقليدي.'
      },
      {
        fr: 'Transferts aéroport aller-retour sécurisés avec notre chauffeuse.',
        en: 'Secure round-trip airport transfers with our driver.',
        ar: 'انتقالات ذهاب وإياب آمنة من المطار مع سائقتنا.'
      },
      {
        fr: 'Visite guidée de la Médina par une experte locale accréditée.',
        en: 'Guided tour of the Medina by an accredited local expert.',
        ar: 'جولة إرشادية في المدينة القديمة مع خبيرة محلية معتمدة.'
      },
      {
        fr: 'Journée bien-être : Hammam traditionnel et massage relaxant.',
        en: 'Wellness day: Traditional hammam and relaxing massage.',
        ar: 'يوم صحي: حمام تقليدي وتدليك مريح.'
      },
      {
        fr: 'Atelier cuisine marocaine entre femmes dans la bonne humeur.',
        en: 'Moroccan cooking workshop among women in a cheerful atmosphere.',
        ar: 'ورشة طبخ مغربي بين النساء في جو مبهج.'
      }
    ],
    ctaWaitlist: { fr: "Rejoindre la liste d'attente", en: 'Join the waitlist', ar: 'انضم إلى قائمة الانتظار' },
    noCommitment: { fr: 'Sans engagement de paiement immédiat. Places limitées.', en: 'No immediate payment commitment. Limited places.', ar: 'بدون التزام دفع فوري. أماكن محدودة.' },
    readGuide: { fr: 'Lire le guide sécurité avant de réserver', en: 'Read the safety guide before booking', ar: 'اقرأ دليل الأمان قبل الحجز' }
  },
  roots: {
    badge: { fr: 'Voyage Héritage Exclusif', en: 'Exclusive Heritage Trip', ar: 'رحلة تراثية حصرية' },
    title1: { fr: "Reconnectez avec l'Âme", en: 'Reconnect with the Soul', ar: 'أعد الاتصال بالروح' },
    title2: { fr: "de l'Afrique.", en: 'of Africa.', ar: 'أفريقيا.' },
    subtitle: {
      fr: "Un voyage immersif de 6 jours à Marrakech et Essaouira conçu pour la diaspora afro. Explorez la culture Gnawa, marchez sur les anciennes routes transsahariennes et rencontrez des communautés vivantes.",
      en: 'A 6-day immersive trip in Marrakech and Essaouira designed for the Afro diaspora. Explore Gnawa culture, walk the old trans-Saharan routes and meet living communities.',
      ar: 'رحلة غامرة لمدة 6 أيام في مراكش والصويرة مصممة للجالية الأفريقية. استكشف ثقافة كناوة، وامشِ على طرق عبر الصحراء القديمة والتقِ بمجتمعات حية.'
    },
    meta: {
      fr: "Voyage pour la diaspora afro au Maroc : culture Gnawa, routes transsahariennes. 6 jours d'immersion à Marrakech et Essaouira. Postulez maintenant.",
      en: 'Trip for the Afro diaspora in Morocco: Gnawa culture, trans-Saharan routes. 6 days of immersion in Marrakech and Essaouira. Apply now.',
      ar: 'رحلة للجالية الأفريقية في المغرب: ثقافة كناوة، طرق عبر الصحراء. 6 أيام من الانغماس في مراكش والصويرة. قدم الآن.'
    },
    seoTitle: { fr: 'Black Travel Morocco | Voyage Héritage Gnawa', en: 'Black Travel Morocco | Gnawa Heritage Journey', ar: 'سفر السود المغرب | رحلة تراث كناوة' },
    cta: { fr: "Postuler pour l'expédition", en: 'Apply for the expedition', ar: 'قدم للرحلة الاستكشافية' },
    scarcity: { fr: 'Forte demande. Prochaine date bientôt complète.', en: 'High demand. Next date filling fast.', ar: 'طلب عالي. التاريخ التالي يمتلئ بسرعة.' },
    exploration: { fr: 'Une exploration culturelle profonde', en: 'A deep cultural exploration', ar: 'استكشاف ثقافي عميق' },
    explorationSub: {
      fr: "Bien plus qu'un séjour touristique, c'est une véritable immersion dans l'histoire afro-marocaine.",
      en: 'Much more than a tourist stay, it is a true immersion in Afro-Moroccan history.',
      ar: 'أكثر بكثير من إقامة سياحية، إنها انغماس حقيقي في التاريخ الأفريقي المغربي.'
    },
    gnawaTitle: { fr: 'Culture Gnawa', en: 'Gnawa Culture', ar: 'ثقافة كناوة' },
    gnawaDesc: {
      fr: 'Plongez dans les rythmes spirituels des confréries Gnawa à Essaouira, descendants des populations subsahariennes.',
      en: 'Dive into the spiritual rhythms of the Gnawa brotherhoods in Essaouira, descendants of sub-Saharan populations.',
      ar: 'انغمس في الإيقاعات الروحية لطرق كناوة في الصويرة، أحفاد شعوب جنوب الصحراء.'
    },
    routesTitle: { fr: 'Routes Transsahariennes', en: 'Trans-Saharan Routes', ar: 'طرق عبر الصحراء' },
    routesDesc: {
      fr: "Découvrez les carrefours historiques qui reliaient le Maroc à l'Afrique de l'Ouest depuis des siècles.",
      en: 'Discover the historical crossroads that have linked Morocco to West Africa for centuries.',
      ar: 'اكتشف التقاطعات التاريخية التي ربطت المغرب بغرب أفريقيا لقرون.'
    },
    communityTitle: { fr: 'Communauté Vivante', en: 'Living Community', ar: 'مجتمع حي' },
    communityDesc: {
      fr: 'Rencontrez des artisans, historiens et artistes locaux pour un échange authentique et réciproque.',
      en: 'Meet local artisans, historians and artists for an authentic and reciprocal exchange.',
      ar: 'التقِ بالحرفيين والمؤرخين والفنانين المحليين لتبادل أصيل ومتبادل.'
    },
    stayLabel: { fr: 'Le Séjour', en: 'The Stay', ar: 'الإقامة' },
    stayTitle: { fr: 'Votre itinéraire Héritage', en: 'Your Heritage itinerary', ar: 'مسار تراثك' },
    stayInclusions: [
      {
        fr: '6 jours et 5 nuits entre la vibrante Marrakech et la sereine Essaouira.',
        en: '6 days and 5 nights between vibrant Marrakech and serene Essaouira.',
        ar: '6 أيام و5 ليالٍ بين مراكش النابضة والصويرة الهادئة.'
      },
      {
        fr: 'Cérémonie privée de musique Gnawa et rencontre avec un Maâlem.',
        en: 'Private Gnawa music ceremony and meeting with a Maâlem.',
        ar: 'حفلة موسيقى كناوة خاصة ولقاء مع المعلم.'
      },
      {
        fr: "Exploration de l'ancienne médina et de son histoire cachée par des locaux.",
        en: 'Exploration of the old medina and its hidden history by locals.',
        ar: 'استكشاف المدينة القديمة وتاريخها المخفي من قبل السكان المحليين.'
      },
      {
        fr: "Hébergement dans des lieux chargés d'histoire, de charme et d'âme.",
        en: 'Accommodation in places steeped in history, charm and soul.',
        ar: 'إقامة في أماكن مشبعة بالتاريخ والسحر والروح.'
      },
      {
        fr: "Dîners thématiques autour de l'héritage culinaire afro-marocain.",
        en: 'Themed dinners around Afro-Moroccan culinary heritage.',
        ar: 'عشاءات مواضيعية حول التراث الطهوي الأفريقي المغربي.'
      },
      {
        fr: 'Transport privé et guide culturel expert francophone/anglophone.',
        en: 'Private transport and expert French/English-speaking cultural guide.',
        ar: 'نقل خاص ومرشد ثقافي خبير يتحدث الفرنسية/الإنجليزية.'
      }
    ],
    ctaCall: { fr: 'Réserver mon appel découverte', en: 'Book my discovery call', ar: 'احجز مكالمة الاكتشاف' },
    scarcitySmall: { fr: "Places extrêmement limitées pour privilégier l'expérience de groupe.", en: 'Extremely limited places to prioritize group experience.', ar: 'أماكن محدودة للغاية لإعطاء الأولوية للتجربة الجماعية.' },
    readArticle: { fr: "Lire l'article sur le voyage afro au Maroc", en: 'Read the article on Afro travel to Morocco', ar: 'اقرأ المقال عن السفر الأفريقي إلى المغرب' }
  },
  executive: {
    badge: { fr: "Conciergerie d'Excellence", en: 'Excellence Concierge', ar: 'خدمة كونسيرج متميزة' },
    title1: { fr: 'Le Déplacement', en: 'The Strategic', ar: 'الرحلة' },
    title2: { fr: 'Stratégique.', en: 'Trip.', ar: 'الاستراتيجية.' },
    subtitle: {
      fr: "Marrakech comme vous ne l'avez jamais vécue. Golf privé, networking qualifié, dîners gastronomiques et conciergerie VIP pour décideurs exigeants.",
      en: 'Marrakech as you have never experienced it. Private golf, qualified networking, gourmet dinners and VIP concierge for demanding decision-makers.',
      ar: 'مراكش كما لم تختبرها من قبل. غولف خاص، شبكة علاقات مؤهلة، عشاءات ذواقة وخدمة كونسيرج VIP لصناع القرار المتطلبين.'
    },
    meta: {
      fr: 'Déplacement stratégique et conciergerie à Marrakech : golf privé, networking qualifié, dîners. Discrétion absolue pour décideurs. Demandez un appel.',
      en: 'Strategic trip and concierge in Marrakech: private golf, qualified networking, dinners. Absolute discretion for decision-makers. Request a call.',
      ar: 'رحلة استراتيجية وخدمة كونسيرج في مراكش: غولف خاص، شبكة علاقات مؤهلة، عشاءات. تكتم مطلق لصناع القرار. اطلب مكالمة.'
    },
    seoTitle: { fr: 'Business Trip Marrakech Golf', en: 'Marrakech Business Trip Golf', ar: 'رحلة عمل مراكش غولف' },
    cta: { fr: 'Réserver un appel confidentiel', en: 'Book a confidential call', ar: 'احجز مكالمة سرية' },
    discretion: { fr: 'Discrétion absolue garantie.', en: 'Absolute discretion guaranteed.', ar: 'التكتم المطلق مضمون.' },
    standardTitle: { fr: "Un standard d'exigence unique", en: 'A unique standard of excellence', ar: 'معيار فريد للتميز' },
    standardSub: {
      fr: "Chaque détail est orchestré pour optimiser votre temps et maximiser l'impact de votre séjour.",
      en: 'Every detail is orchestrated to optimize your time and maximize the impact of your stay.',
      ar: 'يتم تنسيق كل التفاصيل لتحسين وقتك وتعظيم تأثير إقامتك.'
    },
    conciergeTitle: { fr: 'Conciergerie Dédiée', en: 'Dedicated Concierge', ar: 'كونسيرج مخصص' },
    conciergeDesc: {
      fr: 'Logistique ultra-fluide, transferts en berline de luxe, accès coupe-file et réservations dans les établissements les plus exclusifs.',
      en: 'Ultra-fluid logistics, luxury sedan transfers, skip-the-line access and reservations in the most exclusive establishments.',
      ar: 'لوجستيات فائقة السلاسة، انتقالات بسيارة فاخرة، وصول سريع وحجوزات في أرقى المؤسسات.'
    },
    sportTitle: { fr: 'Sport & Business', en: 'Sport & Business', ar: 'الرياضة والأعمال' },
    sportDesc: {
      fr: 'Accès prioritaire aux parcours de golf les plus prestigieux et aux courts de tennis privés.',
      en: 'Priority access to the most prestigious golf courses and private tennis courts.',
      ar: 'وصول ذو أولوية لأرقى ملاعب الغولف وملاعب التنس الخاصة.'
    },
    networkTitle: { fr: 'Networking Qualifié', en: 'Qualified Networking', ar: 'شبكة علاقات مؤهلة' },
    networkDesc: {
      fr: "Rencontres orchestrées avec des acteurs clés locaux, dîners d'affaires très discrets et événements de réseautage sur-mesure.",
      en: 'Meetings orchestrated with key local players, very discreet business dinners and tailor-made networking events.',
      ar: 'اجتماعات منسقة مع لاعبين محليين رئيسيين، عشاءات عمل سرية للغاية وفعاليات تواصل مصممة خصيصًا.'
    },
    methodology: { fr: 'Méthodologie', en: 'Methodology', ar: 'المنهجية' },
    methodTitle: { fr: "L'Excellence comme standard", en: 'Excellence as standard', ar: 'التميز كمعيار' },
    methodDesc: {
      fr: "Notre offre Executive est pensée pour les leaders qui ne font aucun compromis entre l'efficacité professionnelle et le raffinement personnel.",
      en: 'Our Executive offer is designed for leaders who make no compromise between professional efficiency and personal refinement.',
      ar: 'عرضنا التنفيذي مصمم للقادة الذين لا يقدمون أي حل وسط بين الكفاءة المهنية والصقل الشخصي.'
    },
    steps: [
      {
        title: { fr: 'Diagnostic Personnalisé', en: 'Personalized Diagnosis', ar: 'تشخيص شخصي' },
        desc: {
          fr: "Lors d'un premier appel, nous définissons ensemble vos objectifs business, votre emploi du temps et vos préférences.",
          en: 'During a first call, we define together your business objectives, your schedule and your preferences.',
          ar: 'خلال المكالمة الأولى، نحدد معًا أهدافك التجارية وجدولك وتفضيلاتك.'
        }
      },
      {
        title: { fr: 'Conception Sur-Mesure', en: 'Bespoke Design', ar: 'تصميم مخصص' },
        desc: {
          fr: "Création d'un itinéraire exclusif incluant green fees, tables étoilées et salles de réunions privées.",
          en: 'Creation of an exclusive itinerary including green fees, starred tables and private meeting rooms.',
          ar: 'إنشاء مسار حصري يشمل رسوم الملعب وطاولات مميزة وغرف اجتماعات خاصة.'
        }
      },
      {
        title: { fr: 'Exécution Parfaite', en: 'Perfect Execution', ar: 'تنفيذ مثالي' },
        desc: {
          fr: "Une présence sur place discrète mais redoutablement efficace pour anticiper et garantir le bon déroulement.",
          en: 'A discreet but formidable presence on site to anticipate and guarantee the smooth running.',
          ar: 'وجود سري ولكن فعال بشكل هائل في الموقع لتوقع وضمان سير العمل بسلاسة.'
        }
      }
    ],
    ctaPlan: { fr: 'Initier la planification', en: 'Initiate planning', ar: 'ابدأ التخطيط' },
    readGuide: { fr: 'Lire le guide business trip Marrakech', en: 'Read the Marrakech business trip guide', ar: 'اقرأ دليل رحلة عمل مراكش' }
  },
  blog: {
    title: {
      fr: 'Des articles pensés pour capter les recherches longues et les vraies intentions de réservation.',
      en: 'Articles designed to capture long searches and real booking intentions.',
      ar: 'مقالات مصممة لالتقاط عمليات البحث الطويلة ونوايا الحجز الحقيقية.'
    },
    description: {
      fr: "Nos contenus répondent aux questions précises que vos futurs voyageurs se posent avant d'acheter.",
      en: 'Our content answers the specific questions your future travelers ask themselves before buying.',
      ar: 'محتوانا يجيب على الأسئلة المحددة التي يطرحها مسافروك المستقبليون قبل الشراء.'
    },
    editorial: { fr: 'Guides éditoriaux', en: 'Editorial guides', ar: 'أدلة تحريرية' },
    keyword: { fr: 'Mot-cle cible', en: 'Target keyword', ar: 'الكلمة المستهدفة' },
    notFound: { fr: 'Article introuvable', en: 'Article not found', ar: 'المقال غير موجود' },
    notFoundDesc: { fr: 'Ce guide n\'existe plus.', en: 'This guide no longer exists.', ar: 'هذا الدليل لم يعد موجودًا.' },
    backToBlog: { fr: 'Retour au blog', en: 'Back to blog', ar: 'العودة إلى المدونة' },
    faq: { fr: 'Questions fréquentes', en: 'Frequently asked questions', ar: 'الأسئلة الشائعة' },
    nextStep: { fr: 'Prochaine etape', en: 'Next step', ar: 'الخطوة التالية' },
    goToExperience: { fr: "Passez de la lecture a l'experience.", en: 'Go from reading to experience.', ar: 'انتقل من القراءة إلى التجربة.' },
    relatedArticles: { fr: 'Articles lies', en: 'Related articles', ar: 'مقالات ذات صلة' },
    allArticles: { fr: 'Voir tous les guides', en: 'See all guides', ar: 'شاهد جميع الأدلة' },
    goBack: { fr: 'Retournez au blog pour choisir un autre article.', en: 'Go back to the blog to choose another article.', ar: 'عد إلى المدونة لاختيار مقال آخر.' },
    readAnother: { fr: 'Lire un autre guide :', en: 'Read another guide:', ar: 'اقرأ دليل آخر:' },
    authorName: { fr: 'Happycore Editorial', en: 'Happycore Editorial', ar: 'هابي كور التحرير' },
    authorRole: { fr: 'Équipe de rédaction', en: 'Editorial Team', ar: 'فريق التحرير' },
    authorDesc: { fr: 'Nos guides sont rédigés par l\'équipe Happycore, spécialiste des voyages stratégiques et culturels au Maroc.', en: 'Our guides are written by the Happycore team, specialists in strategic and cultural travel in Morocco.', ar: 'أدلتنا من إعداد فريق هابي كور، المتخصصين في السفر الاستراتيجي والثقافي في المغرب.' }
  },
  reserve: { fr: 'Réserver', en: 'Reserve', ar: 'احجز' },
  stickyCTA: {
    sisterhood: { fr: 'Vérifier les disponibilités', en: 'Check availability', ar: 'تحقق من التوفر' },
    roots: { fr: 'Postuler pour Roots', en: 'Apply for Roots', ar: 'قدم للجذور' },
    executive: { fr: 'Appel concierge', en: 'Concierge call', ar: 'مكالمة الكونسيرج' }
  },
  whatsapp: {
    label: { fr: 'WhatsApp concierge', en: 'WhatsApp concierge', ar: 'واتساب الخدمة' }
  },
  reservation: {
    seoTitle: { fr: 'Réserver votre expérience | Happycore', en: 'Book your experience | Happycore', ar: 'احجز تجربتك | هابيكور' },
    seoDesc: { fr: 'Dites-nous en plus sur votre voyage idéal au Maroc et recevez une proposition sur-mesure.', en: 'Tell us more about your ideal trip to Morocco and receive a tailor-made proposal.', ar: 'أخبرنا المزيد عن رحلتك المثالية في المغرب واحصل على عرض مخصص.' },
    startYourJourney: { fr: 'Commencez votre voyage', en: 'Start your journey', ar: 'ابدأ رحلتك' },
    title: { fr: 'Parlez-nous de votre voyage idéal au Maroc', en: 'Tell us about your ideal trip to Morocco', ar: 'أخبرنا عن رحلتك المثالية في المغرب' },
    subtitle: { fr: 'Quelques questions pour mieux comprendre vos envies. Notre équipe vous recontacte ensuite avec une proposition sur-mesure.', en: 'A few questions to better understand your wishes. Our team will then get back to you with a tailor-made proposal.', ar: 'بضعة أسئلة لفهم رغباتك بشكل أفضل. سيتصل بك فريقنا بعد ذلك بعرض مخصص.' },
    contactInfo: { fr: 'Vos coordonnées', en: 'Your contact details', ar: 'بيانات الاتصال الخاصة بك' },
    fullName: { fr: 'Nom complet', en: 'Full name', ar: 'الاسم الكامل' },
    email: { fr: 'Email', en: 'Email', ar: 'البريد الإلكتروني' },
    phone: { fr: 'Téléphone (optionnel)', en: 'Phone (optional)', ar: 'الهاتف (اختياري)' },
    groupSize: { fr: 'Nombre de voyageurs', en: 'Number of travelers', ar: 'عدد المسافرين' },
    experienceTitle: { fr: 'Quelle expérience vous attire ?', en: 'Which experience attracts you?', ar: 'أي تجربة تجذبك؟' },
    activitiesTitle: { fr: 'Activités qui vous intéressent', en: 'Activities that interest you', ar: 'الأنشطة التي تهمك' },
    guideTitle: { fr: 'Quelle importance accordez-vous à un guide certifié ?', en: 'How important is a certified guide to you?', ar: 'ما أهمية الدليل المعتمد لك؟' },
    practicalDetails: { fr: 'Détails pratiques', en: 'Practical details', ar: 'التفاصيل العملية' },
    travelPeriod: { fr: 'Période envisagée', en: 'Travel period', ar: 'فترة السفر' },
    travelPeriodPlaceholder: { fr: 'Ex : Mars 2027', en: 'Ex: March 2027', ar: 'مثال: مارس 2027' },
    messageTitle: { fr: 'Un mot pour nous ? (optionnel)', en: 'A word for us? (optional)', ar: 'كلمة لنا؟ (اختياري)' },
    messagePlaceholder: { fr: 'Besoins spécifiques, contraintes, envies particulières...', en: 'Specific needs, constraints, particular wishes...', ar: 'احتياجات محددة، قيود، رغبات خاصة...' },
    submitting: { fr: 'Envoi en cours...', en: 'Sending...', ar: 'جار الإرسال...' },
    submit: { fr: 'Envoyer ma demande', en: 'Send my request', ar: 'أرسل طلبي' },
    error: { fr: "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous écrire directement.", en: 'An error occurred while sending. Please try again or write to us directly.', ar: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الكتابة إلينا مباشرة.' },
    thankYou: { fr: 'Merci !', en: 'Thank you!', ar: 'شكرًا!' },
    successMessage: { fr: 'Votre demande a bien été reçue. Notre équipe va étudier vos préférences et vous contactera très prochainement par email.', en: 'Your request has been received. Our team will review your preferences and contact you very soon by email.', ar: 'تم استلام طلبك. سيقوم فريقنا بمراجعة تفضيلاتك والتواصل معك قريبًا عبر البريد الإلكتروني.' },
    backToHome: { fr: "Retourner à l'accueil", en: 'Return home', ar: 'العودة للرئيسية' },
    experiences: {
      sisterhood: { fr: 'Happycore Sisterhood', en: 'Happycore Sisterhood', ar: 'هابيكور الأخوة' },
      roots: { fr: 'Happycore Roots', en: 'Happycore Roots', ar: 'هابيكور الجذور' },
      executive: { fr: 'Happycore Executive', en: 'Happycore Executive', ar: 'هابيكور التنفيذي' },
      dontKnow: { fr: 'Je ne sais pas encore', en: "I don't know yet", ar: 'لا أعرف بعد' }
    },
    activities: {
      desert: { fr: 'Désert & randonnée', en: 'Desert & hiking', ar: 'الصحراء والمشي' },
      hammam: { fr: 'Hammam & bien-être', en: 'Hammam & wellness', ar: 'الحمام والعافية' },
      gastronomy: { fr: 'Gastronomie locale', en: 'Local gastronomy', ar: 'المأكولات المحلية' },
      culture: { fr: 'Culture & histoire', en: 'Culture & history', ar: 'الثقافة والتاريخ' },
      golf: { fr: 'Golf', en: 'Golf', ar: 'غولف' },
      shopping: { fr: 'Artisanat & shopping', en: 'Crafts & shopping', ar: 'الحرف والتسوق' },
      music: { fr: 'Musique & cérémonies (Gnawa...)', en: 'Music & ceremonies (Gnawa...)', ar: 'الموسيقى والاحتفالات (كناوة...)' },
      sport: { fr: 'Sport & aventure', en: 'Sports & adventure', ar: 'الرياض والمغامرة' }
    },
    guideImportance: {
      essential: { fr: 'Essentiel', en: 'Essential', ar: 'أساسي' },
      important: { fr: 'Important', en: 'Important', ar: 'مهم' },
      notImportant: { fr: 'Peu important', en: 'Not very important', ar: 'غير مهم' },
      dontKnow: { fr: 'Je ne sais pas', en: "I don't know", ar: 'لا أعرف' }
    }
  },
  faq: {
    sisterhood: [
      {
        question: {
          fr: 'Pourquoi choisir un voyage en groupe plutôt que solo complet ?',
          en: 'Why choose a group trip rather than going fully solo?',
          ar: 'لماذا تختار رحلة جماعية بدلاً من السفر الفردي بالكامل؟'
        },
        answer: {
          fr: 'Notre format combine la liberté du solo (vous voyagez seule) avec la sécurité du groupe (6 personnes max, logistique privée). Vous gardez votre indépendance tout en bénéficiant d\'une infrastructure sécurisée.',
          en: 'Our format combines the freedom of solo (you travel alone) with the security of a group (6 people max, private logistics). You keep your independence while benefiting from a secure infrastructure.',
          ar: 'يجمع تنسيقنا بين حرية السفر الفردي (تسافرين بمفردك) وأمان المجموعة (6 أشخاص كحد أقصى، لوجستيات خاصة). تحافظين على استقلاليتك مع الاستفادة من بنية تحتية آمنة.'
        }
      },
      {
        question: {
          fr: 'Quelle est la meilleure période pour venir à Marrakech ?',
          en: 'What is the best time to come to Marrakech?',
          ar: 'ما هو أفضل وقت لزيارة مراكش؟'
        },
        answer: {
          fr: 'Mars-mai et septembre-novembre offrent les températures les plus agréables (20-28°C). Évitez juillet-août si vous craignez la chaleur (35-45°C). Nos éditions sont calibrées pour les meilleures saisons.',
          en: 'March-May and September-November offer the most pleasant temperatures (20-28°C). Avoid July-August if you fear the heat (35-45°C). Our editions are calibrated for the best seasons.',
          ar: 'مارس-مايو وسبتمبر-نوفمبر يقدمون أكثر درجات الحرارة متعة (20-28 درجة مئوية). تجنبي يوليو-أغسطس إذا كنت تخشين الحرارة (35-45 درجة مئوية). طبعاتنا معايرة لأفضل المواسم.'
        }
      },
      {
        question: {
          fr: 'Combien coûte le séjour Sisterhood ?',
          en: 'How much does the Sisterhood stay cost?',
          ar: 'كم تكلف إقامة الأخوة؟'
        },
        answer: {
          fr: 'À partir de 1 323€ par personne pour 5 jours/4 nuits tout inclus (hébergement, transferts, activités, certains repas). Contactez-nous pour les dates exactes et disponibilités.',
          en: 'From €1,323 per person for 5 days/4 nights all inclusive (accommodation, transfers, activities, some meals). Contact us for exact dates and availability.',
          ar: 'من 1,323 يورو للشخص الواحد لمدة 5 أيام/4 ليالٍ شاملة كل شيء (الإقامة، الانتقالات، الأنشطة، بعض الوجبات). اتصل بنا للحصول على التواريخ الدقيقة والتوافر.'
        }
      },
      {
        question: {
          fr: 'Puis-je venir si je n\'ai jamais voyagé seule ?',
          en: 'Can I come if I have never traveled alone?',
          ar: 'هل يمكنني القدوم إذا لم أسافر بمفردي من قبل؟'
        },
        answer: {
          fr: 'Absolument. Sisterhood est conçu pour les premières expériences solo sécurisées. 40% de nos participantes n\'avaient jamais voyagé seules avant.',
          en: 'Absolutely. Sisterhood is designed for first-time safe solo experiences. 40% of our participants had never traveled alone before.',
          ar: 'بالتأكيد. تم تصميم الأخوة لتجارب السفر الفردي الآمنة لأول مرة. 40٪ من مشاركاتنا لم يسافرن بمفردهن من قبل.'
        }
      },
      {
        question: {
          fr: 'Que se passe-t-il en cas d\'imprévu ou d\'urgence ?',
          en: 'What happens in case of an unforeseen event or emergency?',
          ar: 'ماذا يحدث في حالة حدث غير متوقع أو طارئ؟'
        },
        answer: {
          fr: 'Vous avez un contact humain disponible 24/7. Notre équipe sur place gère tout : médical, logistique, changement de programme. Vous n\'êtes jamais livrée à vous-même.',
          en: 'You have a human contact available 24/7. Our on-site team handles everything: medical, logistics, program changes. You are never left to fend for yourself.',
          ar: 'لديك جهة اتصال بشرية متاحة على مدار الساعة. فريقنا في الموقع يدير كل شيء: طبي، لوجستي، تغيير البرنامج. أنتِ لستِ متروكة أبدًا لنفسك.'
        }
      }
    ],
    roots: [
      {
        question: {
          fr: 'Ce voyage est-il réservé aux personnes d\'origine africaine ?',
          en: 'Is this trip reserved for people of African descent?',
          ar: 'هل هذه الرحلة مخصصة للأشخاص من أصل أفريقي؟'
        },
        answer: {
          fr: 'Roots est conçu pour la diaspora afro, mais nous accueillons toute personne authentiquement intéressée par l\'histoire et la culture Gnawa. L\'essentiel est l\'intention d\'apprentissage et de reconnexion.',
          en: 'Roots is designed for the Afro diaspora, but we welcome anyone genuinely interested in Gnawa history and culture. The key is the intention of learning and reconnection.',
          ar: 'تم تصميم الجذور للجالية الأفريقية، لكننا نرحب بأي شخص مهتم حقًا بتاريخ وثقافة كناوة. الأساس هو نية التعلم وإعادة الاتصال.'
        }
      },
      {
        question: {
          fr: 'Faut-il parler français ou arabe ?',
          en: 'Do I need to speak French or Arabic?',
          ar: 'هل يجب أن أتحدث الفرنسية أو العربية؟'
        },
        answer: {
          fr: 'Nos guides sont bilingues français/anglais. Vous pouvez participer dans l\'une ou l\'autre langue. Certains moments sont traduits en temps réel.',
          en: 'Our guides are bilingual French/English. You can participate in either language. Some moments are translated in real time.',
          ar: 'مرشدونا ثنائيو اللغة الفرنسية/الإنجليزية. يمكنك المشاركة بأي من اللغتين. بعض اللحظات تُترجم في الوقت الفعلي.'
        }
      },
      {
        question: {
          fr: 'Quelle est la différence avec un voyage culturel classique ?',
          en: 'What is the difference with a classic cultural trip?',
          ar: 'ما الفرق عن الرحلة الثقافية التقليدية؟'
        },
        answer: {
          fr: 'Un voyage classique visite. Roots rencontre, écoute, échange. Nous privilégions les connexions humaines aux visites panoramiques. L\'immersion est profonde, pas superficielle.',
          en: 'A classic trip visits. Roots meets, listens, exchanges. We prioritize human connections over sightseeing. The immersion is deep, not superficial.',
          ar: 'الرحلة التقليدية تزور. الجذور تلتقي وتستمع وتتبادل. نحن نعطي الأولوية للتواصل البشري على المشاهدة. الانغماس عميق وليس سطحيًا.'
        }
      },
      {
        question: {
          fr: 'Combien de personnes par voyage ?',
          en: 'How many people per trip?',
          ar: 'كم عدد الأشخاص في كل رحلة؟'
        },
        answer: {
          fr: 'Maximum 8 personnes par édition pour préserver l\'intimité des rencontres et la qualité des échanges. Nous refusons souvent des candidatures pour maintenir ce format.',
          en: 'Maximum 8 people per edition to preserve the intimacy of encounters and the quality of exchanges. We often decline applications to maintain this format.',
          ar: '8 أشخاص كحد أقصى لكل طبعة للحفاظ على خصوصية اللقاءات وجودة التبادلات. غالبًا ما نرفض الطلبات للحفاظ على هذا التنسيق.'
        }
      },
      {
        question: {
          fr: 'Quel est le prix du séjour Roots ?',
          en: 'What is the price of the Roots stay?',
          ar: 'ما هو سعر إقامة الجذور؟'
        },
        answer: {
          fr: 'À partir de 1 603€ par personne pour 6 jours/5 nuits (hébergement, transferts, activités culturelles, rencontres, certains repas). Postulez pour recevoir le dossier complet.',
          en: 'From €1,603 per person for 6 days/5 nights (accommodation, transfers, cultural activities, meetings, some meals). Apply to receive the full dossier.',
          ar: 'من 1,603 يورو للشخص الواحد لمدة 6 أيام/5 ليالٍ (إقامة، انتقالات، أنشطة ثقافية، لقاءات، بعض الوجبات). تقدم بطلبك للحصول على الملف الكامل.'
        }
      }
    ],
    executive: [
      {
        question: {
          fr: 'Quel est le délai minimum pour organiser un séjour Executive ?',
          en: 'What is the minimum lead time to organize an Executive stay?',
          ar: 'ما هي المهلة الدنيا لتنظيم إقامة تنفيذية؟'
        },
        answer: {
          fr: 'Idéalement 3 semaines pour un programme complet. En urgence (7 jours), nous pouvons mobiliser nos réseaux pour un séjour de qualité, avec un accès légèrement plus limité aux lieux les plus exclusifs.',
          en: 'Ideally 3 weeks for a complete program. In an emergency (7 days), we can mobilize our networks for a quality stay, with slightly more limited access to the most exclusive places.',
          ar: 'من الناحية المثالية 3 أسابيع لبرنامج كامل. في حالات الطوارئ (7 أيام)، يمكننا تعبئة شبكاتنا لإقامة عالية الجودة، مع وصول محدود قليلاً إلى الأماكن الأكثر حصرية.'
        }
      },
      {
        question: {
          fr: 'Le service est-il adapté aux équipes ou seulement aux individus ?',
          en: 'Is the service suitable for teams or only individuals?',
          ar: 'هل الخدمة مناسبة للفرق أم للأفراد فقط؟'
        },
        answer: {
          fr: 'Nous gérons aussi bien les séjours individuels que les groupes de 2 à 12 dirigeants. Pour les équipes, nous adaptons la logistique (salles privées, activités de groupe, dîners d\'affaires).',
          en: 'We handle both individual stays and groups of 2 to 12 executives. For teams, we adapt logistics (private rooms, group activities, business dinners).',
          ar: 'نتعامل مع كل من الإقامات الفردية والمجموعات من 2 إلى 12 مديرًا تنفيذيًا. للفرق، نكيف الخدمات اللوجستية (غرف خاصة، أنشطة جماعية، عشاء عمل).'
        }
      },
      {
        question: {
          fr: 'Comment garantissez-vous la discrétion ?',
          en: 'How do you guarantee discretion?',
          ar: 'كيف تضمنون السرية؟'
        },
        answer: {
          fr: 'NDA signé par toute l\'équipe, pas de photos sans autorisation, transferts en véhicules discrets, hébergements avec entrées privées. Notre clientèle inclut des personnalités publiques.',
          en: 'NDA signed by the entire team, no photos without authorization, discreet vehicle transfers, accommodations with private entrances. Our clientele includes public figures.',
          ar: 'توقيع اتفاقية عدم إفشاء من قبل الفريق بأكمله، لا صور بدون إذن، انتقالات بمركبات سرية، إقامات بمداخل خاصة. عملاؤنا يشملون شخصيات عامة.'
        }
      },
      {
        question: {
          fr: 'Quel est le budget à prévoir ?',
          en: 'What budget should I plan for?',
          ar: 'ما هي الميزانية التي يجب أن أخطط لها؟'
        },
        answer: {
          fr: 'À partir de 2 450€ par personne pour 3 jours/2 nuits (hébergement premium, conciergerie dédiée, accès golf/tennis, 2 dîners gastronomiques). Les programmes sur mesure démarrent à 8 000€.',
          en: 'From €2,450 per person for 3 days/2 nights (premium accommodation, dedicated concierge, golf/tennis access, 2 gourmet dinners). Custom programs start at €8,000.',
          ar: 'من 2,450 يورو للشخص الواحد لمدة 3 أيام/ليلتين (إقامة متميزة، خدمة كونسيرج مخصصة، وصول للغولف/التنس، عشاءين من المأكولات الذواقة). البرامج المخصصة تبدأ من 8,000 يورو.'
        }
      },
      {
        question: {
          fr: 'Pouvez-vous organiser des rencontres business ciblées ?',
          en: 'Can you organize targeted business meetings?',
          ar: 'هل يمكنكم تنظيم لقاءات عمل مستهدفة؟'
        },
        answer: {
          fr: 'Oui. Nous avons un réseau d\'entrepreneurs, investisseurs et décideurs locaux. Selon vos objectifs (investissement, partenariat, veille), nous orchestrons des rencontres qualifiées.',
          en: 'Yes. We have a network of local entrepreneurs, investors and decision-makers. According to your objectives (investment, partnership, monitoring), we orchestrate qualified meetings.',
          ar: 'نعم. لدينا شبكة من رواد الأعمال والمستثمرين وصناع القرار المحليين. وفقًا لأهدافك (استثمار، شراكة، مراقبة)، ننظم لقاءات مؤهلة.'
        }
      }
    ]
  }
};

export type TranslationKey = typeof translations;
