export const translations = {
  en: {
    // Header & Navigation
    home: "Home",
    about: "About Us",
    projects: "Projects",
    sectors: "Our Sectors",
    media: "Media Center",
    contact: "Contact Us",
    language: "العربية",

    // Home Page
    heroTitle: "We Shape the Future from the Heart of the Earth",
    heroSubtitle:
      "Leading innovation across agriculture, mining, trade, livestock, fisheries, and infrastructure",
    whoWeAre: "Who We Are",
    readMore: "Read More",

    // Stats Section
    yearsOfExperience: "Years of Experience",
    employees: "Employees",
    countries: "Countries",

    // Sectors
    agriculturalHealth: "Agricultural Health",
    mining: "Mining",
    internationalTrade: "International Trade",
    livestock: "Livestock",
    fisheries: "Fisheries & Aquaculture",
    infrastructure: "Infrastructure",

    agriculturalHealthDesc: "Leadership in Sustainable Agricultural Solutions",
    miningDesc: "Responsible Exploration and Extraction",
    tradingDesc: "Your Trusted Bridge to Global Markets",
    livestockDesc: "Excellence in Livestock Production",
    fisheriesDesc: "Sustainability of Marine Resources",
    infrastructureDesc: "Shaping the Future with Solid Infrastructure",

    // Footer
    headOffice: "Head Office",
    portSudan: "Red Sea State – Port Sudan",
    branch: "Branch",
    atbara: "Nile River State – Atbara",
    phone: "Phone",
    email: "Email",
    allRightsReserved: "All Rights Reserved",

    // Placeholder Pages
    comingSoon: "Coming Soon",
    pageInDevelopment:
      "This page is currently in development. Let us know what you'd like to see here!",
  },
  ar: {
    // Header & Navigation
    home: "الرئيسية",
    about: "عن المجموعة",
    projects: "المشروعات",
    sectors: "قطاعات الأعمال",
    media: "المركز الإعلامي",
    contact: "اتصل بنا",
    language: "English",

    // Home Page
    heroTitle: "نصنع المستقبل من قلب الأرض",
    heroSubtitle:
      "الريادة والابتكار عبر الزراعة والتعدين والتجارة والثروة الحيوانية والسمكية والبنية التحتية",
    whoWeAre: "من نحن",
    readMore: "اقرأ المزيد",

    // Stats Section
    yearsOfExperience: "سنة من الخبرة",
    employees: "موظف",
    countries: "دول",

    // Sectors
    agriculturalHealth: "قطاع الصحة الزراعية",
    mining: "قطاع التعدين",
    internationalTrade: "قطاع التجارة الدولية",
    livestock: "قطاع الثروة الحيوانية",
    fisheries: "قطاع الثروة السمكية",
    infrastructure: "قطاع البنية التحتية",

    agriculturalHealthDesc: "ريادة الحلول الزراعية المستدامة",
    miningDesc: "استكشاف واستخراج ثروات الأرض بمسؤولية",
    tradingDesc: "جسركم الموثوق للأسواق العالمية",
    livestockDesc: "التميز في الإنتاج الحيواني والأمن الغذائي",
    fisheriesDesc: "استدامة الموارد البحرية والذكاء المائي",
    infrastructureDesc: "صياغة المستقبل عبر بنية تحتية صلبة",

    // Footer
    headOffice: "المقر الرئيسي",
    portSudan: "ولاية البحر الأحمر – بورتسودان",
    branch: "الفرع",
    atbara: "ولاية نهر النيل – عطبرة",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    allRightsReserved: "جميع الحقوق محفوظة",

    // Placeholder Pages
    comingSoon: "قريباً",
    pageInDevelopment:
      "هذه الصفحة قيد التطوير حالياً. أخبرنا بما تود رؤيته هنا!",
  },
};

export function getTranslation(
  language: "en" | "ar",
  key: keyof typeof translations.en,
): string {
  return translations[language][key as any] || "";
}
