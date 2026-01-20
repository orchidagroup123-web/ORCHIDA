import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const primarySectors = hierarchicalSectors.filter((s) => s.level === 'primary');

  return (
    <section id="sectors-pyramid" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'ثلاثة قطاعات رئيسية مع عشرات التخصصات والمجالات'
              : 'Three main sectors with dozens of specializations and fields'}
          </p>
        </div>

        <div className="space-y-20">
          {/* Mining - Apex */}
          {primarySectors.length > 0 && (
            <div className="flex justify-center mb-16">
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

          {/* Agriculture & Infrastructure */}
          {primarySectors.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-16">
              {primarySectors.slice(1, 3).map((sector) => (
                <SectorCard
                  key={sector.id}
                  sector={sector}
                  isExpanded={expandedSector === sector.id}
                  onToggle={() =>
                    setExpandedSector(expandedSector === sector.id ? null : sector.id)
                  }
                  language={language}
                  size="medium"
                />
              ))}
            </div>
          )}

          {/* Expanded Subsectors */}
          {expandedSector && (
            <div className="mt-16 pt-16 border-t-2 border-gray-200">
              <SubSectorsGrid
                sector={primarySectors.find((s) => s.id === expandedSector)!}
                language={language}
              />
            </div>
          )}
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
  const sizeClass = size === 'large' ? 'w-96 h-96' : 'w-80 h-72';

  return (
    <div
      onClick={onToggle}
      className={`${sizeClass} group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${sector.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
        <div className={`${size === 'large' ? 'text-8xl' : 'text-6xl'} mb-4`}>
          {sector.iconEmoji}
        </div>
        <h3 className={`${size === 'large' ? 'text-3xl' : 'text-2xl'} font-bold text-white text-center drop-shadow-lg`}>
          {language === 'ar' ? sector.nameAr : sector.nameEn}
        </h3>
        <p className="text-white/90 text-sm mt-3 drop-shadow-lg">
          {sector.subsectors.length} {language === 'ar' ? 'تخصص' : 'specializations'}
        </p>
        {!isExpanded && <p className="text-white text-xs mt-4">Click to explore</p>}
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
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} Specializations`}
        </h3>
        <p className="text-gray-600">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subsectors.map((subsector) => (
          <div
            key={subsector.id}
            className="group relative h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
              <div className="text-5xl mb-2">{subsector.iconEmoji}</div>
              <h4 className="text-lg font-bold text-white text-center drop-shadow-lg">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
