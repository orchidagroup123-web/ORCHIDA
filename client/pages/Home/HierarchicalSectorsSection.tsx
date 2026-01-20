import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const primarySectors = hierarchicalSectors.filter((s) => s.level === 'primary');

  // Get sectors in order: Mining (apex), Infrastructure (left), Agriculture (right)
  const miningSector = primarySectors.find(s => s.id === 'mining');
  const agricultureSector = primarySectors.find(s => s.id === 'agriculture');
  const infrastructureSector = primarySectors.find(s => s.id === 'infrastructure');

  return (
    <section id="sectors-pyramid" className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                {language === 'ar' ? 'قطاعاتنا الرئيسية' : 'Our Main Sectors'}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              {language === 'ar'
                ? 'ثلاثة قطاعات رئيسية متكاملة تشكل أساس عملياتنا'
                : 'Three integrated main sectors forming the foundation of our operations'}
            </p>

            {/* Sector Details */}
            <div className="space-y-6">
              {miningSector && (
                <SectorDetail
                  sector={miningSector}
                  language={language}
                  isExpanded={expandedSector === miningSector.id}
                  onToggle={() =>
                    setExpandedSector(expandedSector === miningSector.id ? null : miningSector.id)
                  }
                />
              )}
              {agricultureSector && (
                <SectorDetail
                  sector={agricultureSector}
                  language={language}
                  isExpanded={expandedSector === agricultureSector.id}
                  onToggle={() =>
                    setExpandedSector(expandedSector === agricultureSector.id ? null : agricultureSector.id)
                  }
                />
              )}
              {infrastructureSector && (
                <SectorDetail
                  sector={infrastructureSector}
                  language={language}
                  isExpanded={expandedSector === infrastructureSector.id}
                  onToggle={() =>
                    setExpandedSector(expandedSector === infrastructureSector.id ? null : infrastructureSector.id)
                  }
                />
              )}
            </div>
          </div>

          {/* Right Side - 3D Pyramid Visualization */}
          <div className="flex justify-center items-center">
            <PyramidVisualization
              miningSector={miningSector}
              agricultureSector={agricultureSector}
              infrastructureSector={infrastructureSector}
              language={language}
              expandedSector={expandedSector}
            />
          </div>
        </div>

        {/* Expanded Subsectors Below */}
        {expandedSector && (
          <div className="mt-20 pt-20 border-t-2 border-gray-200 animate-fadeIn">
            {miningSector && expandedSector === miningSector.id && (
              <SubSectorsGrid sector={miningSector} language={language} />
            )}
            {agricultureSector && expandedSector === agricultureSector.id && (
              <SubSectorsGrid sector={agricultureSector} language={language} />
            )}
            {infrastructureSector && expandedSector === infrastructureSector.id && (
              <SubSectorsGrid sector={infrastructureSector} language={language} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface SectorDetailProps {
  sector: MainSector;
  language: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function SectorDetail({ sector, language, isExpanded, onToggle }: SectorDetailProps) {
  return (
    <div
      onClick={onToggle}
      className="group p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 cursor-pointer transition-all duration-300 bg-white hover:bg-blue-50"
    >
      <div className="flex items-start gap-4">
        <div className="text-5xl flex-shrink-0">{sector.iconEmoji}</div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {language === 'ar' ? sector.nameAr : sector.nameEn}
          </h3>
          <p className="text-gray-600 mb-3">
            {language === 'ar' ? sector.titleAr : sector.titleEn}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-600 font-semibold">
              {sector.subsectors.length} {language === 'ar' ? 'تخصص' : 'specializations'}
            </span>
            <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PyramidVisualizationProps {
  miningSector?: MainSector;
  agricultureSector?: MainSector;
  infrastructureSector?: MainSector;
  language: string;
  expandedSector: string | null;
}

function PyramidVisualization({
  miningSector,
  agricultureSector,
  infrastructureSector,
  language,
  expandedSector,
}: PyramidVisualizationProps) {
  return (
    <div className="relative w-full max-w-md h-96 flex items-center justify-center">
      {/* SVG Pyramid Container */}
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Define gradients */}
        <defs>
          <linearGradient id="miningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="agricultureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#86EFAC', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="infrastructureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#93C5FD', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Mining - Top (Apex) */}
        {miningSector && (
          <g
            className="cursor-pointer transition-all hover:opacity-90"
            filter="url(#shadow)"
          >
            {/* Apex triangle */}
            <polygon
              points="200,50 280,180 120,180"
              fill="url(#miningGradient)"
              stroke="#E8860E"
              strokeWidth="2"
            />
            {/* Inner image section */}
            <rect
              x="140"
              y="80"
              width="120"
              height="80"
              fill="url(#miningGradient)"
              opacity="0.9"
              rx="4"
            />
            {/* Text */}
            <text
              x="200"
              y="135"
              textAnchor="middle"
              className="text-lg font-bold"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              {language === 'ar' ? 'التعدين' : 'Mining'}
            </text>
          </g>
        )}

        {/* Agriculture - Bottom Right */}
        {agricultureSector && (
          <g className="cursor-pointer transition-all hover:opacity-90" filter="url(#shadow)">
            {/* Bottom right trapezoid */}
            <polygon
              points="280,180 400,450 200,450"
              fill="url(#agricultureGradient)"
              stroke="#059669"
              strokeWidth="2"
            />
            {/* Text */}
            <text
              x="310"
              y="350"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
            >
              {language === 'ar' ? 'الزراعة' : 'Agriculture'}
            </text>
          </g>
        )}

        {/* Infrastructure - Bottom Left */}
        {infrastructureSector && (
          <g className="cursor-pointer transition-all hover:opacity-90" filter="url(#shadow)">
            {/* Bottom left trapezoid */}
            <polygon
              points="120,180 200,450 0,450"
              fill="url(#infrastructureGradient)"
              stroke="#1D4ED8"
              strokeWidth="2"
            />
            {/* Text */}
            <text
              x="90"
              y="350"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="bold"
            >
              {language === 'ar' ? 'البنية التحتية' : 'Infrastructure'}
            </text>
          </g>
        )}

        {/* Base shadow for depth */}
        <ellipse
          cx="200"
          cy="455"
          rx="200"
          ry="25"
          fill="black"
          opacity="0.15"
        />
      </svg>

      {/* Icons positioned absolutely over pyramid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {miningSector && (
          <div className="absolute top-12 text-6xl drop-shadow-lg">{miningSector.iconEmoji}</div>
        )}
        {agricultureSector && (
          <div className="absolute bottom-24 right-8 text-5xl drop-shadow-lg">{agricultureSector.iconEmoji}</div>
        )}
        {infrastructureSector && (
          <div className="absolute bottom-24 left-8 text-5xl drop-shadow-lg">{infrastructureSector.iconEmoji}</div>
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
              <h4 className="text-lg font-bold text-white text-center drop-shadow-lg">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
              <p className="text-white/80 text-sm text-center mt-3 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">
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
