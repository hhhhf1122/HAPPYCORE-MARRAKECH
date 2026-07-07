import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogPosts } from "../src/data/blogPosts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const SITE_URL = "https://happycore.com";

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "<";
      case ">": return ">";
      case "&": return "&";
      case "'": return "'";
      case '"': return '"';
      default: return c;
    }
  });
}

function generateLlmsTxt() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const postsSection = sorted
    .map(
      (p) =>
        `- **${p.title}** (${p.publishedAt})
  - URL : ${SITE_URL}/blog/${p.slug}
  - Résumé : ${p.excerpt}
  - Mots-clés : ${p.keyword}`,
    )
    .join("\n\n");

  return `# Happycore - Voyages Stratégiques & Culturels au Maroc

> Site web : ${SITE_URL}
> Contact : contact@happycore.com
> WhatsApp : +212 600-000000

Happycore est une agence de voyages spécialisée dans les séjours sur-mesure au Maroc : Sisterhood (voyages entre femmes), Roots (héritage afro-marocain) et Executive (business trips de luxe).

## Pages principales

- Accueil : ${SITE_URL}/
- Sisterhood : ${SITE_URL}/sisterhood
- Roots : ${SITE_URL}/roots
- Executive : ${SITE_URL}/executive
- Blog : ${SITE_URL}/blog
- Réservation : ${SITE_URL}/reservation

## Derniers articles du blog

${postsSection}

## À propos

Happycore conçoit des voyages authentiques et sécurisés au Maroc, en privilégiant les rencontres humaines et les expériences immersives. Notre équipe est basée à Marrakech et Essaouira.

---
Ce fichier est destiné aux modèles de langage pour une meilleure compréhension de notre contenu.
`;
}

function generateFullLlmsTxt() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const postsFull = sorted
    .map((p) => {
      const sectionsBody = p.sections
        .map(
          (s) =>
            `### ${s.heading}

${s.paragraphs.map((par) => par).join("\n\n")}
${s.bullets ? `\n${s.bullets.map((b) => `- ${b}`).join("\n")}` : ""}`,
        )
        .join("\n\n");

      const faqBody = p.faqs
        .map((f) => `- Q : ${f.question}\n  R : ${f.answer}`)
        .join("\n\n");

      return `## ${p.title}

- **Catégorie** : ${p.category}
- **Date** : ${p.publishedAt}
- **URL** : ${SITE_URL}/blog/${p.slug}
- **Temps de lecture** : ${p.readingTime}
- **Extrait** : ${p.excerpt}

### Sections

${sectionsBody}

### FAQ

${faqBody}
`;
    })
    .join("\n\n---\n\n");

  return `# Happycore - Contenu Complet pour IA

> Site web : ${SITE_URL}
> Contact : contact@happycore.com
> Dernière mise à jour : ${new Date().toISOString().split("T")[0]}

Happycore est une agence de voyages spécialisée dans les séjours sur-mesure au Maroc : Sisterhood (voyages entre femmes), Roots (héritage afro-marocain) et Executive (business trips de luxe).

## Pages principales

- Accueil : ${SITE_URL}/
- Sisterhood : ${SITE_URL}/sisterhood
- Roots : ${SITE_URL}/roots
- Executive : ${SITE_URL}/executive
- Blog : ${SITE_URL}/blog
- Réservation : ${SITE_URL}/reservation

---

# Articles complets

${postsFull}

---
Ce fichier contient l'intégralité du contenu éditorial pour une compréhension approfondie par les modèles de langage.
`;
}

function generateRss() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const now = new Date().toUTCString();
  const items = sorted
    .map(
      (p) =>
        `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid>${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      <category>${escapeXml(p.category)}</category>
    </item>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Happycore - Blog</title>
    <link>${SITE_URL}/</link>
    <description>Guides et inspirations pour voyager au Maroc</description>
    <language>fr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, "llms.txt"), generateLlmsTxt());
  fs.writeFileSync(path.join(PUBLIC_DIR, "full-llms.txt"), generateFullLlmsTxt());
  fs.writeFileSync(path.join(PUBLIC_DIR, "rss.xml"), generateRss());

  console.log("✅ llms.txt, full-llms.txt et rss.xml générés dans public/");
}

main();