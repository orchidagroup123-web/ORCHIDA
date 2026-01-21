import { Layout } from "@/components/Layout";
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "al-dar",
    image:
      "https://images.unsplash.com/photo-1508387027323-2eea4c5c3d21?auto=format&fit=crop&w=1600&q=80",
    badge: {
      en: "Gold Mining",
      ar: "التعدين عن الذهب",
    },
    title: {
      en: "Al-Dar Mine",
      ar: "منجم الدار",
    },
    client: {
      en: "The Al-Dar Mine sits in the Red Sea Mountains northeast of Haya locality and anchors ORCHIDA's mining portfolio by extracting gold ore from quartz and limestone belts.",
      ar: "يقع منجم الدار في جبال البحر الأحمر شمال شرق محلية هيا، ويُعد ركيزة محورية في محفظة التعدين لدى اوركيدا عبر استخراج خامات الذهب من نطاقات الكوارتز والحجر الجيري.",
    },
    date: {
      en: "Producing 600 tons today with a ramp-up plan to reach 2,000 tons by January 2026.",
      ar: "الإنتاج الحالي يبلغ 600 طن، مع خطة تصاعدية للوصول إلى 2000 طن بحلول يناير 2026.",
    },
    role: {
      en: "Gold Mining",
      ar: "التعدين عن الذهب",
    },
    overview: {
      en: "The Al-Dar Mine expands gold output while complying with strict safety and environmental standards. Upcoming phases introduce advanced extraction technologies and higher capacity to satisfy growing regional demand.",
      ar: "يعزز مشروع منجم الدار إنتاج الذهب مع الالتزام بأعلى معايير السلامة والاستدامة البيئية، وتشمل المراحل القادمة تقنيات استخلاص متقدمة وزيادة الطاقة الإنتاجية لتلبية الطلب المتنامي في المنطقة.",
    },
    highlight: {
      en: "Future-ready expansion program",
      ar: "برنامج توسع يستشرف المستقبل",
    },
  },
  {
    id: "great-river",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    badge: {
      en: "Agricultural Development",
      ar: "التنمية الزراعية",
    },
    title: {
      en: "Great River Agricultural Project",
      ar: "مشروع النهر العظيم الزراعي",
    },
    client: {
      en: "Based in the Nile River State (Atbara locality), the Great River Project cultivates premium clover and Rhodes grass through state-of-the-art pivot irrigation systems destined for Gulf markets.",
      ar: "يقع مشروع النهر العظيم الزراعي في ولاية نهر النيل بمحلية عطبرة، ويركز على زراعة البرسيم والـRhodes عالي الجودة باستخدام أنظمة الري المحوري المتطورة للتصدير إلى أسواق الخليج.",
    },
    date: {
      en: "Operations are in full swing with continuous exports that strengthen national agricultural trade.",
      ar: "التشغيل قائم بكامل طاقته مع صادرات مستمرة تدعم التجارة الزراعية الوطنية.",
    },
    role: {
      en: "Agricultural Development",
      ar: "التنمية الزراعية",
    },
    overview: {
      en: "This initiative reinforces food security by coupling modern agronomy with sustainable practices. Maximized yields, soil stewardship, and reliable export pipelines ensure measurable value for the economy.",
      ar: "يسهم المشروع في تعزيز الأمن الغذائي عبر دمج التقنيات الزراعية الحديثة مع ممارسات مستدامة، مما يضمن إنتاجية مرتفعة، وحفاظاً على التربة، وقنوات تصدير موثوقة تعود بقيمة ملموسة على الاقتصاد.",
    },
    highlight: {
      en: "Export-grade fodder for Gulf partners",
      ar: "أعلاف تصديرية للشركاء في الخليج",
    },
  },
] as const;

