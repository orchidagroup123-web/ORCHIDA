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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'ar' ? 'نموذج الاتصال الذكي' : 'Smart Contact Form'}
              </h2>
              <LeadForm />
            </div>

            {/* Map & Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'ar' ? 'موقعنا' : 'Our Location'}
              </h2>

              {/* Map */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-md h-96">
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                </h3>
                <div className="space-y-2 text-gray-600">
                  {language === 'ar' ? (
                    <>
                      <p>
                        <strong>السبت - الخميس:</strong> 9:00 ص - 6:00 م
                      </p>
                      <p>
                        <strong>الجمعة:</strong> مغلق
                      </p>
                      <p className="text-sm text-gray-500 mt-4">
                        نحن نرد على الاستفسارات في غضون 24 ساعة عمل
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Saturday - Thursday:</strong> 9:00 AM - 6:00 PM
                      </p>
                      <p>
                        <strong>Friday:</strong> Closed
                      </p>
                      <p className="text-sm text-gray-500 mt-4">
                        We respond to inquiries within 24 business hours
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-orchida-red mb-2">
                {language === 'ar' ? 'كيف يمكنني التقديم للعمل معكم؟' : 'How can I apply to work with you?'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'يرجى ملء نموذج الاتصال أعلاه واختيار "استفسار عام" كنوع الاستفسار. سيقوم فريقنا بالتواصل معك في أقرب وقت.'
                  : 'Please fill out the contact form above and select "General Inquiry" as the inquiry type. Our team will contact you shortly.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-orchida-red mb-2">
                {language === 'ar' ? 'هل تقبلون طلبات العروض (RFQ)؟' : 'Do you accept Request for Quote (RFQ)?'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نعم، نقبل طلبات العروض لجميع قطاعاتنا. اختر "طلب توريد" في النموذج وأخبرنا بمتطلباتك.'
                  : 'Yes, we accept RFQs for all our sectors. Select "Supply Request" in the form and let us know your requirements.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-orchida-red mb-2">
                {language === 'ar' ? 'ما هي شروط الشراكة الاستراتيجية؟' : 'What are the conditions for strategic partnerships?'}
              </h3>
              <p className="text-gray-600">
                {language === 'ar'
                  ? 'نحن مفتوحون للشراكات المتبادلة. اتصل بنا واختر "شراكة استراتيجية" لمناقشة الفرص.'
                  : 'We are open to mutual partnerships. Contact us and select "Strategic Partnership" to discuss opportunities.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
