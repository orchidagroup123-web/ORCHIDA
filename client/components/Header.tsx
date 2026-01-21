import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export function Header() {
  const { t } = useTranslation();
  const { language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-800/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(5,8,22,0.7)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fcd87277187a34a1a87ce0c3acf2379a5?format=webp&width=800&height=1200"
              alt="Orchida Group"
              className="h-24 w-auto drop-shadow-[0_8px_25px_rgba(0,0,0,0.45)]"
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orchida-red to-orchida-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold text-white transition-all duration-300 border border-white/20 shadow-inner"
            >
              {t("language")}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg text-white"
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
          <nav className="md:hidden pb-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-2 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded"
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
