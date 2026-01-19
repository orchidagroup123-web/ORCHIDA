import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sectorsData } from '@/data/sectors';

export function SectorsSection() {
  const { t, language } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="sectors" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-orchida-red to-orchida-green rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('sectors')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'استكشف قطاعاتنا الستة الرئيسية واكتشف كيف نقود الابتكار والنمو'
              : 'Explore our six major business sectors and discover how we drive innovation and growth'
            }
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorsData.map((sector) => (
            <Link
              key={sector.id}
              to={`/sector/${sector.id}`}
              className="group"
            >
              <div
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-orchida-red"
                onMouseEnter={() => setHoveredId(sector.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                </div>

                {/* Front Side - Icon & Title */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                    hoveredId === sector.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                >
                  <div className="text-6xl mb-4 transition-transform duration-300">{sector.iconEmoji}</div>
                  <h3 className="text-2xl font-bold text-white text-center px-4 leading-tight">
                    {language === 'ar' ? sector.nameAr : sector.nameEn}
                  </h3>
                </div>

                {/* Back Side - Description */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-orchida-red via-red-600 to-orchida-green p-6 transition-all duration-500 ${
                    hoveredId === sector.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <p className="text-white text-center font-semibold mb-6 text-sm md:text-base leading-relaxed">
                    {language === 'ar' ? sector.titleAr : sector.titleEn}
                  </p>
                  <span className="inline-block px-5 py-2.5 bg-white text-orchida-red font-bold rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                    {t('readMore')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
