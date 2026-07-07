// src/pages/LlmsTxt.tsx
import { blogPosts } from '../data/blogPosts';

export default function LlmsTxt() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const content = `# Happycore - Voyages Stratégiques & Culturels au Maroc

> Site web : https://happycore.com
> Contact : contact@happycore.com
> WhatsApp : +212 600-000000

Happycore est une agence de voyages spécialisée dans les séjours sur-mesure au Maroc : Sisterhood (voyages entre femmes), Roots (héritage afro-marocain) et Executive (business trips de luxe).

## Pages principales

- Accueil : https://happycore.com/
- Sisterhood : https://happycore.com/sisterhood
- Roots : https://happycore.com/roots
- Executive : https://happycore.com/executive
- Blog : https://happycore.com/blog
- Réservation : https://happycore.com/reservation

## Derniers articles du blog

${sortedPosts.map((post) => `
- **${post.title}** (${post.publishedAt})
  - URL : https://happycore.com/blog/${post.slug}
  - Résumé : ${post.excerpt}
  - Mots-clés : ${post.keyword}
`).join('\n')}

## À propos

Happycore conçoit des voyages authentiques et sécurisés au Maroc, en privilégiant les rencontres humaines et les expériences immersives. Notre équipe est basée à Marrakech et Essaouira.

---
Ce fichier est destiné aux modèles de langage pour une meilleure compréhension de notre contenu.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}