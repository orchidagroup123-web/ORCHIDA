import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { hierarchicalSectors, MainSector } from "@/data/hierarchical-sectors";

const accentMap: Record<string, string> = {
  mining: "from-[#fcb045] to-[#f97316]",
  agriculture: "from-[#4ade80] to-[#16a34a]",
  infrastructure: "from-[#93c5fd] to-[#3b82f6]",
};

const sectorRouteMap: Record<string, string> = {
  mining: "mining",
  agriculture: "agricultural-health",
  infrastructure: "infrastructure",
};

export function HierarchicalSectorsSection() {
  const { language } = useTranslation();
  const navigate = useNavigate();
  const [expandedSector, setExpandedSector] = useState<string>("mining");

  const miningSector = hierarchicalSectors.find((s) => s.id === "mining");
  const agricultureSector = hierarchicalSectors.find(
    (s) => s.id === "agriculture",
  );
  const infrastructureSector = hierarchicalSectors.find(
    (s) => s.id === "infrastructure",
  );

  const handleSectorOpen = (id: string) => {
    setExpandedSector(id);
    const routeId = sectorRouteMap[id];
    if (routeId) {
      navigate(`/sector/${routeId}`);
    }
  };

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
              onSelect={handleSectorOpen}
            />
          </div>

          <div className="order-2 space-y-7">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {language === "ar"
                  ? "الهيكل الهرمي للقطاعات"
                  : "Hierarchical sector pyramid"}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                {language === "ar"
                  ? "نربط بين التعدين والزراعة والبنية التحتية بمنهجية واحدة تعزز التنمية في السودان وتؤسس لحضور خليجي متين."
                  : "We connect mining, agriculture, and infrastructure under one methodology that accelerates Sudan’s development and cements our GCC presence."}
              </p>
            </div>

            <div className="space-y-4">
              {miningSector && (
                <SectorDetailCard
                  sector={miningSector}
                  language={language}
                  isActive={expandedSector === miningSector.id}
                  onSelect={() => handleSectorOpen(miningSector.id)}
                />
              )}
              {agricultureSector && (
                <SectorDetailCard
                  sector={agricultureSector}
                  language={language}
                  isActive={expandedSector === agricultureSector.id}
                  onSelect={() => handleSectorOpen(agricultureSector.id)}
                />
              )}
              {infrastructureSector && (
                <SectorDetailCard
                  sector={infrastructureSector}
                  language={language}
                  isActive={expandedSector === infrastructureSector.id}
                  onSelect={() => handleSectorOpen(infrastructureSector.id)}
                />
              )}
            </div>
          </div>
        </div>
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

function SectorDetailCard({
  sector,
  language,
  isActive,
  onSelect,
}: SectorDetailCardProps) {
  const accent = accentMap[sector.id] ?? "from-slate-200 to-slate-400";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`w-full flex items-center gap-4 rounded-2xl border transition-all duration-300 p-4 text-left shadow-sm bg-white/80 ${
        isActive
          ? "border-transparent shadow-lg"
          : "border-slate-200 hover:border-slate-400"
      }`}
    >
      <div
        className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center text-2xl shadow`}
      >
        {sector.iconEmoji}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            {language === "ar" ? sector.nameAr : sector.nameEn}
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {sector.subsectors.length}{" "}
            {language === "ar" ? "تخصص" : "specialties"}
          </span>
        </div>
        <p className="text-sm text-slate-600">
          {language === "ar" ? sector.descriptionAr : sector.descriptionEn}
        </p>
      </div>
      <span
        className={`text-slate-400 transition-transform ${isActive ? "rotate-180 text-slate-600" : ""}`}
      >
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
          isActive={activeSectorId === "mining"}
          clipPath="polygon(50% 0%, 100% 100%, 0% 100%)"
          height={170}
          width={260}
          accent={accentMap["mining"]}
          onClick={() => miningSector && onSelect(miningSector.id)}
          align="center"
        />

        <div className="flex w-full gap-6 justify-center">
          <LayerButton
            sector={infrastructureSector}
            language={language}
            isActive={activeSectorId === "infrastructure"}
            clipPath="polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)"
            height={200}
            width={230}
            accent={accentMap["infrastructure"]}
            onClick={() =>
              infrastructureSector && onSelect(infrastructureSector.id)
            }
            align="left"
          />
          <LayerButton
            sector={agricultureSector}
            language={language}
            isActive={activeSectorId === "agriculture"}
            clipPath="polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
            height={200}
            width={230}
            accent={accentMap["agriculture"]}
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
  align: "left" | "right" | "center";
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
    align === "center"
      ? "mx-auto"
      : align === "left"
        ? "ml-0 mr-auto"
        : "mr-0 ml-auto";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`relative ${alignment} block transition-transform duration-500 ${
        isActive
          ? "scale-105 drop-shadow-2xl"
          : "scale-100 drop-shadow-lg opacity-80"
      }`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          clipPath,
          backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops)), url(${sector?.image ?? ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-90`}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <div className="text-5xl mb-2 drop-shadow-lg">
            {sector?.iconEmoji}
          </div>
          <h3 className="text-xl font-bold drop-shadow">
            {language === "ar" ? sector?.nameAr : sector?.nameEn}
          </h3>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/15 to-transparent"></div>
      </div>
    </button>
  );
}
