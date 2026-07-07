export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  ctaLabel: string;
  ctaHref: string;
  sections: BlogSection[];
  faqs: BlogFAQ[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "voyage-solo-femme-marrakech-securise",
    title: "Voyage solo femme Marrakech sécurisé: le guide pour partir sereine",
    category: "Sisterhood",
    excerpt:
      "Les points essentiels pour choisir un séjour vraiment rassurant à Marrakech, sans sacrifier le plaisir, le confort ou la liberté.",
    metaTitle: "Voyage solo femme Marrakech sécurisé | Guide complet",
    metaDescription:
      "Découvrez comment organiser un voyage solo femme à Marrakech avec sécurité, chauffeurs privés, riads audités et bonnes pratiques simples.",
    keyword: "voyage solo femme Marrakech sécurisé",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "6 min",
    heroImage:
      "https://images.pexels.com/photos/28076408/pexels-photo-28076408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    heroAlt:
      "Deux femmes marchant dans un paysage marocain au coucher du soleil.",
    ctaLabel: "Voir l'experience Sisterhood",
    ctaHref: "/sisterhood",
    sections: [
      {
        heading: "Pourquoi cette recherche est si frequente",
        paragraphs: [
          "Quand une femme prepare un sejour seule, la question n'est pas seulement ou aller, mais comment me sentir en confiance du debut a la fin. C'est exactement pour repondre a cette attente que les recherches autour de voyage solo femme Marrakech sécurisé sont si specifiques.",
          "Un bon sejour solo doit reduire la charge mentale. Transport, riad, rythme des journees, transferts et accueil doivent etre penses pour eviter les zones de stress inutiles.",
        ],
      },
      {
        heading: "Les criteres qui changent vraiment tout",
        bullets: [
          "Chauffeur ou chauffeuse privee pour les deplacements cles.",
          "Riad teste, central, calme et bien note.",
          "Petit groupe ou format individuel avec accompagnement clair.",
          "Programme simple, lisible et flexible.",
          "Point de contact humain disponible avant et pendant le voyage.",
        ],
        paragraphs: [
          "Ce sont des details concrets, mais ce sont eux qui transforment une reservation hesitante en decision rassurante.",
        ],
      },
      {
        heading: "Comment Happycore Sisterhood repond a ce besoin",
        paragraphs: [
          "Sisterhood a ete construit pour les voyageuses qui veulent vivre Marrakech avec elegance et securite. L'offre privilegie un groupe reduit, un accompagnement humain et une logistique tres cadree.",
          "Si vous cherchez une experience prete a reserver, le bon reflexe est de partir d'une offre qui a deja filtre les risques a votre place.",
        ],
      },
    ],
    faqs: [
      {
        question: "Marrakech est-elle adaptee a un premier voyage solo ?",
        answer:
          "Oui, a condition d'arriver avec une organisation serieuse: transferts reserves, hebergement de confiance et itineraire clair.",
      },
      {
        question: "Pourquoi choisir un groupe reduit ?",
        answer:
          "Un petit groupe permet de garder une ambiance intime, de mieux gerer les trajets et de conserver une vraie qualite d'attention.",
      },
      {
        question: "Quelle est la meilleure facon de reserver sereinement ?",
        answer:
          "Commencez par une offre pensee pour ce besoin precis, puis echangez directement avec l'equipe avant de confirmer.",
      },
    ],
  },
  {
    slug: "riad-marrakech-femme-seule",
    title: "Quel riad choisir a Marrakech quand on voyage seule ?",
    category: "Sisterhood",
    excerpt:
      "Un guide simple pour comprendre ce qui differencie un riad photogenique d'un riad vraiment rassurant pour une voyageuse seule.",
    metaTitle: "Quel riad choisir a Marrakech quand on voyage seule ?",
    metaDescription:
      "Apprenez a selectionner un riad a Marrakech pour femme seule avec les bons criteres de securite, d'emplacement et de confort.",
    keyword: "riad Marrakech femme seule",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
    readingTime: "5 min",
    heroImage:
      "https://images.pexels.com/photos/10573397/pexels-photo-10573397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    heroAlt: "Cour interieure lumineuse d'un riad marocain traditionnel.",
    ctaLabel: "Explorer Sisterhood",
    ctaHref: "/sisterhood",
    sections: [
      {
        heading: "Le bon riad n'est pas seulement beau",
        paragraphs: [
          "Pour une femme seule, le riad ideal ne se resume pas a une belle piscine ou a une decoration Instagram. Il faut regarder la localisation, la fluidite du check-in, la discretion du personnel et la facilite d'acces aux transferts.",
          "L'objectif est simple: arriver sans confusion et sortir sans friction.",
        ],
      },
      {
        heading: "Les signaux de confiance a verifier",
        bullets: [
          "Adresse centrale ou facile a rejoindre en voiture.",
          "Equipe reactive avant l'arrivee.",
          "Avis recents mentionnant la proprete et l'accueil.",
          "Possibilite de transfert prive.",
          "Espaces calmes, bien fermes et faciles a comprendre.",
        ],
        paragraphs: [
          "La meilleure experience est celle qui vous laisse profiter du sejour, pas gerer l'organisation.",
        ],
      },
      {
        heading: "Pourquoi une offre cle en main rassure",
        paragraphs: [
          "Quand le riad, les transferts et le rythme du sejour sont coordonnes au meme endroit, la confiance monte immediatement. C'est ce que recherche la majorite des voyageuses qui tapent ce type de requete.",
        ],
      },
    ],
    faqs: [
      {
        question: "Faut-il privilegier la medina ou un quartier plus calme ?",
        answer:
          "Tout depend du niveau d'accompagnement. Avec une logistique privee, la medina peut etre tres agreable; sans accompagnement, un quartier plus simple peut etre plus confortable.",
      },
      {
        question: "Le prix est-il un bon indicateur ?",
        answer:
          "Pas seul. Le plus important reste le niveau de serenite offert par le lieu et la qualite de l'organisation autour.",
      },
      {
        question: "Comment eviter les mauvaises surprises ?",
        answer:
          "Reservez via une offre qui a deja pre-selectionne les hebergements et teste le parcours client.",
      },
    ],
  },
  {
    slug: "voyage-afro-maroc-diaspora",
    title: "Voyage afro Maroc: pourquoi Essaouira parle autant a la diaspora",
    category: "Roots",
    excerpt:
      "Une lecture culturelle et emotionnelle pour comprendre pourquoi Essaouira et Marrakech attirent autant les voyageurs de la diaspora afro.",
    metaTitle: "Voyage afro Maroc | Pourquoi Essaouira touche la diaspora",
    metaDescription:
      "Explorez un voyage afro au Maroc autour de la memoire, des communautes vivantes, d'Essaouira et de l'heritage Gnawa.",
    keyword: "voyage afro Maroc",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: "7 min",
    heroImage:
      "https://images.pexels.com/photos/37442103/pexels-photo-37442103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    heroAlt: "Rue vivante et architecture historique a Essaouira.",
    ctaLabel: "Decouvrir Roots",
    ctaHref: "/roots",
    sections: [
      {
        heading: "Un voyage de sens avant d'etre un voyage de style",
        paragraphs: [
          "De nombreux voyageurs de la diaspora ne cherchent pas seulement une destination. Ils cherchent un point de contact avec une histoire, une esthetique, une musique et une memoire partagee.",
          "Le Maroc, et plus precisement Essaouira, repond a cette attente avec une densite culturelle rare.",
        ],
      },
      {
        heading: "Pourquoi Essaouira revient souvent dans les recherches",
        bullets: [
          "Ville cotiere plus douce et contemplative.",
          "Presence d'une scene Gnawa vivante et accessible.",
          "Atmosphere propice aux conversations et aux rencontres.",
          "Rythme plus apaise que les grandes villes.",
          "Pont naturel entre memoire, mer et artisanat.",
        ],
        paragraphs: [
          "C'est un terrain ideal pour un voyage a la fois esthetique, emotionnel et instructif.",
        ],
      },
      {
        heading: "Comment creer une vraie immersion",
        paragraphs: [
          "L'immersion n'arrive pas par hasard. Elle demande des rencontres choisies, un contexte clair et un rythme qui laisse de la place a l'ecoute. C'est pour cela que les sejours cles en main fonctionnent si bien sur cette intention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Est-ce un voyage purement culturel ?",
        answer:
          "Il est culturel, emotionnel et relationnel. L'objectif est de faire dialoguer histoire, musique, communaute et experience vecue.",
      },
      {
        question: "Pourquoi associer Marrakech et Essaouira ?",
        answer:
          "Parce que les deux villes creent un contraste utile entre intensite urbaine et respiration cotiere, ce qui enrichit fortement le sejour.",
      },
      {
        question: "Faut-il deja connaitre l'histoire Gnawa ?",
        answer:
          "Non. Le bon voyage est justement celui qui rend cette histoire accessible, vivante et facile a ressentir.",
      },
    ],
  },
  {
    slug: "culture-gnawa-essaouira-guide",
    title: "Culture Gnawa a Essaouira: guide simple pour une immersion vraie",
    category: "Roots",
    excerpt:
      "Comprendre les bases de la culture Gnawa avant de partir change completement la qualite de l'experience sur place.",
    metaTitle: "Culture Gnawa Essaouira | Guide d'immersion",
    metaDescription:
      "Un guide clair sur la culture Gnawa a Essaouira pour preparer un voyage plus profond, plus juste et plus memorable.",
    keyword: "culture Gnawa Essaouira",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    readingTime: "6 min",
    heroImage:
      "https://images.pexels.com/photos/25254928/pexels-photo-25254928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    heroAlt:
      "Vue historique d'Essaouira avec ses murs blancs et ses influences atlantiques.",
    ctaLabel: "Voir l'experience Roots",
    ctaHref: "/roots",
    sections: [
      {
        heading: "Pourquoi ce sujet merite un vrai guide",
        paragraphs: [
          "La culture Gnawa est souvent reduite a quelques images ou a un festival. Pourtant, elle porte une profondeur historique, musicale et spirituelle qui merite plus de nuance.",
          "Un bon voyageur gagne beaucoup a comprendre au moins les bases avant d'arriver.",
        ],
      },
      {
        heading: "Les reperes essentiels",
        bullets: [
          "Le role central de la musique et du rythme.",
          "La place du maitre musicien, souvent appele Maalem.",
          "Le lien entre memoire, transmission et communaute.",
          "L'ancrage d'Essaouira comme ville de rencontre.",
          "L'importance d'une approche respectueuse et non folklorisee.",
        ],
        paragraphs: [
          "Ces reperes simples suffisent deja a transformer une visite en experience plus fine.",
        ],
      },
      {
        heading: "Le bon angle pour un sejour de marque",
        paragraphs: [
          "Pour un sejour premium, l'enjeu n'est pas seulement de voir. Il faut entendre, rencontrer et comprendre. C'est ce melange qui rend l'experience plus rare et plus memorable.",
        ],
      },
    ],
    faqs: [
      {
        question: "La culture Gnawa est-elle accessible aux debutants ?",
        answer:
          "Oui, si le sejour est bien guide. Quelques explications claires suffisent a rendre l'experience tres vivante.",
      },
      {
        question: "Essaouira est-elle le meilleur point d'entree ?",
        answer:
          "C'est souvent l'un des plus beaux points d'entree grace a son histoire, sa scene musicale et son atmosphere plus douce.",
      },
      {
        question: "Comment eviter une approche trop touristique ?",
        answer:
          "Privilegiez les rencontres encadrees par des acteurs locaux et les sejours qui valorisent la transmission plutot que la simple consommation visuelle.",
      },
    ],
  },
  {
    slug: "business-trip-marrakech-golf-conciergerie",
    title:
      "Business trip Marrakech golf: organiser un sejour qui fait gagner du temps",
    category: "Executive",
    excerpt:
      "Le bon sejour business a Marrakech doit etre fluide, discret et utile. Voici comment structurer une experience vraiment premium.",
    metaTitle: "Business trip Marrakech golf | Guide conciergerie premium",
    metaDescription:
      "Apprenez a organiser un business trip a Marrakech avec golf, networking et conciergerie privee pour dirigeants et equipes exigeantes.",
    keyword: "business trip Marrakech golf",
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-03",
    readingTime: "6 min",
    heroImage:
      "https://images.pexels.com/photos/17057034/pexels-photo-17057034.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920",
    heroAlt: "Table raffinee dans un restaurant haut de gamme.",
    ctaLabel: "Decouvrir Executive",
    ctaHref: "/executive",
    sections: [
      {
        heading: "Pourquoi le business trip n'est pas qu'un mot-cle",
        paragraphs: [
          "La plupart des dirigeants ne veulent pas seulement un hotel. Ils veulent un sejour qui protege leur temps, leur image et la qualite de leurs interactions.",
          "Le mot-cle business trip Marrakech golf signale souvent une intention tres precise: optimiser un deplacement sans perdre le niveau d'exigence.",
        ],
      },
      {
        heading: "Les elements qui font la difference",
        bullets: [
          "Transferts prives et ponctuels.",
          "Planning clair entre reunions, golf et dîners.",
          "Networking qualifie plutot qu'evenements generiques.",
          "Conciergerie reactive et discrete.",
          "Experiences qui renforcent la relation client ou partenaire.",
        ],
        paragraphs: [
          "Le vrai luxe, c'est l'absence de friction. Tout doit donner l'impression d'etre simple.",
        ],
      },
      {
        heading: "Pourquoi une conciergerie aide a convertir",
        paragraphs: [
          "Sur ce segment, la confiance se construit dans les details: temps de reponse, clarte du parcours, discretion et capacite a personnaliser. Une offre bien pensee rassure avant meme l'arrivee.",
        ],
      },
    ],
    faqs: [
      {
        question: "Pourquoi associer golf et business ?",
        answer:
          "Parce que le golf cree un cadre relationnel plus detendu pour discuter, observer et renforcer une relation professionnelle.",
      },
      {
        question: "La conciergerie convient-elle a un voyage court ?",
        answer:
          "Oui, surtout quand le temps est limite et que chaque transition doit etre optimisee.",
      },
      {
        question: "Comment reserver un sejour de ce type ?",
        answer:
          "Le plus efficace est de passer par une demande qualifiee pour construire un programme sur mesure.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
