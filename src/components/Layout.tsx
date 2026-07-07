import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import StickyMobileCTA from './StickyMobileCTA';
import LanguageSwitcher from './LanguageSwitcher';
import { ToastContainer } from './Toast';
import { useI18n } from '../i18n/I18nProvider';
import { openMailto } from '../lib/mailto';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, dir } = useI18n();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openMailto(t('footer.email'));
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { key: 'sisterhood', path: '/sisterhood', color: 'rose' },
    { key: 'roots', path: '/roots', color: 'emerald' },
    { key: 'executive', path: '/executive', color: 'blue' },
    { key: 'blog', path: '/blog', color: 'stone' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50 text-stone-900 selection:bg-stone-200" dir={dir}>
      
      {/* Header - Minimalist Luxury */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-stone-100 py-3 md:py-4' 
            : 'bg-transparent border-b border-white/10 py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex justify-between items-center gap-4">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-sm md:text-base tracking-[0.15em] md:tracking-[0.25em] font-semibold uppercase flex-shrink-0 transition-colors duration-500 ${
              isScrolled || location.pathname !== '/' ? 'text-stone-900' : 'text-white'
            }`}
          >
            {t('common.brand')}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.key} 
                to={item.path} 
                className={`text-[11px] font-medium tracking-[0.12em] xl:tracking-[0.15em] uppercase relative group whitespace-nowrap transition-colors duration-300 ${
                  isScrolled || location.pathname !== '/' 
                    ? 'text-stone-600 hover:text-stone-900' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {t(`nav.${item.key}` as any)}
                <span className={`absolute -bottom-2 start-0 w-0 h-[1px] transition-all duration-500 ease-out group-hover:w-full ${
                  isScrolled || location.pathname !== '/' ? 'bg-stone-900' : 'bg-white'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher dark={!isScrolled && location.pathname === '/'} />
            <Link
              to="/sisterhood"
              className={`inline-flex items-center px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                isScrolled || location.pathname !== '/'
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              {t('reserve')}
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher dark={!isScrolled && location.pathname === '/'} />
            {/* Hamburger - Animated lines */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isMenuOpen 
                  ? 'bg-stone-900' 
                  : isScrolled || location.pathname !== '/' 
                    ? 'bg-transparent' 
                    : 'bg-transparent'
              }`}
              aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-3.5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className={`absolute start-0 top-0 w-full h-[1.5px] transition-colors duration-300 ${
                    isMenuOpen 
                      ? 'bg-white' 
                      : isScrolled || location.pathname !== '/' 
                        ? 'bg-stone-900' 
                        : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className={`absolute start-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] transition-colors duration-300 ${
                    isMenuOpen 
                      ? 'bg-white' 
                      : isScrolled || location.pathname !== '/' 
                        ? 'bg-stone-900' 
                        : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className={`absolute start-0 bottom-0 w-full h-[1.5px] transition-colors duration-300 ${
                    isMenuOpen 
                      ? 'bg-white' 
                      : isScrolled || location.pathname !== '/' 
                        ? 'bg-stone-900' 
                        : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed inset-0 z-40 bg-stone-950 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col pt-24 pb-12 px-6 sm:px-10">
              <nav className="flex-1 flex flex-col justify-center">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link 
                      to={item.path} 
                      className="group flex items-baseline justify-between py-4 md:py-5 border-b border-white/10"
                    >
                      <span className="text-4xl sm:text-5xl font-light tracking-tight text-white group-hover:text-stone-300 transition-colors">
                        {t(`nav.${item.key}` as any)}
                      </span>
                      <span className={`text-xs font-medium uppercase tracking-[0.2em] text-${item.color}-400 opacity-0 group-hover:opacity-100 transition-opacity`}>
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-12"
                >
                  <Link
                    to="/sisterhood"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full bg-white text-stone-900 font-semibold text-sm uppercase tracking-[0.15em] hover:bg-stone-100 transition-colors"
                  >
                    {t('reserve')}
                  </Link>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/10 text-xs text-stone-400 uppercase tracking-[0.15em]"
              >
                <span>{t('common.location')}</span>
                <a href={`mailto:${t('footer.email')}`} onClick={handleContactClick} className="hover:text-white transition-colors break-all">
                  {t('footer.email')}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] text-stone-400 pt-20 md:pt-24 pb-24 md:pb-12 px-4 sm:px-6 md:px-12 font-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-5">
            <Link to="/" className="block text-xl md:text-2xl tracking-[0.25em] text-white font-semibold uppercase mb-6 hover:opacity-70 transition-opacity duration-300">
              {t('common.brand')}
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-stone-500">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <span className="block text-[10px] font-semibold text-stone-600 uppercase tracking-[0.2em] mb-8">{t('footer.experiences')}</span>
            <ul className="space-y-5 text-sm tracking-wide">
              <li>
                <Link to="/sisterhood" className="hover:text-white transition-colors duration-300 inline-block">{t('nav.sisterhood')}</Link>
              </li>
              <li>
                <Link to="/roots" className="hover:text-white transition-colors duration-300 inline-block">{t('nav.roots')}</Link>
              </li>
              <li>
                <Link to="/executive" className="hover:text-white transition-colors duration-300 inline-block">{t('nav.executive')}</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-300 inline-block">{t('common.blog')}</Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <span className="block text-[10px] font-semibold text-stone-600 uppercase tracking-[0.2em] mb-8">{t('footer.contactConcierge')}</span>
            <ul className="space-y-5 text-sm tracking-wide break-words">
              <li>
                <a href={`mailto:${t('footer.email')}`} onClick={handleContactClick} className="hover:text-white transition-colors duration-300 inline-block break-all">
                  {t('footer.email')}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '212600000000'}`} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors duration-300 inline-block">
                  {t('footer.whatsapp')}
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-stone-500 italic">{t('common.location')}</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto mt-20 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.15em] text-stone-600 uppercase text-center md:text-start">
          <p>© {new Date().getFullYear()} {t('common.brand')} Travel. {t('common.allRightsReserved')}</p>
          <div className="flex gap-6 sm:gap-8 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors duration-300">{t('common.legal')}</a>
            <a href="#" className="hover:text-white transition-colors duration-300">{t('common.privacy')}</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <StickyMobileCTA />
      <ToastContainer />
    </div>
  );
}