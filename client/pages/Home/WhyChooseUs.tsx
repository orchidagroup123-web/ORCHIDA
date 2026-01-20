import { useTranslation } from '@/hooks/useTranslation';

export function WhyChooseUs() {
  const { language } = useTranslation();

  const features = [
    {
      icon: '🌍',
      arTitle: 'خبرة محلية ودولية',
      enTitle: 'Local & Global Expertise',
      arDesc: 'نعمل في السودان ونتوسع في السعودية مع خبرة تمتد لأكثر من 20 سنة',
      enDesc: 'Operating in Sudan and expanding to Saudi Arabia with 20+ years of experience',
    },
    {
      icon: '👥',
      arTitle: 'فريق متخصص',
      enTitle: 'Expert Team',
      arDesc: 'فريق يضم أكثر من 180 خبير ومهندس متخصص في مجالاتهم',
      enDesc: 'Team of 180+ specialized experts and engineers in their fields',
    },
    {
      icon: '⚙️',
      arTitle: 'حلول متكاملة',
      enTitle: 'Integrated Solutions',
      arDesc: 'من الاستكشاف إلى الإنتاج والتوريد، نقدم حلولاً شاملة',
      enDesc: 'From exploration to production and supply, we offer comprehensive solutions',
    },
    {
      icon: '🌱',
      arTitle: 'التزام بالاستدامة',
      enTitle: 'Sustainability Commitment',
      arDesc: 'نوازن بين النمو الاقتصادي والمسؤولية البيئية والاجتماعية',
      enDesc: 'Balancing economic growth with environmental and social responsibility',
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
            <span className="text-green-600 font-bold text-sm uppercase tracking-wider">
              {language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-amber-500 to-transparent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {language === 'ar'
              ? 'شركاؤك في النجاح'
              : 'Your Partner in Success'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نقدم القيمة الحقيقية من خلال الخبرة والابتكار والالتزام'
              : 'We deliver true value through expertise, innovation, and commitment'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 group-hover:border-green-300 shadow-lg group-hover:shadow-xl transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col items-center text-center h-full justify-center space-y-4 z-10">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 bg-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative text-5xl group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {language === 'ar' ? feature.arTitle : feature.enTitle}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {language === 'ar' ? feature.arDesc : feature.enDesc}
                </p>

                {/* Accent Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'اكتشف كيف يمكننا مساعدتك في تحقيق أهدافك وطموحاتك'
              : 'Discover how we can help you achieve your goals and ambitions'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              {language === 'ar' ? '📞 اتصل بنا الآن' : 'Contact Us Now'}
            </button>
            <button className="px-8 py-4 border-2 border-green-600 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors duration-300">
              {language === 'ar' ? '📚 اعرف المزيد' : 'Learn More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
