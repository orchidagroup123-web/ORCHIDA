import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { hierarchicalSectors, MainSector } from '@/data/hierarchical-sectors';

const accentMap: Record<string, string> = {
  mining: 'from-[#fcb045] to-[#f97316]',
  agriculture: 'from-[#4ade80] to-[#16a34a]',
  infrastructure: 'from-[#93c5fd] to-[#3b82f6]',
};

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const [expandedSector, setExpandedSector] = useState<string>('mining');

  const miningSector = hierarchicalSectors.find((s) => s.id === 'mining');
  const agricultureSector = hierarchicalSectors.find((s) => s.id === 'agriculture');
  const infrastructureSector = hierarchicalSectors.find((s) => s.id === 'infrastructure');

  return (
    <section
      id="sectors-pyramid"
      className="relative py-24 bg-gradient-to-b from-[#f6fbff] via-white to-[#eef4ff] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-10 w-60 h-60 bg-[#6ee7b7]/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#93c5fd]/25 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-1 flex justify-center">
            <ProfessionalPyramid
              miningSector={miningSector}
              agricultureSector={agricultureSector}
              infrastructureSector={infrastructureSector}
              language={language}
              activeSectorId={expandedSector}
              onSelect={setExpandedSector}
            />
          </div>

          <div className="order-2 space-y-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sm font-semibold tracking-[0.3em] uppercase text-slate-500">
              {language === 'ar' ? 'ركائز الاقتصاد' : 'Economic pillars'}
            </div>

            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {language === 'ar' ? 'الهيكل الهرمي للقطاعات' : 'Hierarchical sector pyramid'}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {language === 'ar'
                  ? 'نربط بين التعدين والزراعة والبنية التحتية بمنهجية واحدة تعزز التنمية في السودان وتؤسس لحضور خليجي متين.'
                  : 'We connect mining, agriculture, and infrastructure under one methodology that accelerates Sudan’s development and cements our GCC presence.'}
              </p>
            </div>

            <div className="space-y-4">
              {miningSector && (
                <SectorDetailCard
                  sector={miningSector}
                  language={language}
                  isActive={expandedSector === miningSector.id}
                  onSelect={() => setExpandedSector(miningSector.id)}
                />
              )}
              {agricultureSector && (
                <SectorDetailCard
                  sector={agricultureSector}
                  language={language}
                  isActive={expandedSector === agricultureSector.id}
                  onSelect={() => setExpandedSector(agricultureSector.id)}
                />
              )}
              {infrastructureSector && (
                <SectorDetailCard
                  sector={infrastructureSector}
                  language={language}
                  isActive={expandedSector === infrastructureSector.id}
                  onSelect={() => setExpandedSector(infrastructureSector.id)}
                />
              )}
            </div>
          </div>
        </div>

        {expandedSector && (
          <div className="pt-16 border-t border-slate-200">
            {expandedSector === 'mining' && miningSector && (
              <SubSectorsGrid sector={miningSector} language={language} />
            )}
            {expandedSector === 'agriculture' && agricultureSector && (
              <SubSectorsGrid sector={agricultureSector} language={language} />
            )}
            {expandedSector === 'infrastructure' && infrastructureSector && (
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
  onSelect: () => void;
}

function SectorDetailCard({ sector, language, isActive, onSelect }: SectorDetailCardProps) {
  const accent = accentMap[sector.id] ?? 'from-slate-200 to-slate-400';

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`w-full flex items-center gap-4 rounded-2xl border transition-all duration-300 p-4 text-left shadow-sm bg-white/80 ${
        isActive ? 'border-transparent shadow-lg' : 'border-slate-200 hover:border-slate-400'
      }`}
    >
      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center text-2xl shadow`}>        
        {sector.iconEmoji}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            {language === 'ar' ? sector.nameAr : sector.nameEn}
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {sector.subsectors.length} {language === 'ar' ? 'تخصص' : 'specialties'}
          </span>
        </div>
        <p className="text-sm text-slate-600">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>
      <span className={`text-slate-400 transition-transform ${isActive ? 'rotate-180 text-slate-600' : ''}`}>
        ▼
      </span>
    </button>
  );
}

interface PyramidProps {
  miningSector?: MainSector;
  agricultureSector?: MainSector;
  infrastructureSector?: MainSector;
  language: string;
  activeSectorId: string | null;
  onSelect: (id: string) => void;
}

function ProfessionalPyramid({
  miningSector,
  agricultureSector,
  infrastructureSector,
  language,
  activeSectorId,
  onSelect,
}: PyramidProps) {
  return (
    <div className="relative w-full max-w-[520px]">
      <div className="absolute -top-12 -left-8 w-32 h-32 bg-white/40 rounded-full blur-[80px]"></div>
      <div className="relative flex flex-col items-center gap-6">
        <LayerButton
          sector={miningSector}
          language={language}
          isActive={activeSectorId === 'mining'}
          clipPath="polygon(50% 0%, 100% 100%, 0% 100%)"
          height={170}
          width={260}
          accent={accentMap['mining']}
          onClick={() => miningSector && onSelect(miningSector.id)}
          align="center"
        />

        <div className="flex w-full gap-6 justify-center">
          <LayerButton
            sector={infrastructureSector}
            language={language}
            isActive={activeSectorId === 'infrastructure'}
            clipPath="polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)"
            height={200}
            width={230}
            accent={accentMap['infrastructure']}
            onClick={() => infrastructureSector && onSelect(infrastructureSector.id)}
            align="left"
          />
          <LayerButton
            sector={agricultureSector}
            language={language}
            isActive={activeSectorId === 'agriculture'}
            clipPath="polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
            height={200}
            width={230}
            accent={accentMap['agriculture']}
            onClick={() => agricultureSector && onSelect(agricultureSector.id)}
            align="right"
          />
        </div>

        <div className="w-[320px] h-12 rounded-[999px] bg-gradient-to-r from-slate-200 via-white to-slate-200 shadow-inner"></div>
      </div>
    </div>
  );
}

interface LayerButtonProps {
  sector?: MainSector;
  language: string;
  isActive: boolean;
  clipPath: string;
  height: number;
  width: number;
  accent: string;
  onClick: () => void;
  align: 'left' | 'right' | 'center';
}

function LayerButton({
  sector,
  language,
  isActive,
  clipPath,
  height,
  width,
  accent,
  onClick,
  align,
}: LayerButtonProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto'
      : align === 'left'
      ? 'ml-0 mr-auto'
      : 'mr-0 ml-auto';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`relative ${alignment} block transition-transform duration-500 ${
        isActive ? 'scale-105 drop-shadow-2xl' : 'scale-100 drop-shadow-lg opacity-80'
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          clipPath,
          backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops)), url(${sector?.image ?? ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <div className="text-5xl mb-2 drop-shadow-lg">{sector?.iconEmoji}</div>
          <h3 className="text-xl font-bold drop-shadow">
            {language === 'ar' ? sector?.nameAr : sector?.nameEn}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/15 to-transparent"></div>
      </div>
    </button>
  );
}

interface SubSectorsGridProps {
  sector: MainSector;
  language: string;
}

function SubSectorsGrid({ sector, language }: SubSectorsGridProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold tracking-[0.3em] text-slate-500 uppercase">
          {language === 'ar' ? 'التخصصات التفصيلية' : 'Specializations'}
        </p>
        <h3 className="text-4xl font-black text-slate-900">
          {language === 'ar'
            ? `تخصصات قطاع ${sector.nameAr}`
            : `${sector.nameEn} focus areas`}
        </h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          {language === 'ar' ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sector.subsectors.map((subsector) => (
          <div
            key={subsector.id}
            className="relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${subsector.image})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            <div className="absolute top-4 left-4 text-4xl drop-shadow-xl">
              {subsector.iconEmoji}
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-semibold text-slate-900">
                {language === 'ar' ? subsector.nameAr : subsector.nameEn}
              </h4>
              <p className="text-sm text-slate-600">
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
