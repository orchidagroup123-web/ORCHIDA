import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { hierarchicalSectors } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { t, language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const primarySectors = hierarchicalSectors.filter((s) => s.level === 'primary');

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
            <span className="text-orchida-red font-bold text-sm uppercase tracking-wider">
              {language === 'ar' ? 'قطاعاتنا الرئيسية' : 'Our Sectors'}
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {language === 'ar'
              ? 'ثلاثة قطاعات رئيسية تشمل عشرات التخصصات والمجالات'
              : 'Three main sectors encompassing dozens of specializations and fields'
            }
          </p>
        </div>

        {/* Pyramid Structure */}
        <div className="space-y-16">
          {/* Top Level - Single Card (Mining) */}
          <div className="flex justify-center">
            <SectorCard
              sector={primarySectors[0]}
              expanded={expandedSector === primarySectors[0].id}
              onToggle={() =>
                setExpandedSector(
                  expandedSector === primarySectors[0].id ? null : primarySectors[0].id
                )
              }
              language={language}
            />
          </div>

          {/* Second Level - Two Cards (Agriculture & Infrastructure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {primarySectors.slice(1, 3).map((sector) => (
              <SectorCard
                key={sector.id}
                sector={sector}
                expanded={expandedSector === sector.id}
                onToggle={() =>
                  setExpandedSector(expandedSector === sector.id ? null : sector.id)
                }
                language={language}
              />
            ))}
          </div>

          {/* Subsectors Display */}
          {expandedSector && (
            <div className="mt-16 animate-fadeIn">
              <SubSectorsGrid
                sector={primarySectors.find((s) => s.id === expandedSector)!}
                language={language}
              />
            </div>
          )}
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-orchida-red via-gray-900 to-orchida-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

interface SectorCardProps {
  sector: ReturnType<typeof hierarchicalSectors[0]>;
  expanded: boolean;
  onToggle: () => void;
  language: string;
}

function SectorCard({ sector, expanded, onToggle, language }: SectorCardProps) {
  return (
    <div
      className="group relative w-full md:w-96 h-80 cursor-pointer"
      onClick={onToggle}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${sector.image})` }}
        >
          {/* Multi-layer Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
          <div className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-20`}></div>
        </div>

        {/* Front Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
          {/* Icon with animated background */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} rounded-full blur-xl animate-pulse opacity-50`}></div>
            <div className="relative text-8xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-125">
              {sector.iconEmoji}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center px-4 leading-tight drop-shadow-lg transition-all duration-500 group-hover:text-white">
            {language === 'ar' ? sector.nameAr : sector.nameEn}
          </h3>

          {/* Subsector Count */}
          <div className="mt-4 text-white/80 text-sm font-semibold">
            {sector.subsectors.length}{' '}
            {language === 'ar' ? 'تخصصات' : 'specializations'}
          </div>

          {/* Expand Indicator */}
          <div
            className={`absolute bottom-6 text-white text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
              !expanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>{language === 'ar' ? 'اكتشف التخصصات' : 'Explore Fields'}</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
      </div>
    </div>
  );
}

interface SubSectorsGridProps {
  sector: ReturnType<typeof hierarchicalSectors[0]>;
  language: string;
}

function SubSectorsGrid({ sector, language }: SubSectorsGridProps) {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} Specializations`}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'ar'
            ? sector.descriptionAr
            : sector.descriptionEn}
        </p>
      </div>

      {/* Subsectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subsectors.map((subsector, index) => (
          <div
            key={subsector.id}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-20`}></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                {subsector.iconEmoji}
              </div>
              <h4 className="text-xl font-bold text-white text-center drop-shadow-lg group-hover:text-white transition-colors">
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
