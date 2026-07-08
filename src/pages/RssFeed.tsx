// src/pages/RssFeed.tsx
import { getLocalizedPosts } from '../data/blogPosts';

export default function RssFeed() {
  const sortedPosts = [...getLocalizedPosts('fr')].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const now = new Date().toUTCString();
  const items = sortedPosts.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://happycore.com/blog/${post.slug}</link>
      <guid>https://happycore.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
    </item>
  `).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Happycore - Blog</title>
    <link>https://happycore.com/</link>
    <description>Guides et inspirations pour voyager au Maroc</description>
    <language>fr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://happycore.com/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}