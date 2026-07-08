import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getLocalizedPost, getLocalizedPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import TableOfContents from '../components/TableOfContents';
import { useI18n } from '../i18n/I18nProvider';

function buildSchema(post: { title: string; metaDescription: string; heroImage: string; publishedAt: string; updatedAt: string; keyword: string; category: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.heroImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Happycore'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Happycore'
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.article-content p']
    },
    about: {
      '@type': 'Thing',
      name: post.keyword,
      category: post.category
    }
  };
}

function buildFaqSchema(post: { faqs: { question: string; answer: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

function buildBreadcrumbSchema(post: { title: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Happycore", "item": "https://happycore.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://happycore.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://happycore.com/blog/${post.slug}` }
    ]
  };
}

export default function BlogPost() {
  const { slug } = useParams();
  const { t, locale } = useI18n();
  const post = slug ? getLocalizedPost(slug, locale) : undefined;
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  if (!post) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-400">{t('blog.notFound')}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950">{t('blog.notFoundDesc')}</h1>
        <p className="mt-4 text-stone-600">{t('blog.goBack')}</p>
        <Link
          to="/blog"
          className="mx-auto mt-8 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
        >
          {t('blog.backToBlog')}
        </Link>
      </div>
    );
  }

  const relatedPosts = getLocalizedPosts(locale).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-stone-50 text-stone-900">
      {/* SEO avec composant unifié */}
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        image={post.heroImage}
        type="article"
        publishedTime={post.publishedAt}
        keywords={post.keyword}
      />

      {/* Scripts JSON-LD supplémentaires */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(buildSchema(post))}</script>
        <script type="application/ld+json">{JSON.stringify(buildFaqSchema(post))}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(post))}</script>
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-200 z-[60]">
        <div
          className="h-full bg-stone-900 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back to Top Button */}
      {readingProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-5 z-[60] bg-stone-900 text-white w-12 h-12 rounded-full shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center"
          aria-label={t('common.backToTop')}
        >
          <span className="text-xl">↑</span>
        </button>
      )}

      <header className="relative overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src={post.heroImage} alt={post.heroAlt} className="h-full w-full object-cover brightness-[0.42]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-28 text-white md:px-12">
          <nav className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-300/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">{t('common.home')}</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">{t('common.blog')}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.category}</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-200/80">
            {post.category} - {post.readingTime}
          </p>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200/90">
            {post.excerpt}
          </p>
        </div>
      </header>
       <TableOfContents
        sections={post.sections.map((s, i) => ({ heading: s.heading, id: `section-${i}` }))}
      />
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-12">
        <div className="mb-14 flex items-center justify-between border-b border-stone-200 pb-6 text-sm text-stone-500">
          <span>{t('blog.keyword')}: {post.keyword}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
        </div>

        <div className="article-content space-y-14">
          {post.sections.map((section, index) => (
            <section key={section.heading} className="space-y-5">
              <h2 id={`section-${index}`} className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-950">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-stone-600">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 border-l border-stone-200 pl-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-base leading-7 text-stone-700">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400">{t('blog.faq')}</p>
          <div className="mt-6 space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-stone-100 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold text-stone-950">{faq.question}</h3>
                <p className="mt-2 text-stone-600 leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-stone-950 px-8 py-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-300">{t('blog.nextStep')}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{t('blog.goToExperience')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to={post.ctaHref}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950 transition-colors hover:bg-stone-200"
            >
              {post.ctaLabel}
            </Link>
            {/* Lien interne supplémentaire vers un article connexe pour renforcer le maillage */}
            {relatedPosts.length > 0 && (
              <Link
                to={`/blog/${relatedPosts[0].slug}`}
                className="text-sm text-stone-400 underline hover:text-white transition-colors"
              >
                {t('blog.readAnother')} {relatedPosts[0].title}
              </Link>
            )}
          </div>
        </div>

        <section className="mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400">{t('blog.relatedArticles')}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                  {related.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-stone-950">{related.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
         {/* Auteur */}
        <div className="mt-16 flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-100 p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stone-800 text-sm font-bold text-white">
            HE
          </div>
          <div>
              <p className="text-sm font-semibold text-stone-950">{t('blog.authorName')}</p>
              <p className="text-sm text-stone-500">{t('blog.authorRole')}</p>
              <p className="mt-1 text-xs leading-5 text-stone-400">
                {t('blog.authorDesc')}
              </p>
            </div>
          </div>
      </div>
    </article>
  );
}
