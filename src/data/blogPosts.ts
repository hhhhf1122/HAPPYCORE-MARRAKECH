export type Locale = 'fr' | 'en' | 'ar';

export type LocalizedString = {
  fr: string;
  en: string;
  ar: string;
};

export type BlogSection = {
  heading: LocalizedString;
  paragraphs: LocalizedString[];
  bullets?: LocalizedString[];
};

export type BlogFAQ = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type BlogPost = {
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  excerpt: LocalizedString;
  metaTitle: LocalizedString;
  metaDescription: LocalizedString;
  keyword: LocalizedString;
  publishedAt: string;
  updatedAt: string;
  readingTime: LocalizedString;
  heroImage: string;
  heroAlt: LocalizedString;
  ctaLabel: LocalizedString;
  ctaHref: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
};

export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale] || value.fr;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "voyage-solo-femme-marrakech-securise",
    title: {
      fr: "Voyage solo femme Marrakech sécurisé: le guide pour partir sereine",
      en: "Safe Solo Female Travel Marrakech: The Complete Guide",
      ar: "سفر منفرد آمن للنساء في مراكش: الدليل الكامل"
    },
    category: { fr: "Sisterhood", en: "Sisterhood", ar: "الأخوة" },
    excerpt: {
      fr: "Les points essentiels pour choisir un séjour vraiment rassurant à Marrakech, sans sacrifier le plaisir, le confort ou la liberté.",
      en: "The essential points to choose a truly reassuring stay in Marrakech, without sacrificing pleasure, comfort or freedom.",
      ar: "النقاط الأساسية لاختيار إقامة مريحة حقًا في مراكش، دون التضحية بالمتعة أو الراحة أو الحرية."
    },
    metaTitle: {
      fr: "Voyage solo femme Marrakech sécurisé | Guide complet",
      en: "Safe Solo Female Travel Marrakech | Complete Guide",
      ar: "سفر منفرد آمن للنساء مراكش | دليل كامل"
    },
    metaDescription: {
      fr: "Découvrez comment organiser un voyage solo femme à Marrakech avec sécurité, chauffeurs privés, riads audités et bonnes pratiques simples.",
      en: "Discover how to organize a solo female trip to Marrakech with safety, private drivers, audited riads and simple best practices.",
      ar: "اكتشفي كيفية تنظيم رحلة فردية للنساء إلى مراكش بأمان، مع سائقين خصوصيين، رياضات مدققة، وممارسات بسيطة."
    },
    keyword: {
      fr: "voyage solo femme Marrakech sécurisé",
      en: "safe solo female travel Marrakech",
      ar: "سفر منفرد آمن للنساء مراكش"
    },
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: { fr: "6 min", en: "6 min", ar: "6 دقائق" },
    heroImage: "/public/images/femme-securise.jpg",
    heroAlt: {
      fr: "Deux femmes marchant dans un paysage marocain au coucher du soleil.",
      en: "Two women walking in a Moroccan landscape at sunset.",
      ar: "امرأتان تمشيان في منظر طبيعي مغربي عند غروب الشمس."
    },
    ctaLabel: {
      fr: "Voir l'expérience Sisterhood",
      en: "See the Sisterhood experience",
      ar: "شاهد تجربة الأخوة"
    },
    ctaHref: "/sisterhood",
    sections: [
      {
        heading: {
          fr: "Pourquoi cette recherche est si fréquente",
          en: "Why this search is so common",
          ar: "لماذا هذا البحث شائع جدًا"
        },
        paragraphs: [
          {
            fr: "Quand une femme prépare un séjour seule, la question n'est pas seulement où aller, mais comment me sentir en confiance du début à la fin.",
            en: "When a woman prepares a solo stay, the question is not only where to go, but how to feel confident from start to finish.",
            ar: "عندما تحضر امرأة لإقامة منفردة، ليس السؤال فقط أين تذهب، بل كيف تشعر بالثقة من البداية إلى النهاية."
          },
          {
            fr: "Un bon séjour solo doit réduire la charge mentale. Transport, riad, rythme des journées, transferts et accueil doivent être pensés pour éviter les zones de stress inutiles.",
            en: "A good solo stay should reduce mental load. Transport, riad, daily rhythm, transfers and welcome must be designed to avoid unnecessary stress zones.",
            ar: "يجب أن تقلل الإقامة الفردية الجيدة من العبء الذهني. يجب أن يكون النقل والرياض وإيقاع الأيام والانتقالات والاستقبال مصممة لتجنب مناطق التوتر غير الضرورية."
          }
        ]
      },
      {
        heading: {
          fr: "Les critères qui changent vraiment tout",
          en: "The criteria that really change everything",
          ar: "المعايير التي تغير كل شيء حقًا"
        },
        bullets: [
          { fr: "Chauffeur ou chauffeuse privée pour les déplacements clés.", en: "Private driver for key trips.", ar: "سائق خاص للرحلات الرئيسية." },
          { fr: "Riad testé, central, calme et bien noté.", en: "Tested, central, quiet and well-rated riad.", ar: "رياض مجرب ومركزي وهادئ وذا تقييم جيد." },
          { fr: "Petit groupe ou format individuel avec accompagnement clair.", en: "Small group or individual format with clear support.", ar: "مجموعة صغيرة أو تنسيق فردي مع دعم واضح." },
          { fr: "Programme simple, lisible et flexible.", en: "Simple, clear and flexible program.", ar: "برنامج بسيط وواضح ومرن." },
          { fr: "Point de contact humain disponible avant et pendant le voyage.", en: "Human contact point available before and during the trip.", ar: "نقطة اتصال بشرية متاحة قبل وأثناء الرحلة." }
        ],
        paragraphs: [
          {
            fr: "Ce sont des détails concrets, mais ce sont eux qui transforment une réservation hésitante en décision rassurante.",
            en: "These are concrete details, but they transform a hesitant booking into a reassuring decision.",
            ar: "هذه تفاصيل ملموسة، لكنها هي التي تحول الحجز المتردد إلى قرار مطمئن."
          }
        ]
      },
      {
        heading: {
          fr: "Comment Happycore Sisterhood répond à ce besoin",
          en: "How Happycore Sisterhood meets this need",
          ar: "كيف تلبي هابي كور الأخوة هذه الحاجة"
        },
        paragraphs: [
          {
            fr: "Sisterhood a été construit pour les voyageuses qui veulent vivre Marrakech avec élégance et sécurité.",
            en: "Sisterhood was built for travelers who want to experience Marrakech with elegance and safety.",
            ar: "تم تصميم الأخوة للمسافرات اللواتي يرغبن في تجربة مراكش بأناقة وأمان."
          },
          {
            fr: "Si vous cherchez une expérience prête à réserver, le bon réflexe est de partir d'une offre qui a déjà filtré les risques à votre place.",
            en: "If you are looking for a ready-to-book experience, start with an offer that has already filtered the risks for you.",
            ar: "إذا كنت تبحثين عن تجربة جاهزة للحجز، فالحل الأمثل هو البدء بعرض قام بالفعل بتصفية المخاطر نيابة عنك."
          }
        ]
      }
    ],
    faqs: [
      {
        question: {
          fr: "Marrakech est-elle adaptée à un premier voyage solo ?",
          en: "Is Marrakech suitable for a first solo trip?",
          ar: "هل مراكش مناسبة لأول رحلة منفردة؟"
        },
        answer: {
          fr: "Oui, à condition d'arriver avec une organisation sérieuse: transferts réservés, hébergement de confiance et itinéraire clair.",
          en: "Yes, provided you arrive with serious organization: reserved transfers, trusted accommodation and a clear itinerary.",
          ar: "نعم، بشرط الوصول بتنظيم جدي: انتقالات محجوزة، إقامة موثوقة ومسار واضح."
        }
      },
      {
        question: {
          fr: "Pourquoi choisir un groupe réduit ?",
          en: "Why choose a small group?",
          ar: "لماذا تختار مجموعة صغيرة؟"
        },
        answer: {
          fr: "Un petit groupe permet de garder une ambiance intime, de mieux gérer les trajets et de conserver une vraie qualité d'attention.",
          en: "A small group keeps an intimate atmosphere, better manages trips and maintains real quality of attention.",
          ar: "المجموعة الصغيرة تحافظ على أجواء حميمة، وتدير الرحلات بشكل أفضل، وتحافظ على جودة حقيقية من الاهتمام."
        }
      },
      {
        question: {
          fr: "Quelle est la meilleure façon de réserver sereinement ?",
          en: "What is the best way to book with peace of mind?",
          ar: "ما هي أفضل طريقة للحجز براحة بال؟"
        },
        answer: {
          fr: "Commencez par une offre pensée pour ce besoin précis, puis échangez directement avec l'équipe avant de confirmer.",
          en: "Start with an offer designed for this specific need, then exchange directly with the team before confirming.",
          ar: "ابدأي بعرض مصمم لهذه الحاجة المحددة، ثم تبادلي مباشرة مع الفريق قبل التأكيد."
        }
      }
    ]
  },
  {
    slug: "riad-marrakech-femme-seule",
    title: {
      fr: "Quel riad choisir à Marrakech quand on voyage seule ?",
      en: "Which riad to choose in Marrakech when traveling alone?",
      ar: "أي رياض تختارين في مراكش عند السفر بمفردك؟"
    },
    category: { fr: "Sisterhood", en: "Sisterhood", ar: "الأخوة" },
    excerpt: {
      fr: "Un guide simple pour comprendre ce qui différencie un riad photogénique d'un riad vraiment rassurant pour une voyageuse seule.",
      en: "A simple guide to understand what differentiates a photogenic riad from a truly reassuring one for a solo female traveler.",
      ar: "دليل بسيط لفهم الفرق بين رياض جذاب في الصور ورياض مطمئن حقًا للمسافرة المنفردة."
    },
    metaTitle: {
      fr: "Quel riad choisir à Marrakech quand on voyage seule ?",
      en: "Which riad to choose in Marrakech when traveling alone?",
      ar: "أي رياض تختارين في مراكش عند السفر بمفردك؟"
    },
    metaDescription: {
      fr: "Apprenez à sélectionner un riad à Marrakech pour femme seule avec les bons critères de sécurité, d'emplacement et de confort.",
      en: "Learn to select a riad in Marrakech for a solo woman with the right safety, location and comfort criteria.",
      ar: "تعلمي اختيار رياض في مراكش للمرأة المنفردة بمعايير الأمان والموقع والراحة الصحيحة."
    },
    keyword: {
      fr: "riad Marrakech femme seule",
      en: "riad Marrakech solo female",
      ar: "رياض مراكش امرأة منفردة"
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
    readingTime: { fr: "5 min", en: "5 min", ar: "5 دقائق" },
    heroImage: "/public/images/femme-solo.jpg",
    heroAlt: {
      fr: "Cour intérieure lumineuse d'un riad marocain traditionnel.",
      en: "Bright interior courtyard of a traditional Moroccan riad.",
      ar: "فناء داخلي مضيء لرياض مغربي تقليدي."
    },
    ctaLabel: {
      fr: "Explorer Sisterhood",
      en: "Explore Sisterhood",
      ar: "استكشف الأخوة"
    },
    ctaHref: "/sisterhood",
    sections: [
      {
        heading: {
          fr: "Le bon riad n'est pas seulement beau",
          en: "The right riad is not just beautiful",
          ar: "الرياض المناسب ليس جميلاً فقط"
        },
        paragraphs: [
          {
            fr: "Pour une femme seule, le riad idéal ne se résume pas à une belle piscine ou à une décoration Instagram.",
            en: "For a solo woman, the ideal riad is not just a beautiful pool or Instagram decoration.",
            ar: "بالنسبة للمرأة المنفردة، الرياض المثالي لا يقتصر على مسبح جميل أو ديكور إنستغرام."
          },
          {
            fr: "L'objectif est simple: arriver sans confusion et sortir sans friction.",
            en: "The goal is simple: arrive without confusion and leave without friction.",
            ar: "الهدف بسيط: الوصول دون ارتباك والمغادرة دون احتكاك."
          }
        ]
      },
      {
        heading: {
          fr: "Les signaux de confiance à vérifier",
          en: "Trust signals to check",
          ar: "إشارات الثقة التي يجب التحقق منها"
        },
        bullets: [
          { fr: "Adresse centrale ou facile à rejoindre en voiture.", en: "Central address or easy to reach by car.", ar: "عنوان مركزي أو سهل الوصول بالسيارة." },
          { fr: "Équipe réactive avant l'arrivée.", en: "Responsive team before arrival.", ar: "فريق سريع الاستجابة قبل الوصول." },
          { fr: "Avis récents mentionnant la propreté et l'accueil.", en: "Recent reviews mentioning cleanliness and welcome.", ar: "تقييمات حديثة تذكر النظافة والترحيب." },
          { fr: "Possibilité de transfert privé.", en: "Possibility of private transfer.", ar: "إمكانية النقل الخاص." },
          { fr: "Espaces calmes, bien fermés et faciles à comprendre.", en: "Quiet, well-secured and easy-to-understand spaces.", ar: "مساحات هادئة ومؤمنة جيدًا وسهلة الفهم." }
        ],
        paragraphs: [
          {
            fr: "La meilleure expérience est celle qui vous laisse profiter du séjour, pas gérer l'organisation.",
            en: "The best experience is one that lets you enjoy the stay, not manage the organization.",
            ar: "أفضل تجربة هي تلك التي تتيح لك الاستمتاع بالإقامة، وليس إدارة التنظيم."
          }
        ]
      },
      {
        heading: {
          fr: "Pourquoi une offre clé en main rassure",
          en: "Why a turnkey offer is reassuring",
          ar: "لماذا العرض المتكامل مطمئن"
        },
        paragraphs: [
          {
            fr: "Quand le riad, les transferts et le rythme du séjour sont coordonnés au même endroit, la confiance monte immédiatement.",
            en: "When the riad, transfers and rhythm of the stay are coordinated in one place, confidence rises immediately.",
            ar: "عندما يتم تنسيق الرياض والانتقالات وإيقاع الإقامة في مكان واحد، ترتفع الثقة فورًا."
          }
        ]
      }
    ],
    faqs: [
      {
        question: {
          fr: "Faut-il privilégier la médina ou un quartier plus calme ?",
          en: "Should you choose the medina or a quieter neighborhood?",
          ar: "هل تفضلين المدينة القديمة أم حيًا أكثر هدوءًا؟"
        },
        answer: {
          fr: "Tout dépend du niveau d'accompagnement. Avec une logistique privée, la médina peut être très agréable.",
          en: "It depends on the level of support. With private logistics, the medina can be very pleasant.",
          ar: "يعتمد على مستوى الدعم. مع الخدمات اللوجستية الخاصة، يمكن أن تكون المدينة القديمة ممتعة جدًا."
        }
      },
      {
        question: {
          fr: "Le prix est-il un bon indicateur ?",
          en: "Is price a good indicator?",
          ar: "هل السعر مؤشر جيد؟"
        },
        answer: {
          fr: "Pas seul. Le plus important reste le niveau de sérénité offert par le lieu.",
          en: "Not alone. The most important remains the level of serenity offered by the place.",
          ar: "ليس وحده. الأهم يبقى مستوى الصفاء الذي يوفره المكان."
        }
      },
      {
        question: {
          fr: "Comment éviter les mauvaises surprises ?",
          en: "How to avoid unpleasant surprises?",
          ar: "كيف تتجنبين المفاجآت غير السارة؟"
        },
        answer: {
          fr: "Réservez via une offre qui a déjà présélectionné les hébergements et testé le parcours client.",
          en: "Book through an offer that has already preselected accommodations and tested the customer journey.",
          ar: "احجزي عبر عرض قام بالفعل باختيار أماكن الإقامة واختبار تجربة العميل."
        }
      }
    ]
  },
  {
    slug: "voyage-afro-maroc-diaspora",
    title: {
      fr: "Voyage afro Maroc: pourquoi Essaouira parle autant à la diaspora",
      en: "Afro Morocco Travel: Why Essaouira Speaks to the Diaspora",
      ar: "سفر أفريقي المغرب: لماذا تتحدث الصويرة إلى الشتات"
    },
    category: { fr: "Roots", en: "Roots", ar: "الجذور" },
    excerpt: {
      fr: "Une lecture culturelle et émotionnelle pour comprendre pourquoi Essaouira et Marrakech attirent autant les voyageurs de la diaspora afro.",
      en: "A cultural and emotional perspective to understand why Essaouira and Marrakech attract Afro diaspora travelers.",
      ar: "قراءة ثقافية وعاطفية لفهم لماذا تجذب الصويرة ومراكش مسافري الشتات الأفريقي."
    },
    metaTitle: {
      fr: "Voyage afro Maroc | Pourquoi Essaouira touche la diaspora",
      en: "Afro Morocco Travel | Why Essaouira Moves the Diaspora",
      ar: "سفر أفريقي المغرب | لماذا تلامس الصويرة الشتات"
    },
    metaDescription: {
      fr: "Explorez un voyage afro au Maroc autour de la mémoire, des communautés vivantes, d'Essaouira et de l'héritage Gnawa.",
      en: "Explore an Afro trip to Morocco around memory, living communities, Essaouira and Gnawa heritage.",
      ar: "استكشف رحلة أفريقية إلى المغرب حول الذاكرة والمجتمعات الحية والصويرة وتراث كناوة."
    },
    keyword: {
      fr: "voyage afro Maroc",
      en: "afro Morocco travel",
      ar: "سفر أفريقي المغرب"
    },
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: { fr: "7 min", en: "7 min", ar: "7 دقائق" },
    heroImage: "/public/images/essaouira.jpg",
    heroAlt: {
      fr: "Rue vivante et architecture historique à Essaouira.",
      en: "Lively street and historical architecture in Essaouira.",
      ar: "شارع حي وهندسة معمارية تاريخية في الصويرة."
    },
    ctaLabel: {
      fr: "Découvrir Roots",
      en: "Discover Roots",
      ar: "اكتشف الجذور"
    },
    ctaHref: "/roots",
    sections: [
      {
        heading: {
          fr: "Un voyage de sens avant d'être un voyage de style",
          en: "A journey of meaning before a journey of style",
          ar: "رحلة ذات معنى قبل أن تكون رحلة أسلوب"
        },
        paragraphs: [
          {
            fr: "De nombreux voyageurs de la diaspora ne cherchent pas seulement une destination. Ils cherchent un point de contact avec une histoire partagée.",
            en: "Many diaspora travelers are not just looking for a destination. They seek a point of contact with a shared history.",
            ar: "العديد من مسافري الشتات لا يبحثون فقط عن وجهة. يبحثون عن نقطة اتصال مع تاريخ مشترك."
          }
        ]
      },
      {
        heading: {
          fr: "Pourquoi Essaouira revient souvent dans les recherches",
          en: "Why Essaouira often comes up in searches",
          ar: "لماذا تظهر الصويرة غالبًا في عمليات البحث"
        },
        bullets: [
          { fr: "Ville côtière plus douce et contemplative.", en: "Softer, more contemplative coastal town.", ar: "مدينة ساحلية أكثر نعومة وتأملًا." },
          { fr: "Présence d'une scène Gnawa vivante et accessible.", en: "Presence of a living and accessible Gnawa scene.", ar: "وجود مشهد كناوة حي ومتاح." },
          { fr: "Atmosphère propice aux conversations et aux rencontres.", en: "Atmosphere conducive to conversations and meetings.", ar: "أجواء مواتية للمحادثات واللقاءات." },
          { fr: "Pont naturel entre mémoire, mer et artisanat.", en: "Natural bridge between memory, sea and craftsmanship.", ar: "جسر طبيعي بين الذاكرة والبحر والحرف اليدوية." }
        ],
        paragraphs: [
          {
            fr: "C'est un terrain idéal pour un voyage à la fois esthétique, émotionnel et instructif.",
            en: "It is ideal ground for a trip that is aesthetic, emotional and instructive.",
            ar: "إنها أرض مثالية لرحلة جمالية وعاطفية وتعليمية في آن واحد."
          }
        ]
      },
      {
        heading: {
          fr: "Comment créer une vraie immersion",
          en: "How to create real immersion",
          ar: "كيف تخلقين انغماسًا حقيقيًا"
        },
        paragraphs: [
          {
            fr: "L'immersion n'arrive pas par hasard. Elle demande des rencontres choisies, un contexte clair et un rythme qui laisse de la place à l'écoute.",
            en: "Immersion does not happen by chance. It requires chosen encounters, a clear context and a rhythm that leaves room for listening.",
            ar: "الانغماس لا يحدث بالصدفة. يتطلب لقاءات مختارة وسياقًا واضحًا وإيقاعًا يترك مجالًا للاستماع."
          }
        ]
      }
    ],
    faqs: [
      {
        question: {
          fr: "Est-ce un voyage purement culturel ?",
          en: "Is it purely a cultural trip?",
          ar: "هل هي رحلة ثقافية بحتة؟"
        },
        answer: {
          fr: "Il est culturel, émotionnel et relationnel. L'objectif est de faire dialoguer histoire, musique, communauté et expérience vécue.",
          en: "It is cultural, emotional and relational. The goal is to bring history, music, community and lived experience into dialogue.",
          ar: "إنها ثقافية وعاطفية وعلائقية. الهدف هو جعل التاريخ والموسيقى والمجتمع والتجربة المعاشة في حوار."
        }
      },
      {
        question: {
          fr: "Pourquoi associer Marrakech et Essaouira ?",
          en: "Why combine Marrakech and Essaouira?",
          ar: "لماذا الجمع بين مراكش والصويرة؟"
        },
        answer: {
          fr: "Parce que les deux villes créent un contraste utile entre intensité urbaine et respiration côtière.",
          en: "Because the two cities create a useful contrast between urban intensity and coastal breathing.",
          ar: "لأن المدينتين تخلقان تباينًا مفيدًا بين الكثافة الحضرية والتنفس الساحلي."
        }
      },
      {
        question: {
          fr: "Faut-il déjà connaître l'histoire Gnawa ?",
          en: "Do you need to know Gnawa history already?",
          ar: "هل يجب أن تعرفي تاريخ كناوة مسبقًا؟"
        },
        answer: {
          fr: "Non. Le bon voyage est justement celui qui rend cette histoire accessible, vivante et facile à ressentir.",
          en: "No. The right trip is precisely the one that makes this history accessible, alive and easy to feel.",
          ar: "لا. الرحلة المناسبة هي تلك التي تجعل هذا التاريخ متاحًا وحيويًا وسهل الشعور به."
        }
      }
    ]
  },
  {
    slug: "culture-gnawa-essaouira-guide",
    title: {
      fr: "Culture Gnawa à Essaouira: guide simple pour une immersion vraie",
      en: "Gnawa Culture in Essaouira: Simple Guide for a True Immersion",
      ar: "ثقافة كناوة في الصويرة: دليل بسيط لانغماس حقيقي"
    },
    category: { fr: "Roots", en: "Roots", ar: "الجذور" },
    excerpt: {
      fr: "Comprendre les bases de la culture Gnawa avant de partir change complètement la qualité de l'expérience sur place.",
      en: "Understanding the basics of Gnawa culture before leaving completely changes the quality of the experience on site.",
      ar: "فهم أساسيات ثقافة كناوة قبل السفر يغير جودة التجربة في الموقع تمامًا."
    },
    metaTitle: {
      fr: "Culture Gnawa Essaouira | Guide d'immersion",
      en: "Gnawa Culture Essaouira | Immersion Guide",
      ar: "ثقافة كناوة الصويرة | دليل الانغماس"
    },
    metaDescription: {
      fr: "Un guide clair sur la culture Gnawa à Essaouira pour préparer un voyage plus profond, plus juste et plus mémorable.",
      en: "A clear guide on Gnawa culture in Essaouira to prepare a deeper, fairer and more memorable trip.",
      ar: "دليل واضح عن ثقافة كناوة في الصويرة للتحضير لرحلة أعمق وأكثر عدالة ولا تنسى."
    },
    keyword: {
      fr: "culture Gnawa Essaouira",
      en: "Gnawa culture Essaouira",
      ar: "ثقافة كناوة الصويرة"
    },
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    readingTime: { fr: "6 min", en: "6 min", ar: "6 دقائق" },
    heroImage: "/public/images/gnawa.jpg",
    heroAlt: {
      fr: "Vue historique d'Essaouira avec ses murs blancs et ses influences atlantiques.",
      en: "Historical view of Essaouira with its white walls and Atlantic influences.",
      ar: "منظر تاريخي للصويرة بجدرانها البيضاء وتأثيراتها الأطلسية."
    },
    ctaLabel: {
      fr: "Voir l'expérience Roots",
      en: "See the Roots experience",
      ar: "شاهد تجربة الجذور"
    },
    ctaHref: "/roots",
    sections: [
      {
        heading: {
          fr: "Pourquoi ce sujet mérite un vrai guide",
          en: "Why this topic deserves a real guide",
          ar: "لماذا يستحق هذا الموضوع دليلاً حقيقيًا"
        },
        paragraphs: [
          {
            fr: "La culture Gnawa est souvent réduite à quelques images ou à un festival. Pourtant, elle porte une profondeur historique, musicale et spirituelle.",
            en: "Gnawa culture is often reduced to a few images or a festival. Yet it carries historical, musical and spiritual depth.",
            ar: "غالبًا ما تُختزل ثقافة كناوة في بضع صور أو مهرجان. لكنها تحمل عمقًا تاريخيًا وموسيقيًا وروحيًا."
          }
        ]
      },
      {
        heading: {
          fr: "Les repères essentiels",
          en: "Essential landmarks",
          ar: "المعالم الأساسية"
        },
        bullets: [
          { fr: "Le rôle central de la musique et du rythme.", en: "The central role of music and rhythm.", ar: "الدور المركزي للموسيقى والإيقاع." },
          { fr: "La place du maître musicien, souvent appelé Maâlem.", en: "The place of the master musician, often called Maâlem.", ar: "مكانة المعلم الموسيقي، الذي يُدعى غالبًا المعلم." },
          { fr: "Le lien entre mémoire, transmission et communauté.", en: "The link between memory, transmission and community.", ar: "الرابط بين الذاكرة والنقل والمجتمع." },
          { fr: "L'ancrage d'Essaouira comme ville de rencontre.", en: "Essaouira's anchoring as a meeting city.", ar: "ترسيخ الصويرة كمدينة للقاء." }
        ],
        paragraphs: [
          {
            fr: "Ces repères simples suffisent déjà à transformer une visite en expérience plus fine.",
            en: "These simple landmarks are already enough to transform a visit into a finer experience.",
            ar: "هذه المعالم البسيطة كافية بالفعل لتحويل الزيارة إلى تجربة أكثر دقة."
          }
        ]
      },
      {
        heading: {
          fr: "Le bon angle pour un séjour de marque",
          en: "The right angle for a branded stay",
          ar: "الزاوية الصحيحة لإقامة مميزة"
        },
        paragraphs: [
          {
            fr: "Pour un séjour premium, l'enjeu n'est pas seulement de voir. Il faut entendre, rencontrer et comprendre.",
            en: "For a premium stay, the challenge is not just to see. You must hear, meet and understand.",
            ar: "للحصول على إقامة متميزة، لا يقتصر التحدي على الرؤية فقط. يجب أن تسمع وتلتقي وتفهم."
          }
        ]
      }
    ],
    faqs: [
      {
        question: {
          fr: "La culture Gnawa est-elle accessible aux débutants ?",
          en: "Is Gnawa culture accessible to beginners?",
          ar: "هل ثقافة كناوة متاحة للمبتدئين؟"
        },
        answer: {
          fr: "Oui, si le séjour est bien guidé. Quelques explications claires suffisent à rendre l'expérience très vivante.",
          en: "Yes, if the stay is well guided. A few clear explanations are enough to make the experience very lively.",
          ar: "نعم، إذا كانت الإقامة موجهة جيدًا. بعض التفسيرات الواضحة كافية لجعل التجربة حية جدًا."
        }
      },
      {
        question: {
          fr: "Essaouira est-elle le meilleur point d'entrée ?",
          en: "Is Essaouira the best entry point?",
          ar: "هل الصويرة أفضل نقطة دخول؟"
        },
        answer: {
          fr: "C'est souvent l'un des plus beaux points d'entrée grâce à son histoire et son atmosphère.",
          en: "It is often one of the most beautiful entry points thanks to its history and atmosphere.",
          ar: "غالبًا ما تكون واحدة من أجمل نقاط الدخول بفضل تاريخها وأجواءها."
        }
      },
      {
        question: {
          fr: "Comment éviter une approche trop touristique ?",
          en: "How to avoid a too touristic approach?",
          ar: "كيف تتجنبين النهج السياحي المفرط؟"
        },
        answer: {
          fr: "Privilégiez les rencontres encadrées par des acteurs locaux et les séjours qui valorisent la transmission.",
          en: "Prioritize meetings supervised by local actors and stays that value transmission.",
          ar: "فضل اللقاءات التي يشرف عليها فاعلون محليون والإقامات التي تقدر النقل الثقافي."
        }
      }
    ]
  },
  {
    slug: "business-trip-marrakech-golf-conciergerie",
    title: {
      fr: "Business trip Marrakech golf: organiser un séjour qui fait gagner du temps",
      en: "Marrakech Business Trip Golf: Organize a Time-Saving Stay",
      ar: "رحلة عمل مراكش غولف: تنظيم إقامة توفر الوقت"
    },
    category: { fr: "Executive", en: "Executive", ar: "التنفيذي" },
    excerpt: {
      fr: "Le bon séjour business à Marrakech doit être fluide, discret et utile. Voici comment structurer une expérience vraiment premium.",
      en: "The right business stay in Marrakech must be smooth, discreet and useful. Here is how to structure a truly premium experience.",
      ar: "يجب أن تكون إقامة العمل المناسبة في مراكش سلسة وسرية ومفيدة. إليك كيفية هيكلة تجربة متميزة حقًا."
    },
    metaTitle: {
      fr: "Business trip Marrakech golf | Guide conciergerie premium",
      en: "Marrakech Business Trip Golf | Premium Concierge Guide",
      ar: "رحلة عمل مراكش غولف | دليل الخدمات المتميزة"
    },
    metaDescription: {
      fr: "Apprenez à organiser un business trip à Marrakech avec golf, networking et conciergerie privée pour dirigeants.",
      en: "Learn to organize a business trip to Marrakech with golf, networking and private concierge for executives.",
      ar: "تعلم تنظيم رحلة عمل إلى مراكش مع الغولف والتواصل وخدمة الكونسيرج الخاصة للمدراء التنفيذيين."
    },
    keyword: {
      fr: "business trip Marrakech golf",
      en: "Marrakech business trip golf",
      ar: "رحلة عمل مراكش غولف"
    },
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-03",
    readingTime: { fr: "6 min", en: "6 min", ar: "6 دقائق" },
    heroImage: "/public/images/riad_golf.jpg",
    heroAlt: {
      fr: "Table raffinée dans un restaurant haut de gamme.",
      en: "Refined table in a high-end restaurant.",
      ar: "طاولة أنيقة في مطعم راقٍ."
    },
    ctaLabel: {
      fr: "Découvrir Executive",
      en: "Discover Executive",
      ar: "اكتشف التنفيذي"
    },
    ctaHref: "/executive",
    sections: [
      {
        heading: {
          fr: "Pourquoi le business trip n'est pas qu'un mot-clé",
          en: "Why the business trip is not just a keyword",
          ar: "لماذا رحلة العمل ليست مجرد كلمة مفتاحية"
        },
        paragraphs: [
          {
            fr: "La plupart des dirigeants ne veulent pas seulement un hôtel. Ils veulent un séjour qui protège leur temps, leur image et la qualité de leurs interactions.",
            en: "Most executives don't just want a hotel. They want a stay that protects their time, their image and the quality of their interactions.",
            ar: "معظم المدراء التنفيذيين لا يريدون مجرد فندق. إنهم يريدون إقامة تحمي وقتهم وصورتهم وجودة تفاعلاتهم."
          }
        ]
      },
      {
        heading: {
          fr: "Les éléments qui font la différence",
          en: "The elements that make the difference",
          ar: "العناصر التي تصنع الفرق"
        },
        bullets: [
          { fr: "Transferts privés et ponctuels.", en: "Private and punctual transfers.", ar: "انتقالات خاصة وفي الوقت المحدد." },
          { fr: "Planning clair entre réunions, golf et dîners.", en: "Clear schedule between meetings, golf and dinners.", ar: "جدول زمني واضح بين الاجتماعات والغولف والعشاء." },
          { fr: "Networking qualifié plutôt qu'événements génériques.", en: "Qualified networking rather than generic events.", ar: "تواصل مؤهل بدلاً من الأحداث العامة." },
          { fr: "Conciergerie réactive et discrète.", en: "Responsive and discreet concierge.", ar: "خدمة كونسيرج سريعة الاستجابة وسرية." },
          { fr: "Expériences qui renforcent la relation client ou partenaire.", en: "Experiences that strengthen client or partner relationships.", ar: "تجارب تعزز علاقات العملاء أو الشركاء." }
        ],
        paragraphs: [
          {
            fr: "Le vrai luxe, c'est l'absence de friction. Tout doit donner l'impression d'être simple.",
            en: "True luxury is the absence of friction. Everything must feel simple.",
            ar: "الرفاهية الحقيقية هي غياب الاحتكاك. كل شيء يجب أن يبدو بسيطًا."
          }
        ]
      },
      {
        heading: {
          fr: "Pourquoi une conciergerie aide à convertir",
          en: "Why a concierge helps convert",
          ar: "لماذا يساعد الكونسيرج في التحويل"
        },
        paragraphs: [
          {
            fr: "Sur ce segment, la confiance se construit dans les détails: temps de réponse, clarté du parcours, discrétion et capacité à personnaliser.",
            en: "In this segment, trust is built in the details: response time, clarity of the journey, discretion and ability to personalize.",
            ar: "في هذا القطاع، تُبنى الثقة في التفاصيل: وقت الاستجابة، وضوح المسار، السرية والقدرة على التخصيص."
          }
        ]
      }
    ],
    faqs: [
      {
        question: {
          fr: "Pourquoi associer golf et business ?",
          en: "Why combine golf and business?",
          ar: "لماذا الجمع بين الغولف والأعمال؟"
        },
        answer: {
          fr: "Parce que le golf crée un cadre relationnel plus détendu pour discuter et renforcer une relation professionnelle.",
          en: "Because golf creates a more relaxed relational setting to discuss and strengthen a professional relationship.",
          ar: "لأن الغولف يخلق إطارًا علائقيًا أكثر استرخاءً للمناقشة وتقوية العلاقة المهنية."
        }
      },
      {
        question: {
          fr: "La conciergerie convient-elle à un voyage court ?",
          en: "Is the concierge suitable for a short trip?",
          ar: "هل الكونسيرج مناسب لرحلة قصيرة؟"
        },
        answer: {
          fr: "Oui, surtout quand le temps est limité et que chaque transition doit être optimisée.",
          en: "Yes, especially when time is limited and every transition must be optimized.",
          ar: "نعم، خاصة عندما يكون الوقت محدودًا ويجب تحسين كل انتقال."
        }
      },
      {
        question: {
          fr: "Comment réserver un séjour de ce type ?",
          en: "How to book this type of stay?",
          ar: "كيف تحجز هذا النوع من الإقامة؟"
        },
        answer: {
          fr: "Le plus efficace est de passer par une demande qualifiée pour construire un programme sur mesure.",
          en: "The most efficient is to go through a qualified request to build a tailor-made program.",
          ar: "الأكثر فعالية هو تقديم طلب مؤهل لبناء برنامج مخصص."
        }
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLocalizedPost(slug: string, locale: Locale) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return undefined;

  return {
    ...post,
    title: pick(post.title, locale),
    category: pick(post.category, locale),
    excerpt: pick(post.excerpt, locale),
    metaTitle: pick(post.metaTitle, locale),
    metaDescription: pick(post.metaDescription, locale),
    keyword: pick(post.keyword, locale),
    readingTime: pick(post.readingTime, locale),
    heroAlt: pick(post.heroAlt, locale),
    ctaLabel: pick(post.ctaLabel, locale),
    sections: post.sections.map((s) => ({
      heading: pick(s.heading, locale),
      paragraphs: s.paragraphs.map((p) => pick(p, locale)),
      bullets: s.bullets?.map((b) => pick(b, locale))
    })),
    faqs: post.faqs.map((f) => ({
      question: pick(f.question, locale),
      answer: pick(f.answer, locale)
    }))
  };
}

export function getLocalizedPosts(locale: Locale) {
  return blogPosts.map((post) => getLocalizedPost(post.slug, locale)!);
}
