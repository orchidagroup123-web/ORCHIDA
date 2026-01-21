import { Layout } from "@/components/Layout";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";

const galleryItems = [
  {
    id: "field-visit",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F14461c81607c4abf9df596cc59ed64d5?format=webp&width=1600&height=1000",
    title: {
      ar: "زيارة ميدانية لموقع المشروع",
      en: "Project site field visit",
    },
    description: {
      ar: "فريقنا يجري جولة تفقدية للموقع للتأكد من جاهزية المعدات وخطط السلامة قبل بدء التشغيل.",
      en: "Our team inspects the site to verify equipment readiness and safety plans before operations begin.",
    },
  },
  {
    id: "safety-team",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F75bd7944f0da4855b7c34aad709dbfdb?format=webp&width=1600&height=1000",
    title: {
      ar: "فريق السلامة الميداني",
      en: "Field safety crew",
    },
    description: {
      ar: "التزام كامل بمعايير الصحة والسلامة باستخدام معدات الوقاية في جميع مراحل العمل.",
      en: "Full commitment to health and safety standards using protective gear at every stage.",
    },
  },
  {
    id: "exploration-trench",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F3643e4aa343d4ffebfef37ea36af44bd?format=webp&width=1600&height=1000",
    title: {
      ar: "حفر خندق استكشافي",
      en: "Exploratory trenching",
    },
    description: {
      ar: "حفر الخنادق يكشف الطبقات الجيولوجية التي تحدد دقة دراسات الاستخراج.",
      en: "Trenching reveals geological layers that guide precise extraction studies.",
    },
  },
  {
    id: "dual-excavators",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F51005693f59441a885311156e3d2e29c?format=webp&width=1600&height=1000",
    title: {
      ar: "حفارات تعمل بتناغم",
      en: "Excavators in sync",
    },
    description: {
      ar: "عمليات الحفر والتجهيز تتم بواسطة أسطول من المعدات الثقيلة لتسريع الإنتاج.",
      en: "Excavation and preparation run through a coordinated fleet of heavy equipment to accelerate output.",
    },
  },
  {
    id: "processing-plant",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fafe69270f19845709f633eabb1ed211e?format=webp&width=1600&height=1000",
    title: {
      ar: "مصنع المعالجة",
      en: "Processing facility",
    },
    description: {
      ar: "المصنع مزود بأنظمة مراقبة لضمان كفاءة فصل الخام وتقليل الفاقد.",
      en: "The plant is equipped with monitoring systems to ensure efficient ore separation and reduced losses.",
    },
  },
  {
    id: "ball-mill",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fcdd0eea11a40406399ce41de29bd8052?format=webp&width=1600&height=1000",
    title: {
      ar: "وحدة الطحن",
      en: "Milling unit",
    },
    description: {
      ar: "إجراءات ضبط الجودة اليومية تضمن دقة عمليات الطحن والتجهيز المعدني.",
      en: "Daily quality checks keep milling and metallurgical processing precise.",
    },
  },
  {
    id: "team-briefing",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F7884a8f2c33b44a59426b319721d0a58?format=webp&width=1600&height=1000",
    title: {
      ar: "اجتماع الخبراء",
      en: "Experts briefing",
    },
    description: {
      ar: "اجتماع ميداني لمراجعة خطة التشغيل وتوزيع المهام على فرق العمل.",
      en: "On-site meeting to review the operational plan and assign responsibilities across crews.",
    },
  },
  {
    id: "heavy-machines",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F1a6d24c54eff4cbaa33102aeaa3d8303?format=webp&width=1600&height=1000",
    title: {
      ar: "معدات ثقيلة في الخدمة",
      en: "Heavy machinery in action",
    },
    description: {
      ar: "معدات الحفر والنقل تعمل باستمرار لتلبية جداول الإنتاج المكثفة.",
      en: "Drilling and hauling machines operate continuously to meet demanding production schedules.",
    },
  },
  {
    id: "lining-pond",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ff904f94e6d394d15b62cedb939e25da4?format=webp&width=1600&height=1000",
    title: {
      ar: "أعمال تبطين الحوض",
      en: "Pond lining works",
    },
    description: {
      ar: "تنفيذ أنظمة احتواء لتجميع المياه والمواد بطريقة آمنة تحمي البيئة المحيطة.",
      en: "Containment systems are installed to collect water and material safely while protecting the environment.",
    },
  },
];

export default function GalleryPage() {
  const { language } = useTranslation();
  const isArabic = language === "ar";
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = galleryItems[activeSlide];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#050816] via-[#0b1a2b] to-[#050816] text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-16 w-96 h-96 bg-orchida-red/30 blur-[150px]"></div>
          <div className="absolute -bottom-24 -left-16 w-[28rem] h-[28rem] bg-orchida-green/30 blur-[160px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-[0.4em] uppercase">
            <span>{isArabic ? "مشاريع ميدانية" : "Project Gallery"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            {isArabic ? "معرض الصور والمشاريع" : "Gallery of Field Projects"}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            {isArabic
              ? "نوثق جهود اوركيدا في التعدين والبنية التحتية عبر صور حقيقية من مواقع العمل المنتشرة في السودان."
              : "A visual record of ORCHIDA's mining and infrastructure efforts across real project sites in Sudan."}
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-16 left-10 w-72 h-72 bg-orchida-green/30 blur-[140px]"></div>
          <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-orchida-red/20 blur-[200px]"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className="group rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <figcaption className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title[language]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description[language]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 right-10 w-72 h-72 bg-orchida-green/30 blur-[150px]"></div>
          <div className="absolute bottom-0 left-10 w-[28rem] h-[28rem] bg-orchida-red/25 blur-[170px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-orchida-red">
              {isArabic ? "شريط الصور" : "Image Slider"}
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              {isArabic ? "مشروعاتنا في لمحة" : "Projects at a Glance"}
            </h2>
            <p className="text-white/80">
              {isArabic
                ? "تنقّل بين أبرز لحظات العمل الميداني عبر السلايد التفاعلي أدناه."
                : "Swipe through key moments from the field using the immersive slider below."}
            </p>
          </div>

          <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_35px_90px_rgba(5,8,22,0.6)]">
            <img
              src={current.image}
              alt={current.title[language]}
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/15 text-xs tracking-[0.3em] uppercase">
                {isArabic ? "مشروع" : "Project"}
              </span>
              <h3 className="text-3xl font-bold">{current.title[language]}</h3>
              <p className="text-white/80">{current.description[language]}</p>
            </div>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev === 0 ? galleryItems.length - 1 : prev - 1,
                  )
                }
                className="p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
                aria-label={isArabic ? "السابق" : "Previous"}
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setActiveSlide((prev) => (prev + 1) % galleryItems.length)
                }
                className="p-3 rounded-full bg-black/40 hover:bg-black/70 transition"
                aria-label={isArabic ? "التالي" : "Next"}
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-10 bg-orchida-red"
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={item.title[language]}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
