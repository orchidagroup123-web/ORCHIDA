import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/about' },
    { label: t('sectors'), href: '/sectors' },
    { label: t('media'), href: '/media' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E31E24;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23006837;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='95' fill='url(%23grad1)' opacity='0.1'/%3E%3Cpath d='M100 40 L140 120 L100 160 L60 120 Z' fill='%23E31E24'/%3E%3Cpath d='M80 80 L100 120 L120 80 Z' fill='%23006837'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23FFD700'/%3E%3C/svg%3E"
              alt="Orchida"
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-orchida-red to-orchida-green bg-clip-text text-transparent">ORCHIDA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-orchida-red transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orchida-red to-orchida-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-orchida-red/10 to-orchida-green/10 hover:from-orchida-red/20 hover:to-orchida-green/20 text-sm font-semibold text-gray-800 transition-all duration-300 border border-orchida-red/20"
            >
              {t('language')}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-2 py-2 text-sm font-medium text-gray-700 hover:text-orchida-red hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
