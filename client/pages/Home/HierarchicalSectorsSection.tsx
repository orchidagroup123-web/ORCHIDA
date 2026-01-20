import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const primarySectors = hierarchicalSectors.filter((s) => s.level === 'primary');

  return (
    <section id="sectors" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'ثلاثة قطاعات رئيسية مع عشرات التخصصات والمجالات'
              : 'Three main sectors with dozens of specializations and fields'}
          </p>
        </div>

        <div className="space-y-20">
          {primarySectors.length > 0 && (
            <div className="flex justify-center mb-12">
              <SectorCard
                sector={primarySectors[0]}
                isExpanded={expandedSector === primarySectors[0].id}
                onToggle={() =>
                  setExpandedSector(
                    expandedSector === primarySectors[0].id ? null : primarySectors[0].id
                  )
                }
                language={language}
              />
            </div>
          )}

          {primarySectors.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-12">
              {primarySectors.slice(1, 3).map((sector) => (
                <SectorCard
                  key={sector.id}
                  sector={sector}
                  isExpanded={expandedSector === sector.id}
                  onToggle={() =>
                    setExpandedSector(expandedSector === sector.id ? null : sector.id)
                  }
                  language={language}
                />
              ))}
            </div>
          )}

          {expandedSector && (
            <div className="mt-16 pt-16 border-t-2 border-gray-200 animate-fadeIn">
              <SubSectorsGrid
                sector={primarySectors.find((s) => s.id === expandedSector)!}
                language={language}
              />
            </div>
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-gray-300 to-green-600 rounded-full"></div>
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
}

function SectorCard({ sector, isExpanded, onToggle, language }: SectorCardProps) {
  return (
    <div
      className="group relative w-full md:w-96 h-80 cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
      onClick={onToggle}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${sector.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
        <div className="relative mb-6">
          <div className="relative text-8xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-125">
            {sector.iconEmoji}
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-white text-center px-4 leading-tight drop-shadow-lg">
          {language === 'ar' ? sector.nameAr : sector.nameEn}
        </h3>

        <div className="mt-4 text-white/80 text-sm font-semibold">
          {sector.subsectors.length}{' '}
          {language === 'ar' ? 'تخصصات' : 'specializations'}
        </div>

        {!isExpanded && (
          <div className="absolute bottom-6 text-white text-sm font-semibold flex items-center gap-2">
            <span>{language === 'ar' ? 'اكتشف التخصصات' : 'Explore Fields'}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface SubSectorsGridProps {
  sector: MainSector;
  language: string;
}

function SubSectorsGrid({ sector, language }: SubSectorsGridProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} Specializations`}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subsectors.map((subsector, index) => (
          <div
            key={subsector.id}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <div className="text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
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
          </div>
        ))}
      </div>
    </div>
  );
}
