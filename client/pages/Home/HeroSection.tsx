import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export function HeroSection() {
  const { t } = useTranslation();
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main background image with strong overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&h=1200&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Strong gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>

          {/* Accent color overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-orchida-red/20 via-transparent to-orchida-green/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-orchida-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-orchida-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl">
          {/* Top decorative element */}
          <div className="flex justify-center mb-12 gap-2 items-center">
            <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
            <span className="text-orchida-red font-semibold text-sm uppercase tracking-wider">ORCHIDA GROUP</span>
            <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tighter drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>

          {/* Subtitle with enhanced styling */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            {t('heroSubtitle')}
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
            <div className="px-4 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-orchida-red/50 transition-all">
              <div className="text-2xl font-bold text-orchida-red">20+</div>
              <div className="text-xs text-gray-300">سنة خبرة</div>
            </div>
            <div className="px-4 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-orchida-green/50 transition-all">
              <div className="text-2xl font-bold text-orchida-green">500+</div>
              <div className="text-xs text-gray-300">موظف</div>
            </div>
            <div className="px-4 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-gray-300 transition-all">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-gray-300">دول</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button
              onClick={() => setShowWhoWeAre(true)}
              className="px-10 py-4 bg-gradient-to-r from-orchida-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-red-600/50 flex items-center justify-center gap-2 group"
            >
              {t('whoWeAre')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="#sectors"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:shadow-white/50 flex items-center justify-center gap-2"
            >
              {t('sectors')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-white/70 text-sm font-medium">اكتشف المزيد</span>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Modal/Overlay */}
      {showWhoWeAre && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-screen overflow-y-auto shadow-2xl">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orchida-red to-orchida-green rounded-t-2xl"></div>

            <button
              onClick={() => setShowWhoWeAre(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-4xl font-bold text-orchida-red mb-2 pr-8">{t('whoWeAre')}</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-orchida-red to-orchida-green rounded-full mb-6"></div>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Orchida International Company is a multi-sector conglomerate specializing in six major industries: Agricultural Health, Mining, International Trade, Livestock, Fisheries & Aquaculture, and Infrastructure Development.
              </p>
              <p className="text-lg">
                With over 20 years of experience, more than 500 dedicated employees, and operations spanning 10+ countries, we are committed to shaping a sustainable future through innovation, responsibility, and excellence.
              </p>
              <p className="text-lg">
                Our vision is to be a trusted global partner that delivers value across every sector we operate in, while maintaining the highest standards of quality, sustainability, and corporate responsibility.
              </p>
            </div>

            <button
              onClick={() => setShowWhoWeAre(false)}
              className="mt-8 px-6 py-3 bg-orchida-red hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
