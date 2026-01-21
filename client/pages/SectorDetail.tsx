import { Layout } from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { sectorsData } from "@/data/sectors";

export default function SectorDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useTranslation();

  const sector = sectorsData.find((s) => s.id === id);

  if (!sector) {
    return (
      <Layout>
        <div className="min-h-[calc(100vh-theme(height.20)-theme(height.64))] flex items-center justify-center bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === "ar" ? "القطاع غير موجود" : "Sector not found"}
            </h1>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-orchida-red hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            >
              {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image */}
      <div className="relative w-full h-96 overflow-hidden">
        <img
          src={sector.image}
          alt={sector.nameAr}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">{sector.iconEmoji}</div>
            <h1 className="text-5xl font-bold text-white">
              {language === "ar" ? sector.nameAr : sector.nameEn}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title */}
        <h2 className="text-4xl font-bold text-orchida-red mb-8 text-center">
          {language === "ar" ? sector.titleAr : sector.titleEn}
        </h2>

        {/* Description */}
        <div className="relative mb-12">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orchida-red/15 via-slate-900/60 to-orchida-green/15 blur-3xl"></div>
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-slate-800/75 border border-white/10 shadow-[0_30px_80px_rgba(15,23,42,0.4)] backdrop-blur-xl">
            <p
              className={`text-lg leading-relaxed text-white/90 text-justify ${
                language === "ar" ? "tracking-normal" : "tracking-wide"
              }`}
            >
              {language === "ar" ? sector.fullContentAr : sector.fullContentEn}
            </p>
          </div>
        </div>

        {sector.specializations && sector.specializations.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold tracking-[0.3em] text-orchida-red uppercase">
                {language === "ar" ? "تخصصات القطاع" : "Key specializations"}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {language === "ar"
                  ? `أبرز تخصصات ${sector.nameAr}`
                  : `Top ${sector.nameEn} Focus Areas`}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sector.specializations.map((spec, index) => (
                <div
                  key={`${spec.enName}-${index}`}
                  className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden bg-white"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={spec.image}
                      alt={language === "ar" ? spec.arName : spec.enName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {language === "ar" ? spec.arName : spec.enName}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {language === "ar" ? spec.arDesc : spec.enDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">{sector.iconEmoji}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {language === "ar" ? "التميز" : "Excellence"}
            </h3>
            <p className="text-gray-600">
              {language === "ar"
                ? "نطبق أعلى معايير الجودة والابتكار"
                : "We apply the highest standards of quality and innovation"}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {language === "ar" ? "الاستدامة" : "Sustainability"}
            </h3>
            <p className="text-gray-600">
              {language === "ar"
                ? "التزام بحماية البيئة والموارد الطبيعية"
                : "Commitment to protecting the environment and natural resources"}
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {language === "ar" ? "الشراكة" : "Partnership"}
            </h3>
            <p className="text-gray-600">
              {language === "ar"
                ? "نبني علاقات طويلة الأمد مع عملائنا"
                : "We build long-term relationships with our clients"}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "ar"
              ? "هل تريد معرفة المزيد؟"
              : "Want to learn more?"}
          </h3>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-orchida-red hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {language === "ar" ? "اتصل بنا" : "Contact Us"}
          </Link>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block text-orchida-red hover:text-red-700 font-bold transition-colors"
          >
            {language === "ar" ? "← العودة للرئيسية" : "← Back to Home"}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
