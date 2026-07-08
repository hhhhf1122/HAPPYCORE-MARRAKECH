import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getLocalizedPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { useI18n } from '../i18n/I18nProvider';

export default function BlogIndex() {
  const { t, locale } = useI18n();
  const sortedPosts = getLocalizedPosts(locale).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="bg-stone-50 text-stone-900">
      <SEO
        title={`${t('common.blog')} | ${t('common.brand')}`}
        description={t('blog.description')}
        canonical="/blog"
        keywords="blog voyage maroc, guide marrakech, conseil voyage, sisterhood blog, roots blog, executive blog"
      />

      <section className="relative overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,250,249,0.96),rgba(245,245,244,0.98))]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500"
            >
              {t('blog.editorial')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-stone-950"
            >
              {t('blog.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-600"
            >
              {t('blog.description')}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sortedPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={post.heroAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-4 p-7">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                      <span>{post.category}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-stone-950">{post.title}</h2>
                    <p className="text-sm leading-6 text-stone-600">{post.excerpt}</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                      {t('blog.keyword')}: {post.keyword}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