function ProjectCard({
  project,
  language,
}: {
  project: (typeof projects)[number];
  language: "en" | "ar";
}) {
  const isArabic = language === "ar";
  const content = {
    title: project.title[language],
    badge: project.badge[language],
    client: project.client[language],
    date: project.date[language],
    role: project.role[language],
    overview: project.overview[language],
    highlight: project.highlight[language],
  };

  const info = [
    { label: isArabic ? "العميل" : "Client", value: content.client },
    { label: isArabic ? "زمن التنفيذ" : "Project Timeline", value: content.date },
    { label: isArabic ? "دورنا" : "Our Role", value: content.role },
  ];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/70 shadow-[0_30px_80px_rgba(5,8,22,0.55)]">
      <div
        className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5,8,22,0.4) 0%, rgba(5,8,22,0.95) 80%), url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 p-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs tracking-[0.3em] uppercase">
          <span>{content.badge}</span>
        </div>
        <div>
          <p className="text-sm text-white/70 mb-2">{content.highlight}</p>
          <h3 className="text-4xl font-black text-white leading-tight">
            {content.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {info.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/5 border border-white/10 p-4 text-white/80"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-orchida-red mb-2">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="text-white/85 leading-relaxed text-base">
          {content.overview}
        </p>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const { language } = useTranslation();
  const isArabic = language === "ar";

  const hero = {
    title: isArabic ? "المشروعات" : "Projects",
    subtitle: isArabic
      ? "نماذج عملية تثبت قدرة اوركيدا على الجمع بين الابتكار والاستدامة عبر التعدين والزراعة"
      : "Flagship initiatives that prove how ORCHIDA blends innovation with sustainability across mining and agriculture",
    intro: isArabic
      ? "نقدم هنا لمحات تفصيلية عن أهم المشروعات التي نقودها حالياً، مع التركيز على القيمة الاقتصادية والالتزام البيئي."
      : "Explore an in-depth look at our flagship projects, spotlighting the economic value we create while honoring our environmental commitments.",
  };

  const sustainability = {
    title: isArabic ? "اكتشف التزامنا بالاستدامة" : "Discover Our Commitment to Sustainability",
    description: isArabic
      ? "في شركة اوركيدا الدولية، نقود التنمية المستدامة عبر كل مشاريعنا المتنوعة. تعرّف على كيفية مساهمة منهجياتنا المبتكرة في التعدين والزراعة والبنية التحتية في تشكيل مستقبل أفضل للمجتمعات والبيئة. انضموا إلى رحلتنا نحو غدٍ أكثر استدامة."
      : "At ORCHIDA International Company we pioneer sustainable development across every discipline. See how our innovative approaches in mining, agriculture, and infrastructure shape a better future for communities and the environment. Join us on the journey toward a sustainable tomorrow."
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b1a2b] to-[#050816] text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -right-10 w-96 h-96 bg-orchida-red/30 rounded-full blur-[140px]"></div>
          <div className="absolute -bottom-24 -left-10 w-[28rem] h-[28rem] bg-emerald-500/25 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-[0.4em] uppercase">
            <span>ORCHIDA PROJECTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight drop-shadow-2xl">
            {hero.title}
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
          <p className="text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
            {hero.intro}
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orchida-green/40 blur-[160px]"></div>
          <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-orchida-red/20 blur-[200px]"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} />
          ))}
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 right-10 w-64 h-64 bg-orchida-green/30 blur-[140px]"></div>
          <div className="absolute bottom-0 left-10 w-[28rem] h-[28rem] bg-orchida-red/20 blur-[180px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-sm font-semibold tracking-[0.4em] uppercase text-orchida-red">
            {isArabic ? "استدامة" : "Sustainability"}
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            {sustainability.title}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {sustainability.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orchida-red to-red-600 font-semibold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all"
            >
              {isArabic ? "تواصل معنا" : "Talk to Our Team"}
            </Link>
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl border border-white/30 hover:border-white/60 text-white/90 transition-all"
            >
              {isArabic ? "استعرض المشروعات" : "Review Projects"}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
