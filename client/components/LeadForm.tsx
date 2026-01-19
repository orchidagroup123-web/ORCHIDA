import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { sectorsData } from '@/data/sectors';

export function LeadForm() {
  const { language } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    countryCode: '+249',
    phone: '',
    sector: '',
    inquiryType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const inquiryTypesAr = [
    { value: 'partnership', label: 'شراكة استراتيجية' },
    { value: 'supply', label: 'طلب توريد' },
    { value: 'general', label: 'استفسار عام' },
  ];

  const inquiryTypesEn = [
    { value: 'partnership', label: 'Strategic Partnership' },
    { value: 'supply', label: 'Supply Request' },
    { value: 'general', label: 'General Inquiry' },
  ];

  const inquiryTypes = language === 'ar' ? inquiryTypesAr : inquiryTypesEn;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          company: '',
          email: '',
          countryCode: '+249',
          phone: '',
          sector: '',
          inquiryType: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-block mb-4">
          <div className="text-6xl">✅</div>
        </div>
        <h3 className="text-2xl font-bold text-orchida-green mb-2">
          {language === 'ar' ? 'تم استقبال رسالتك بنجاح!' : 'Message sent successfully!'}
        </h3>
        <p className="text-gray-600">
          {language === 'ar'
            ? 'سنقوم بالرد عليك في أقرب وقت'
            : 'We will get back to you soon'
          }
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1: Full Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
            placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'اسم الشركة' : 'Company Name'}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
            placeholder={language === 'ar' ? 'اسم شركتك' : 'Your company name'}
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
            placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'your@email.com'}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
            >
              <option value="+249">+249</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+966">+966</option>
              <option value="+971">+971</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
              placeholder={language === 'ar' ? 'رقمك' : 'Phone number'}
            />
          </div>
        </div>
      </div>

      {/* Row 3: Sector & Inquiry Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'القطاع المهتم به' : 'Interested Sector'}
          </label>
          <select
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
          >
            <option value="">
              {language === 'ar' ? 'اختر القطاع' : 'Select a sector'}
            </option>
            {sectorsData.map(sector => (
              <option key={sector.id} value={sector.id}>
                {language === 'ar' ? sector.nameAr : sector.nameEn}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'نوع الاستفسار' : 'Inquiry Type'}
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent"
          >
            <option value="">
              {language === 'ar' ? 'اختر نوع الاستفسار' : 'Select inquiry type'}
            </option>
            {inquiryTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {language === 'ar' ? 'رسالتك' : 'Message'}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchida-red focus:border-transparent resize-none"
          placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message here...'}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 bg-orchida-red hover:bg-red-700 disabled:bg-gray-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
          </span>
        ) : (
          language === 'ar' ? 'إرسال الرسالة' : 'Send Message'
        )}
      </button>

      {/* Privacy Notice */}
      <p className="text-sm text-gray-500 text-center">
        {language === 'ar'
          ? 'نحن نحترم خصوصيتك. سيتم استخدام بيانات الاتصال الخاصة بك فقط للرد على استفسارك.'
          : 'We respect your privacy. Your contact information will only be used to respond to your inquiry.'
        }
      </p>
    </form>
  );
}
