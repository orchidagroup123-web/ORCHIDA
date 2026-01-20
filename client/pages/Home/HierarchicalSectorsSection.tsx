import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const primarySectors = hierarchicalSectors.filter((s) => s.level === 'primary');

  return (
    <section id="sectors-pyramid" className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
              {language === 'ar' ? 'قطاعاتنا الرئيسية' : 'Our Main Sectors'}
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-green-600 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'ثلاثة قطاعات رئيسية مع عشرات التخصصات والمجالات'
              : 'Three main sectors with dozens of specializations and fields'}
          </p>
        </div>

        {/* Pyramid Structure */}
        <div className="space-y-16">
          {/* Mining - Apex (Top Center) */}
          {primarySectors.length > 0 && (
            <div className="flex justify-center mb-8">
              <SectorCard
                sector={primarySectors[0]}
                isExpanded={expandedSector === primarySectors[0].id}
                onToggle={() =>
                  setExpandedSector(
                    expandedSector === primarySectors[0].id ? null : primarySectors[0].id
                  )
                }
                language={language}
                size="large"
              />
            </div>
          )}

          {/* Agriculture & Infrastructure - Second Row */}
          {primarySectors.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Infrastructure (Left) */}
              <SectorCard
                sector={primarySectors[2]}
                isExpanded={expandedSector === primarySectors[2].id}
                onToggle={() =>
                  setExpandedSector(expandedSector === primarySectors[2].id ? null : primarySectors[2].id)
                }
                language={language}
                size="medium"
              />
              {/* Agriculture (Right) */}
              <SectorCard
                sector={primarySectors[1]}
                isExpanded={expandedSector === primarySectors[1].id}
                onToggle={() =>
                  setExpandedSector(expandedSector === primarySectors[1].id ? null : primarySectors[1].id)
                }
                language={language}
                size="medium"
              />
            </div>
          )}

          {/* Expanded Subsectors */}
          {expandedSector && (
            <div className="mt-20 pt-20 border-t-2 border-gray-200 animate-fadeIn">
              <SubSectorsGrid
                sector={primarySectors.find((s) => s.id === expandedSector)!}
                language={language}
              />
            </div>
          )}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-gray-400 to-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

interface SectorCardProps {
  sector: MainSector;
  isExpanded: boolean;
  onToggle: () => void;
  language: string;
  size: 'large' | 'medium';
}

function SectorCard({ sector, isExpanded, onToggle, language, size }: SectorCardProps) {
  const sizeClass = size === 'large' ? 'w-full md:w-96 h-96' : 'w-full h-80';
  const iconSize = size === 'large' ? 'text-8xl' : 'text-6xl';
  const titleSize = size === 'large' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl';

  return (
    <div
      onClick={onToggle}
      className={`${sizeClass} group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${sector.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
        {/* Icon */}
        <div className="relative mb-4">
          <div className={`${iconSize} drop-shadow-2xl transition-transform duration-500 group-hover:scale-125`}>
            {sector.iconEmoji}
          </div>
        </div>

        {/* Title */}
        <h3 className={`${titleSize} font-bold text-white text-center px-4 drop-shadow-lg leading-tight`}>
          {language === 'ar' ? sector.nameAr : sector.nameEn}
        </h3>

        {/* Subsector Count */}
        <p className="mt-3 text-white/90 text-sm font-semibold drop-shadow-lg">
          {sector.subsectors.length}{' '}
          {language === 'ar' ? 'تخصص' : 'specialization' + (sector.subsectors.length > 1 ? 's' : '')}
        </p>

        {/* Expand Indicator */}
        {!isExpanded && (
          <p className="absolute bottom-6 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {language === 'ar' ? '👆 اكتشف التخصصات' : '👆 Explore Specializations'}
          </p>
        )}
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
    </div>
  );
}

interface SubSectorsGridProps {
  sector: MainSector;
  language: string;
}

function SubSectorsGrid({ sector, language }: SubSectorsGridProps) {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} Specializations`}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sector.subsectors.map((subsector, index) => (
          <div
            key={subsector.id}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                {subsector.iconEmoji}
              </div>
              <h4 className="text-lg font-bold text-white text-center drop-shadow-lg">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
              <p className="text-white/80 text-sm text-center mt-3 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">
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
