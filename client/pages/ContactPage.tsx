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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orchida-red to-orchida-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-white/90">
            {language === 'ar'
              ? 'نحن هنا للاستماع إلى استفساراتك والرد عليها بسرعة'
              : 'We are here to listen and respond to your inquiries quickly'
            }
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
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
