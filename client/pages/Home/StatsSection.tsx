import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  labelAr: string;
  labelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  accent: string;
  icon: string;
}

const stats: StatItem[] = [
  {
    value: 20,
    suffix: "+",
    labelAr: "سنة خبرة",
    labelEn: "Years of experience",
    descriptionAr: "في إدارة المشاريع التعدينية والزراعية",
    descriptionEn: "of delivering mining and agri programs",
    accent: "from-[#facc15] to-[#f97316]",
    icon: "⌛",
  },
  {
    value: 180,
    suffix: "+",
    labelAr: "موظف متخصص",
    labelEn: "Specialist employees",
    descriptionAr: "فِرَق متعددة التخصصات عبر السودان والسعودية",
    descriptionEn: "Multidisciplinary teams in Sudan & Saudi",
    accent: "from-[#4ade80] to-[#16a34a]",
    icon: "👥",
  },
  {
    value: 2,
    suffix: "",
    labelAr: "دول تشغيل",
    labelEn: "Operating countries",
    descriptionAr: "المقر في الخرطوم وفرع السعودية قيد الإنشاء",
    descriptionEn: "Khartoum HQ & Saudi branch under construction",
    accent: "from-[#38bdf8] to-[#0284c7]",
    icon: "🌍",
  },
];

function AnimatedCounter({
  stat,
  language,
}: {
  stat: StatItem;
  language: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timer: NodeJS.Timeout;
    if (count < stat.value) {
      timer = setTimeout(() => {
        setCount((prev) => {
          const next = prev + Math.ceil(stat.value / 30);
          return next > stat.value ? stat.value : next;
        });
      }, 20);
    }

    return () => clearTimeout(timer);
  }, [count, isVisible, stat.value]);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/40 bg-white/10 backdrop-blur-md p-6 text-center shadow-lg shadow-slate-900/10"
    >
      <div className="flex items-center justify-center gap-2 text-4xl font-black text-white mb-2">
        <span>{stat.icon}</span>
        <span>
          {count}
          <span className="text-3xl ml-1">{stat.suffix}</span>
        </span>
      </div>
      <div
        className={`mx-auto mb-3 h-1 w-12 rounded-full bg-gradient-to-r ${stat.accent}`}
      ></div>
      <p className="text-lg font-semibold text-white">
        {language === "ar" ? stat.labelAr : stat.labelEn}
      </p>
      <p className="text-sm text-white/80 mt-2">
        {language === "ar" ? stat.descriptionAr : stat.descriptionEn}
      </p>
    </div>
  );
}

export function StatsSection() {
  const { language } = useTranslation();

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b1a2b] via-[#0f172a] to-[#0b1a2b] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-10 left-0 w-72 h-72 bg-emerald-500/30 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-red-500/20 rounded-full blur-[180px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-[0.4em] uppercase">
            <span>{language === "ar" ? "أرقام مؤثرة" : "Impact"}</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-black">
            {language === "ar" ? "أثرنا بالأرقام" : "Our Impact by Numbers"}
          </h2>
          <p className="mt-4 text-lg text-white/75 max-w-3xl mx-auto">
            {language === "ar"
              ? "ركائزنا الثلاث تعمل بتناغم لتقديم نتائج ملموسة وشراكات طويلة الأمد عبر السودان والسعودية"
              : "Our three pillars work in harmony to deliver tangible outcomes and long-term partnerships across Sudan and Saudi Arabia."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.labelEn}
              stat={stat}
              language={language}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-6 md:p-10 text-center text-white/80 leading-relaxed">
          {language === "ar"
            ? "تلتزم اوركيدا بتوظيف التكنولوجيا والكوادر المحلية لرفع كفاءة الموارد الطبيعية وربطها بالأسواق العالمية عبر شراكات مسؤولة ومستدامة."
            : "Orchida is committed to combining technology with local talent to elevate natural resources and connect them to global markets through responsible, sustainable partnerships."}
        </div>
      </div>
    </section>
  );
}
