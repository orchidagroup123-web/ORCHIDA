import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sectorsData } from '@/data/sectors';

export function SectorsSection() {
  const { t, language } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="sectors" className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-orchida-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-orchida-green rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
            <span className="text-orchida-red font-bold text-sm uppercase tracking-wider">قطاعاتنا</span>
            <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {t('sectors')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {language === 'ar'
              ? 'نستثمر في ستة قطاعات رئيسية لتحقيق النمو المستدام والابتكار المستمر'
              : 'We invest in six key sectors to achieve sustainable growth and continuous innovation'
            }
          </p>
        </div>

        {/* Sectors Grid - Enhanced Professional Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sectorsData.map((sector, index) => (
            <Link
              key={sector.id}
              to={`/sector/${sector.id}`}
              className="group h-80 cursor-pointer"
            >
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                onMouseEnter={() => setHoveredId(sector.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image with Enhanced Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
                  style={{ backgroundImage: `url(${sector.image})` }}
                >
                  {/* Multi-layer Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orchida-red/10 to-orchida-green/10"></div>
                </div>

                {/* Front Content - Always Visible Base */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orchida-red/30 to-orchida-green/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative text-7xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-110">
                      {sector.iconEmoji}
                    </div>
                  </div>

                  {/* Title with better visibility */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 leading-tight drop-shadow-lg transition-all duration-500 group-hover:text-orchida-red">
                    {language === 'ar' ? sector.nameAr : sector.nameEn}
                  </h3>

                  {/* Hover Indicator */}
                  <div
                    className={`absolute bottom-6 text-white text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
                      hoveredId === sector.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <span>اكتشف المزيد</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Hover Overlay - Description */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-orchida-red via-red-600 to-orchida-green p-8 flex flex-col items-center justify-center transition-all duration-700 ${
                    hoveredId === sector.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {/* Decorative top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/50"></div>

                  <div className="text-center space-y-6">
                    <p className="text-white text-center font-light text-lg leading-relaxed line-clamp-4">
                      {language === 'ar' ? sector.titleAr : sector.titleEn}
                    </p>

                    <button className="px-8 py-3 bg-white text-orchida-red font-bold rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg flex items-center gap-2 mx-auto group/btn">
                      <span>{t('readMore')}</span>
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-orchida-red via-gray-900 to-orchida-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
