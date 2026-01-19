import { Layout } from '@/components/Layout';
import { useTranslation } from '@/hooks/useTranslation';
import { LeadForm } from '@/components/LeadForm';

export default function ContactPage() {
  const { language } = useTranslation();

  const contactInfoAr = [
    {
      icon: '📍',
      title: 'المقر الرئيسي',
      details: ['ولاية البحر الأحمر – بورتسودان', 'السودان'],
    },
    {
      icon: '🏢',
      title: 'الفرع',
      details: ['ولاية نهر النيل – عطبرة', 'السودان'],
    },
    {
      icon: '📞',
      title: 'الهاتف',
      details: ['+249 123 722 286', 'متاح 9 ص - 6 م'],
    },
    {
      icon: '✉️',
      title: 'البريد الإلكتروني',
      details: ['info@orchidagroup.com', 'للاستفسارات العامة'],
    },
  ];

  const contactInfoEn = [
    {
      icon: '📍',
      title: 'Head Office',
      details: ['Red Sea State – Port Sudan', 'Sudan'],
    },
    {
      icon: '🏢',
      title: 'Branch',
      details: ['Nile River State – Atbara', 'Sudan'],
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+249 123 722 286', 'Available 9 AM - 6 PM'],
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@orchidagroup.com', 'For general inquiries'],
    },
  ];

  const contactInfo = language === 'ar' ? contactInfoAr : contactInfoEn;

  return (
    <Layout>
      {/* Hero Section - Professional Cinematic Design */}
      <div className="relative py-40 overflow-hidden bg-black/20">
        {/* Background Image with Fixed Position */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(227, 30, 36, 0.2) 0%, rgba(0, 104, 55, 0.2) 100%), url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500&h=800&fit=crop")',
            backgroundAttachment: 'fixed',
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
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
            <span className="text-orchida-red font-bold text-sm uppercase tracking-widest">Contact</span>
            <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p className="text-2xl text-white/95 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'نحن هنا للاستماع إلى استفساراتك والرد عليها بسرعة واحترافية'
              : 'We are here to listen and respond to your inquiries with speed and professionalism'
            }
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orchida-red/10 to-orchida-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Border Gradient */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orchida-red/30 transition-colors duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-center h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {info.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-orchida-red transition-colors">
                    {info.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orchida-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
                <span className="text-orchida-red font-bold text-xs uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-8">
                {language === 'ar' ? 'نموذج الاتصال الذكي' : 'Smart Contact Form'}
              </h2>
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 border border-gray-100">
                <LeadForm />
              </div>
            </div>

            {/* Map & Info Section */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-gradient-to-r from-orchida-green to-transparent rounded-full"></div>
                <span className="text-orchida-green font-bold text-xs uppercase tracking-wider">Location</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-8">
                {language === 'ar' ? 'موقعنا' : 'Our Location'}
              </h2>

              {/* Map */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 h-96 border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.3294834326426!2d37.64053!3d19.61922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16e748c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sPort%20Sudan%2C%20Sudan!5e0!3m2!1sen!2ssd!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className="space-y-3 text-gray-600">
                  {language === 'ar' ? (
                    <>
                      <p className="flex items-center gap-3">
                        <span className="text-orchida-red font-bold text-lg">→</span>
                        <span><strong>السبت - الخميس:</strong> 9:00 ص - 6:00 م</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-orchida-red font-bold text-lg">→</span>
                        <span><strong>الجمعة:</strong> مغلق</span>
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 flex items-start gap-3">
                          <span className="text-orchida-green font-bold text-lg">✓</span>
                          <span>نحن نرد على الاستفسارات في غضون 24 ساعة عمل</span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="flex items-center gap-3">
                        <span className="text-orchida-red font-bold text-lg">→</span>
                        <span><strong>Saturday - Thursday:</strong> 9:00 AM - 6:00 PM</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="text-orchida-red font-bold text-lg">→</span>
                        <span><strong>Friday:</strong> Closed</span>
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 flex items-start gap-3">
                          <span className="text-orchida-green font-bold text-lg">✓</span>
                          <span>We respond to inquiries within 24 business hours</span>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-orchida-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-orchida-green rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orchida-red to-transparent rounded-full"></div>
              <span className="text-orchida-red font-bold text-sm uppercase tracking-wider">FAQ</span>
              <div className="h-1 w-12 bg-gradient-to-l from-orchida-green to-transparent rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'إجابات سريعة على أسئلتك الأكثر شيوعاً'
                : 'Quick answers to your most common questions'
              }
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                arQ: 'كيف يمكنني التقديم للعمل معكم؟',
                enQ: 'How can I apply to work with you?',
                arA: 'يرجى ملء نموذج الاتصال أعلاه واختيار "استفسار عام" كنوع الاستفسار. سيقوم فريقنا بالتواصل معك في أقرب وقت.',
                enA: 'Please fill out the contact form above and select "General Inquiry" as the inquiry type. Our team will contact you shortly.',
                icon: '💼',
              },
              {
                arQ: 'هل تقبلون طلبات العروض (RFQ)؟',
                enQ: 'Do you accept Request for Quote (RFQ)?',
                arA: 'نعم، نقبل طلبات العروض لجميع قطاعاتنا. اختر "طلب توريد" في النموذج وأخبرنا بمتطلباتك.',
                enA: 'Yes, we accept RFQs for all our sectors. Select "Supply Request" in the form and let us know your requirements.',
                icon: '📋',
              },
              {
                arQ: 'ما هي شروط الشراكة الاستراتيجية؟',
                enQ: 'What are the conditions for strategic partnerships?',
                arA: 'نحن مفتوحون للشراكات المتبادلة. اتصل بنا واختر "شراكة استراتيجية" لمناقشة الفرص.',
                enA: 'We are open to mutual partnerships. Contact us and select "Strategic Partnership" to discuss opportunities.',
                icon: '🤝',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orchida-red/30"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orchida-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl mt-1">{faq.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orchida-red transition-colors">
                        {language === 'ar' ? faq.arQ : faq.enQ}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                        {language === 'ar' ? faq.arA : faq.enA}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
