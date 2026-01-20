import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string | null>('mining');

  const miningSector = hierarchicalSectors.find(s => s.id === 'mining');
  const agricultureSector = hierarchicalSectors.find(s => s.id === 'agriculture');
  const infrastructureSector = hierarchicalSectors.find(s => s.id === 'infrastructure');

  return (
    <section id="sectors-pyramid" className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-6">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest">
                {language === 'ar' ? 'ركائز الاقتصاد' : 'Economic Pillars'}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical Sector Structure'}
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {language === 'ar'
                ? 'تحرص على الخطوات الرئيسية لتحقيق النمو'
                : 'We focus on key steps to achieve sustainable growth'}
            </p>

            {/* Sector Details with Icons */}
            <div className="space-y-5">
              {miningSector && (
                <SectorDetailCard
                  sector={miningSector}
                  language={language}
                  isActive={expandedSector === miningSector.id}
                  colorClass="border-orange-200 hover:bg-orange-50"
                />
              )}
              {agricultureSector && (
                <SectorDetailCard
                  sector={agricultureSector}
                  language={language}
                  isActive={expandedSector === agricultureSector.id}
                  colorClass="border-green-200 hover:bg-green-50"
                />
              )}
              {infrastructureSector && (
                <SectorDetailCard
                  sector={infrastructureSector}
                  language={language}
                  isActive={expandedSector === infrastructureSector.id}
                  colorClass="border-blue-200 hover:bg-blue-50"
                />
              )}
            </div>
          </div>

          {/* Right Side - 3D Pyramid */}
          <div className="flex justify-center">
            <ProfessionalPyramid
              miningSector={miningSector}
              agricultureSector={agricultureSector}
              infrastructureSector={infrastructureSector}
              language={language}
            />
          </div>
        </div>

        {/* Expanded Subsectors */}
        {expandedSector && (
          <div className="mt-24 pt-24 border-t-2 border-gray-200 animate-fadeIn">
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

interface SectorDetailCardProps {
  sector: MainSector;
  language: string;
  isActive: boolean;
  colorClass: string;
}

function SectorDetailCard({ sector, language, isActive, colorClass }: SectorDetailCardProps) {
  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all duration-300 ${colorClass}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-4xl flex-shrink-0">{sector.iconEmoji}</span>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {language === 'ar' ? sector.nameAr : sector.nameEn}
          </h3>
          <p className="text-sm text-gray-600">
            {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
          </p>
        </div>
      </div>
    </div>
  );
}

interface PyramidProps {
  miningSector?: MainSector;
  agricultureSector?: MainSector;
  infrastructureSector?: MainSector;
  language: string;
}

function ProfessionalPyramid({
  miningSector,
  agricultureSector,
  infrastructureSector,
  language,
}: PyramidProps) {
  return (
    <div className="relative w-full max-w-md h-auto">
      {/* Main Pyramid Container */}
      <div className="relative" style={{ perspective: '1000px' }}>
        
        {/* Apex - Mining */}
        <div className="relative mx-auto mb-0" style={{ width: '280px', height: '180px' }}>
          <div
            className="absolute inset-0 rounded-t-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FCD34D 0%, #EA580C 100%)',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Mining Image Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: miningSector ? `url(${miningSector.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
              }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/60 to-orange-600/70"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-6xl mb-2 drop-shadow-lg">{miningSector?.iconEmoji}</div>
              <h3 className="text-white font-black text-xl drop-shadow-lg text-center">
                {language === 'ar' ? miningSector?.nameAr : miningSector?.nameEn}
              </h3>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
        </div>

        {/* Middle Layer - Two Sectors */}
        <div className="relative flex gap-0" style={{ marginTop: '-2px' }}>
          {/* Infrastructure - Left */}
          <div className="flex-1" style={{ height: '220px' }}>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #93C5FD 0%, #3B82F6 100%)',
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
              }}
            >
              {/* Infrastructure Image Background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: infrastructureSector ? `url(${infrastructureSector.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/60 to-blue-600/70"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2 drop-shadow-lg">{infrastructureSector?.iconEmoji}</div>
                <h3 className="text-white font-black text-base drop-shadow-lg text-center px-2">
                  {language === 'ar' ? infrastructureSector?.nameAr : infrastructureSector?.nameEn}
                </h3>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent"></div>
            </div>
          </div>

          {/* Agriculture - Right */}
          <div className="flex-1" style={{ height: '220px' }}>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #86EFAC 0%, #10B981 100%)',
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            >
              {/* Agriculture Image Background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: agricultureSector ? `url(${agricultureSector.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/60 to-green-600/70"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2 drop-shadow-lg">{agricultureSector?.iconEmoji}</div>
                <h3 className="text-white font-black text-base drop-shadow-lg text-center px-2">
                  {language === 'ar' ? agricultureSector?.nameAr : agricultureSector?.nameEn}
                </h3>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/15 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Base Shadow for Depth */}
        <div className="relative h-12 bg-gradient-to-b from-gray-900/20 to-transparent rounded-b-2xl"></div>
      </div>

      {/* Decorative 3D effect - Bottom right shadow */}
      <div
        className="absolute -bottom-4 -right-6 w-48 h-32 bg-black/10 rounded-full blur-3xl"
        style={{ zIndex: -1 }}
      ></div>
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
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sector.subsectors.map((subsector, index) => (
          <div
            key={subsector.id}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            style={{
              animation: `slideUp 0.6s ease-out ${index * 100}ms both`,
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              
              {/* Accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
              <div className="text-6xl mb-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500">
                {subsector.iconEmoji}
              </div>
              <h4 className="text-2xl font-bold text-white text-center drop-shadow-lg mb-2">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
              <p className="text-white/90 text-sm text-center drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {language === 'ar'
                  ? subsector.descriptionAr
                  : subsector.descriptionEn}
              </p>
            </div>

            {/* Corner Accent - Top Right */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HierarchicalSectorsSection;
