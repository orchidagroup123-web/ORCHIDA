import { Layout } from "@/components/Layout";
import { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

function GradientParagraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orchida-red/20 via-slate-900/60 to-orchida-green/20 blur-3xl"></div>
      <div className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-slate-800/75 border border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <p className={`text-white/90 leading-relaxed tracking-wide ${className}`}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { language } = useTranslation();

  const timelineAr = [
    {
      year: "2004",
      title: "التأسيس",
      description: "انطلاق رحلة اوركيدا الدولية",
    },
    { year: "2008", title: "التوسع", description: "دخول قطاع التعدين" },
    {
      year: "2012",
      title: "الاستثمار",
      description: "استثمارات في البنية التحتية",
    },
    { year: "2016", title: "النمو", description: "توسع العمليات اللوجستية" },
    { year: "2020", title: "الابتكار", description: "استخدام تقنيات ذكية" },
    { year: "2024", title: "الريادة", description: "موقع عالمي متميز" },
  ];

  const timelineEn = [
    {
      year: "2004",
      title: "Establishment",
      description: "Launch of Orchida International",
    },
    {
      year: "2008",
      title: "Expansion",
      description: "Entry into mining sector",
    },
    {
      year: "2012",
      title: "Investment",
      description: "Infrastructure investments",
    },
    {
      year: "2016",
      title: "Growth",
      description: "Expansion of logistics operations",
    },
    {
      year: "2020",
      title: "Innovation",
      description: "Implementation of smart technologies",
    },
    {
      year: "2024",
      title: "Leadership",
      description: "Distinguished global position",
    },
  ];

  const timeline = language === "ar" ? timelineAr : timelineEn;

  return (
    <Layout>
      {/* Hero Section - Professional Cinematic Design */}
      <div className="relative py-40 overflow-hidden bg-black/20">
        {/* Background Image with Fixed Position */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-attachment-fixed"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(227, 30, 36, 0.15) 0%, rgba(0, 104, 55, 0.15) 100%), url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500&h=800&fit=crop")',
            backgroundAttachment: "fixed",
          }}
        />

        {/* Decorative Gradient Orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        {/* Multi-Layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orchida-red/10 to-orchida-green/10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Top Line */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
            <span className="text-orchida-red font-bold text-sm uppercase tracking-widest">
              Orchida Group
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fcd87277187a34a1a87ce0c3acf2379a5?format=webp&width=800&height=1200"
              alt={language === "ar" ? "شعار مجموعة اوركيدا" : "Orchida Group logo"}
              className="h-24 w-auto drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            {language === "ar" ? "عن مجموعة اوركيدا" : "About Orchida Group"}
          </h1>
          <p className="text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            {language === "ar"
              ? "رحلة من الابتكار والالتزام بالتميز والاستدامة"
              : "A journey of innovation, commitment to excellence and sustainability"}
          </p>

          {/* Stats Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-orchida-red/50 transition-all">
              <span className="text-2xl font-bold text-orchida-red">20+</span>
              <p className="text-white/80 text-sm">
                {language === "ar" ? "سنة خبرة" : "Years of Experience"}
              </p>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-orchida-green/50 transition-all">
              <span className="text-2xl font-bold text-orchida-green">6</span>
              <p className="text-white/80 text-sm">
                {language === "ar" ? "قطاعات عمل" : "Business Sectors"}
              </p>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-orchida-green/50 transition-all">
              <span className="text-2xl font-bold text-orchida-green">
                180+
              </span>
              <p className="text-white/80 text-sm">
                {language === "ar" ? "موظف" : "Team Members"}
              </p>
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-orchida-red/50 transition-all">
              <span className="text-2xl font-bold text-orchida-red">2</span>
              <p className="text-white/80 text-sm">
                {language === "ar" ? "مكاتب دول" : "Office Countries"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chairman's Message */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8 text-center lg:text-left mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <div className="h-1 w-8 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
                <span className="text-orchida-red font-bold text-xs uppercase tracking-wider">
                  Message
                </span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                {language === "ar"
                  ? "كلمة رئيس مجلس الإدارة"
                  : "Chairman's Message"}
              </h2>
              <p className="text-2xl italic text-orchida-red font-light mb-4 leading-relaxed">
                {language === "ar"
                  ? '"من الأرضِ نبدأ.. وإلى المستقبلِ نمضي"'
                  : '"From the Earth We Begin... To the Future We Proceed"'}
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-orchida-red to-orchida-green rounded-full mb-6 mx-auto lg:mx-0"></div>
            </div>

            <div className="relative h-[28rem] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F29c8726da1494945ac04082f0db04c4b?format=webp&width=800&height=1200"
                alt={language === "ar" ? "رئيس مجلس الإدارة" : "Chairman"}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orchida-red/15 to-orchida-green/15"></div>
            </div>
          </div>

          {/* Full Message */}
          <div className="relative p-12 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/70 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-16 -right-10 w-56 h-56 bg-orchida-green/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-orchida-red/15 blur-3xl"></div>
            </div>
            <div className="relative space-y-6 text-white leading-relaxed text-justify tracking-wide">
              {language === "ar" ? (
                <>
                  <p>
                    منذ التأسيس، وضعت مجموعة اوركيدا نصب عينيها هدفاً واضحاً: أن
                    تكون شريكاً فاعلاً في مسيرة التنمية الاقتصادية الشاملة. نحن
                    لا ننظر إلى نشاطاتنا في الزراعة والتعدين والبنية التحتية
                    والتجارة كمجرد قطاعات استثمارية، بل نراها ركائز أساسية لبناء
                    مستقبل أكثر استدامة وقوة لأوطاننا وللأجيال القادمة.
                  </p>
                  <p>
                    إن عالمنا اليوم يتغير بسرعة، والتحديات التي تواجه الأمن
                    الغذائي والطاقة وسلاسل التوريد تتطلب حلولاً غير تقليدية. ومن
                    هنا، اتخذنا في المجموعة منهجية تعتمد على "الابتكار المسؤول"؛
                    حيث ندمج بين الخبرات الميدانية العميقة وبين أحدث التقنيات
                    العالمية لضمان أعلى مستويات الكفاءة والاحترافية.
                  </p>
                  <p>
                    إن فخرنا الحقيقي لا يكمن فقط في حجم مشاريعنا أو انتشارنا
                    الجغرافي، بل في الثقة التي يوليها لنا شركاؤنا، وفي الأثر
                    الإيجابي الذي نتركه في البيئة والمجتمعات التي نعمل بها. نحن
                    في اوركيدا نؤمن بأن النجاح رحلة مستمرة، وبأن التزامنا
                    بالنزاهة والجودة هو البوصلة التي تقودنا دائماً نحو القمة.
                  </p>
                  <p>
                    نرحب بكم في عالم اوركيدا، وندعوكم لتكونوا جزءاً من طموحنا
                    الذي لا يحده سقف.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Since its establishment, Orchida Group has set a clear
                    objective: to be an active partner in comprehensive economic
                    development. We do not view our activities in agriculture,
                    mining, infrastructure, and trade as mere investment
                    sectors, but as essential pillars for building a more
                    sustainable and stronger future for our nations and future
                    generations.
                  </p>
                  <p>
                    Today's world is changing rapidly, and the challenges facing
                    food security, energy, and supply chains require
                    unconventional solutions. Therefore, we have adopted a
                    methodology based on "responsible innovation," where we
                    combine deep field expertise with the latest global
                    technologies to ensure the highest levels of efficiency and
                    professionalism.
                  </p>
                  <p>
                    Our true pride lies not only in the scale of our projects or
                    our geographic presence, but in the trust our partners place
                    in us and the positive impact we leave on the environment
                    and communities where we operate. At Orchida, we believe
                    success is a continuous journey, and our commitment to
                    integrity and quality is the compass that always guides us
                    toward the top.
                  </p>
                  <p>
                    We welcome you to the world of Orchida and invite you to
                    become part of our boundless ambition.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Offices & Locations Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
              <span className="text-orchida-red font-bold text-sm uppercase tracking-widest">
                {language === "ar" ? "مقراتنا" : "Our Offices"}
              </span>
              <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {language === "ar" ? "المقرات والفروع" : "Offices & Locations"}
            </h2>
            <GradientParagraph className="text-xl text-center">
              {language === "ar"
                ? "نحن موجودون في السودان وفي طريقنا للتوسع في المملكة العربية السعودية"
                : "We are present in Sudan and expanding to Saudi Arabia"}
            </GradientParagraph>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sudan - Active */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1495576032313-52581002a659?w=600&h=400&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 h-96 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span className="text-green-300 font-bold text-sm uppercase tracking-wider">
                      {language === "ar" ? "مكتب نشط" : "Active Office"}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-3 drop-shadow-lg">
                    {language === "ar" ? "السودان" : "Sudan"}
                  </h3>
                  <p className="text-white/90 text-sm mb-6">
                    {language === "ar"
                      ? "المقر الرئيسي ومركز العمليات"
                      : "Head Office & Operations Center"}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-orchida-red font-bold mt-1">📍</span>
                    <span>
                      {language === "ar"
                        ? "ولاية البحر الأحمر، بورتسودان"
                        : "Red Sea State, Port Sudan"}
                    </span>
                  </p>
                  <p className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-orchida-green font-bold mt-1">
                      👥
                    </span>
                    <span>
                      {language === "ar"
                        ? "حوالي 180 موظف"
                        : "Approximately 180 employees"}
                    </span>
                  </p>
                  <p className="text-white/80 text-sm flex items-start gap-2" dir="ltr">
                    <span className="text-orchida-red font-bold mt-1">📞</span>
                    <span>+249 123 722 286</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Saudi Arabia - Under Construction */}
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ring-2 ring-yellow-400/50">
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&h=400&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 h-96 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-yellow-400 text-2xl">⚙️</span>
                    <span className="text-yellow-300 font-bold text-sm uppercase tracking-wider">
                      {language === "ar" ? "قيد الإنشاء" : "Under Construction"}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-3 drop-shadow-lg">
                    {language === "ar"
                      ? "المملكة العربية السعودية"
                      : "Saudi Arabia"}
                  </h3>
                  <p className="text-white/90 text-sm mb-6">
                    {language === "ar"
                      ? "فرع إقليمي للتوسع في الخليج"
                      : "Regional Branch for Gulf Expansion"}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-white/80 text-sm flex items-start gap-2">
                    <span className="text-orchida-red font-bold mt-1">📍</span>
                    <span>{language === "ar" ? "الرياض" : "Riyadh"}</span>
                  </p>
                  <p className="text-yellow-300 text-sm flex items-start gap-2">
                    <span className="font-bold mt-1">🏗️</span>
                    <span>
                      {language === "ar"
                        ? "يتوقع الانتهاء من الإنشاء في 2025"
                        : "Expected launch in 2025"}
                    </span>
                  </p>
                  <p className="text-white/80 text-sm flex items-start gap-2">
                    <span className="font-bold mt-1">🤝</span>
                    <span>
                      {language === "ar"
                        ? "شراكات استراتيجية قيد الحوار"
                        : "Strategic partnerships in development"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
              <span className="text-orchida-red font-bold text-sm uppercase tracking-widest">
                Foundation
              </span>
              <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {language === "ar"
                ? "الرؤية والرسالة والقيم"
                : "Vision, Mission & Values"}
            </h2>
            <GradientParagraph className="text-xl text-center">
              {language === "ar"
                ? "الأساس الذي يرشد كل قراراتنا واستراتيجياتنا"
                : "The foundation that guides every decision and strategy"}
            </GradientParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="group relative h-96 cursor-pointer">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orchida-red/30 p-8 flex flex-col">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orchida-red/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-orchida-red mb-4 group-hover:text-orchida-red transition-colors">
                    {language === "ar" ? "الرؤية" : "Vision"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors">
                    {language === "ar"
                      ? "أن نكون مجموعة متعددة القطاعات رائدة عالمياً، نشكل مستقبلاً مستداماً من خلال الابتكار المسؤول والتميز التشغيلي."
                      : "To be a globally leading multi-sector group shaping a sustainable future through responsible innovation and operational excellence."}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative h-96 cursor-pointer">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orchida-green/30 p-8 flex flex-col">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orchida-green/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-orchida-green mb-4 group-hover:text-orchida-red transition-colors">
                    {language === "ar" ? "الرسالة" : "Mission"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors">
                    {language === "ar"
                      ? "توفير حلول متكاملة وعالية الجودة عبر قطاعاتنا الستة لدعم الأمن الغذائي والطاقي والتنمية الاقتصادية المستدامة."
                      : "Provide integrated, high-quality solutions across our six sectors to support food security, energy sustainability, and economic development."}
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="group relative h-96 cursor-pointer">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orchida-red/30 p-8 flex flex-col">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orchida-red/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold text-orchida-red mb-4 group-hover:text-orchida-red transition-colors">
                    {language === "ar" ? "القيم" : "Values"}
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm flex-grow group-hover:text-gray-700 transition-colors">
                    {language === "ar" ? (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-red font-bold">✓</span>{" "}
                          النزاهة والشفافية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-green font-bold">
                            ✓
                          </span>{" "}
                          الابتكار المستمر
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-red font-bold">✓</span>{" "}
                          الاستدامة البيئية
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-green font-bold">
                            ✓
                          </span>{" "}
                          التميز والجودة
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-red font-bold">✓</span>{" "}
                          Integrity & Transparency
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-green font-bold">
                            ✓
                          </span>{" "}
                          Continuous Innovation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-red font-bold">✓</span>{" "}
                          Environmental Sustainability
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-orchida-green font-bold">
                            ✓
                          </span>{" "}
                          Excellence & Quality
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
              <span className="text-orchida-red font-bold text-sm uppercase tracking-widest">
                History
              </span>
              <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {language === "ar"
                ? "رحلة النمو والتطور"
                : "Journey of Growth & Evolution"}
            </h2>
            <GradientParagraph className="text-xl text-center">
              {language === "ar"
                ? "عشرون سنة من الابتكار والتطور المستمر"
                : "Twenty years of continuous innovation and development"}
            </GradientParagraph>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orchida-red via-orchida-green to-orchida-red"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="w-full lg:w-1/2 px-4">
                    <div
                      className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orchida-red/30 ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {/* Background accent */}
                      <div
                        className={`absolute top-0 ${index % 2 === 0 ? "left-0" : "right-0"} w-32 h-32 bg-gradient-to-br from-orchida-red/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                      ></div>

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orchida-red to-orchida-green">
                            {item.year}
                          </div>
                          <div className="hidden sm:block flex-1 h-1 bg-gradient-to-r from-orchida-red to-orchida-green opacity-30"></div>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orchida-red transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="w-6 h-6 bg-white border-4 border-orchida-red rounded-full absolute z-20 shadow-lg"></div>
                      <div className="absolute w-12 h-12 bg-orchida-red/20 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="mt-20 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-orchida-red via-gray-900 to-orchida-green rounded-full"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
