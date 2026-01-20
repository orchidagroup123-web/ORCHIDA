import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectorsV2 } from '@/data/hierarchical-sectors-v2';

export function SectorsPyramid() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>('mining');

  const sectors = hierarchicalSectorsV2;
  const apexSector = sectors.find((s) => s.position === 'apex');
  const rightSector = sectors.find((s) => s.position === 'right');
  const leftSector = sectors.find((s) => s.position === 'left');

  return (
    <section id="sectors-pyramid" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">
              {language === 'ar' ? 'قطاعاتنا الرئيسية' : 'Our Main Sectors'}
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-green-600 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'ثلاثة قطاعات رئيسية تشمل تخصصات متعددة وحلولاً متكاملة'
              : 'Three main sectors with multiple specializations and integrated solutions'}
          </p>
        </div>

        {/* Pyramid Structure */}
        <div className="space-y-20">
          {/* Apex - Mining (Center Top) */}
          {apexSector && (
            <div className="flex justify-center mb-16">
              <PyramidCard
                sector={apexSector}
                isExpanded={expandedSector === apexSector.id}
                onToggle={() =>
                  setExpandedSector(
                    expandedSector === apexSector.id ? null : apexSector.id
                  )
                }
                language={language}
                size="lg"
              />
            </div>
          )}

          {/* Second Row - Right & Left (Agriculture & Infrastructure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 mb-12">
            {rightSector && (
              <PyramidCard
                sector={rightSector}
                isExpanded={expandedSector === rightSector.id}
                onToggle={() =>
                  setExpandedSector(
                    expandedSector === rightSector.id ? null : rightSector.id
                  )
                }
                language={language}
                size="md"
              />
            )}
            {leftSector && (
              <PyramidCard
                sector={leftSector}
                isExpanded={expandedSector === leftSector.id}
                onToggle={() =>
                  setExpandedSector(
                    expandedSector === leftSector.id ? null : leftSector.id
                  )
                }
                language={language}
                size="md"
              />
            )}
          </div>

          {/* Subsectors Grid */}
          {expandedSector && (
            <SubsectorsGrid
              sector={sectors.find((s) => s.id === expandedSector)!}
              language={language}
            />
          )}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 via-gray-400 to-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  sector: any;
  isExpanded: boolean;
  onToggle: () => void;
  language: string;
  size: 'lg' | 'md';
}

function PyramidCard({
  sector,
  isExpanded,
  onToggle,
  language,
  size,
}: CardProps) {
  const sizeClasses = {
    lg: 'w-full md:w-96 h-96',
    md: 'w-full h-80',
  };

  return (
    <div
      onClick={onToggle}
      className={`group relative ${sizeClasses[size]} cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${sector.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-20`}
        ></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
        {/* Icon */}
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${sector.color} rounded-full blur-xl animate-pulse opacity-60`}
          ></div>
          <div
            className={`relative ${size === 'lg' ? 'text-8xl' : 'text-7xl'} drop-shadow-2xl transition-transform duration-500 group-hover:scale-125`}
          >
            {sector.iconEmoji}
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white text-center px-4 drop-shadow-lg ${size === 'lg' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
          {language === 'ar' ? sector.nameAr : sector.nameEn}
        </h3>

        {/* Subsector Count Badge */}
        <div className="mt-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
          <span className="text-white text-sm font-semibold">
            {sector.subsectors.length}{' '}
            {language === 'ar' ? 'تخصص' : 'specializations'}
          </span>
        </div>

        {/* Hover Indicator */}
        {!isExpanded && (
          <div className="absolute bottom-6 flex items-center gap-2 text-white text-sm font-semibold animate-bounce">
            <span>{language === 'ar' ? '📋 اكتشف المزيد' : 'Explore'}</span>
          </div>
        )}
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
    </div>
  );
}

interface SubsectorsProps {
  sector: MainSector;
  language: string;
}

function SubsectorsGrid({ sector, language }: SubsectorsProps) {
  return (
    <div className="mt-16 pt-16 border-t-2 border-gray-200 animate-fadeIn space-y-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} Specializations`}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {language === 'ar'
            ? sector.shortDescriptionAr
            : sector.shortDescriptionEn}
        </p>
      </div>

      {/* Subsectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subsectors.map((subsector, idx) => (
          <div
            key={subsector.id}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideUp"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-15`}
              ></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <div className="text-6xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                {subsector.iconEmoji}
              </div>
              <h4 className="text-xl font-bold text-white text-center drop-shadow-lg">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
              <p className="text-white/80 text-sm text-center mt-2 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {language === 'ar'
                  ? subsector.descriptionAr
                  : subsector.descriptionEn}
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
