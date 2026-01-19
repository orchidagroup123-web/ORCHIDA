import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export function HeroSection() {
  const { t } = useTranslation();
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Multi-layer overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Accent line above title */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-orchida-red to-orchida-green rounded-full"></div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          {t('heroSubtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => setShowWhoWeAre(true)}
            className="px-8 py-3 bg-orchida-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('whoWeAre')}
          </button>
          <a
            href="#sectors"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orchida-red transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('sectors')}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-white text-sm font-light">Scroll</p>
          <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Who We Are Modal/Overlay */}
      {showWhoWeAre && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-8 relative max-h-screen overflow-y-auto">
            <button
              onClick={() => setShowWhoWeAre(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-orchida-red mb-4">{t('whoWeAre')}</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Orchida International Company is a multi-sector conglomerate specializing in six major industries: Agricultural Health, Mining, International Trade, Livestock, Fisheries & Aquaculture, and Infrastructure Development.
              </p>
              <p>
                With over 20 years of experience, more than 500 dedicated employees, and operations spanning 10+ countries, we are committed to shaping a sustainable future through innovation, responsibility, and excellence.
              </p>
              <p>
                Our vision is to be a trusted global partner that delivers value across every sector we operate in, while maintaining the highest standards of quality, sustainability, and corporate responsibility.
              </p>
            </div>

            <button
              onClick={() => setShowWhoWeAre(false)}
              className="mt-6 px-6 py-2 bg-orchida-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
