import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect } from "react";

const heroHighlights = [
  {
    value: "20+",
    labelAr: "سنة من الخبرة",
    labelEn: "Years of experience",
    accent: "from-[#facc15] to-[#f97316]",
  },
  {
    value: "180+",
    labelAr: "خبراء متخصصون",
    labelEn: "Specialist experts",
    accent: "from-[#4ade80] to-[#16a34a]",
  },
  {
    value: "2",
    labelAr: "دول تشغيل",
    labelEn: "Operating countries",
    accent: "from-[#38bdf8] to-[#0284c7]",
  },
];

const bulletPoints = [
  {
    ar: "حلول متكاملة من الاستكشاف إلى التسليم النهائي",
    en: "End-to-end solutions from exploration to final delivery",
  },
  {
    ar: "مقر رئيسي في السودان وتوسّع خليجي عبر فرع السعودية",
    en: "Sudan headquarters with GCC expansion via the Saudi branch",
  },
  {
    ar: "خبرات عميقة في التعدين والزراعة والبنية التحتية",
    en: "Deep expertise across mining, agriculture, and infrastructure",
  },
];

const sectorCards = [
  {
    id: "mining",
    icon: "⛏️",
    titleAr: "قطاع التعدين",
    titleEn: "Mining",
    descAr: "استكشاف ومعالجة الخامات",
    descEn: "Exploration and ore processing",
    accent: "from-[#facc15] to-[#f97316]",
  },
  {
    id: "agriculture",
    icon: "🌾",
    titleAr: "قطاع الزراعة والثروة",
    titleEn: "Agriculture & Resources",
    descAr: "إدارة الثروات الزراعية والحيوانية",
    descEn: "Agricultural and livestock excellence",
    accent: "from-[#4ade80] to-[#16a34a]",
  },
  {
    id: "infrastructure",
    icon: "🏗️",
    titleAr: "قطاع البنية التحتية",
    titleEn: "Infrastructure",
    descAr: "مشاريع استراتيجية للطرق والطاقة",
    descEn: "Strategic infrastructure programs",
    accent: "from-[#93c5fd] to-[#3b82f6]",
  },
];

const heroBackgrounds = [
  "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F89ccd0b8f4e34ea393083b07ade2effb?format=webp&width=2000&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fc480cd476ba44dbfb2a1c4e8627a18fd?format=webp&width=2000&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ff52cd861c2fa4bdc97736785926977e7?format=webp&width=2000&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F55e9e51a21314642ba2f732ee229e361?format=webp&width=2000&height=1200",
] as const;

export function HeroSection() {
  const { t, language } = useTranslation();
  const [showWhoWeAre, setShowWhoWeAre] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b1a2b] to-[#050816] text-white">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        {heroBackgrounds.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816]/45 via-[#0b1a2b]/40 to-[#050816]/50"></div>
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -right-10 w-96 h-96 bg-red-500/20 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-24 -left-10 w-[28rem] h-[28rem] bg-emerald-500/15 rounded-full blur-[150px]"></div>
      </div>

      {/* Multi-Layer Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/18 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orchida-red/5 to-orchida-green/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text column */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-orchida-red"></span>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                ORCHIDA GROUP
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {t("heroTitle")}
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>

            <ul className="space-y-4">
              {bulletPoints.map((point) => (
                <li
                  key={point.ar}
                  className="flex items-start gap-3 text-base text-slate-200"
                >
                  <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-br from-orchida-red to-orchida-green"></div>
                  <span>{language === "ar" ? point.ar : point.en}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowWhoWeAre(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orchida-red to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                {t("whoWeAre")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <a
                href="#sectors-pyramid"
                className="px-8 py-4 rounded-xl border border-white/30 hover:border-white/70 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
              >
                {t("sectors")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroHighlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center"
                >
                  <div
                    className={`mx-auto mb-3 h-1 w-16 rounded-full bg-gradient-to-r ${item.accent}`}
                  ></div>
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm text-slate-200">
                    {language === "ar" ? item.labelAr : item.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className="w-full">
            <div className="relative rounded-[32px] border border-white/15 bg-white/5 backdrop-blur p-8 shadow-2xl overflow-hidden">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(15,23,42,0.95) 100%), url(https://images.unsplash.com/photo-1503389152951-9f343605f61e?w=1200&h=1200&fit=crop)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {sectorCards.map((sector) => (
                    <div
                      key={sector.id}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-4"
                    >
                      <div
                        className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${sector.accent} flex items-center justify-center text-2xl`}
                      >
                        {sector.icon}
                      </div>
                      <div>
                        <p className="text-base font-bold">
                          {language === "ar" ? sector.titleAr : sector.titleEn}
                        </p>
                        <p className="text-sm text-white/70">
                          {language === "ar" ? sector.descAr : sector.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4 text-sm text-white/80">
                  {language === "ar"
                    ? "نحن نبني منظومة متكاملة تجمع بين التعدين الذكي والزراعة المستدامة والبنية التحتية المتينة لخدمة الاقتصادات الصاعدة."
                    : "We orchestrate an integrated ecosystem that blends smart mining, sustainable agriculture, and resilient infrastructure for emerging economies."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Modal */}
      {showWhoWeAre && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-slate-800/85 shadow-[0_35px_90px_rgba(5,8,22,0.8)] overflow-y-auto max-h-[90vh] backdrop-blur-xl">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-12 -right-10 w-60 h-60 bg-orchida-green/20 blur-[120px]"></div>
              <div className="absolute -bottom-16 -left-12 w-72 h-72 bg-orchida-red/25 blur-[130px]"></div>
            </div>

            <div className="relative z-10">
              <button
                onClick={() => setShowWhoWeAre(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6">
                <p className="text-sm font-semibold text-orchida-red uppercase tracking-[0.3em] mb-3">
                  ORCHIDA GROUP
                </p>
                <h2 className="text-4xl font-black text-white mb-4">
                  {t("whoWeAre")}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-orchida-red to-orchida-green rounded-full"></div>
              </div>

              <div className="space-y-5 text-white/90 leading-relaxed tracking-wide">
                <p>
                  {language === "ar"
                    ? "مجموعة اوركيدا الدولية كيان سوداني يقود ثلاث ركائز اقتصادية: التعدين، الزراعة، والبنية التحتية، مع توسّع جديد في المملكة العربية السعودية."
                    : "ORCHIDA International Company is a Sudanese-led powerhouse across three economic pillars—mining, agriculture, and infrastructure—with an upcoming expansion in Saudi Arabia."}
                </p>
                <p>
                  {language === "ar"
                    ? "نمتلك أكثر من 20 سنة خبرة و180 متخصصاً يعملون من المقرّ الرئيسي في الخرطوم وفرع السعودية قيد الإنشاء لدعم الاستثمارات الإقليمية."
                    : "With over 20 years of experience and 180 specialists, we operate from our Khartoum HQ while building the Saudi branch to power regional investments."}
                </p>
                <p>
                  {language === "ar"
                    ? "ترتكز رؤيتنا على تقديم حلول مسؤولة ومستدامة تبني اقتصادات resilient وتربط الموارد الطبيعية بالأسواق العالمية."
                    : "Our vision is to deliver responsible, sustainable solutions that build resilient economies and connect natural resources to global markets."}
                </p>
              </div>

              <button
                onClick={() => setShowWhoWeAre(false)}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-orchida-red to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {language === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
