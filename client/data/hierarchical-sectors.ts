export interface SubSector {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconEmoji: string;
  image: string;
}

export interface MainSector {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconEmoji: string;
  image: string;
  level: 'primary' | 'secondary'; // primary = top 3, secondary = others
  position?: 'center' | 'right' | 'left'; // for pyramid positioning
  color: string;
  subsectors: SubSector[];
}

export const hierarchicalSectors: MainSector[] = [
  // PRIMARY SECTORS (Pyramid Top 3)
  {
    id: "mining",
    nameAr: "قطاع التعدين",
    nameEn: "Mining Sector",
    titleAr: "استكشاف واستخراج ثروات الأرض بمسؤولية",
    titleEn: "Responsible Exploration and Extraction",
    descriptionAr: "استخراج معادن بمعايير عالمية",
    descriptionEn: "Mineral extraction with international standards",
    iconEmoji: "⛏️",
    image: "https://images.unsplash.com/photo-1581092162562-40038f56543a?w=800&h=600&fit=crop",
    level: "primary",
    position: "center",
    color: "from-yellow-500 to-orange-600",
    subsectors: [
      {
        id: "mining-exploration",
        nameAr: "الاستكشاف والحفر",
        nameEn: "Exploration & Drilling",
        descriptionAr: "فتح المناجم واستكشاف الرواسب المعدنية",
        descriptionEn: "Opening mines and discovering mineral deposits",
        iconEmoji: "🔍",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      },
      {
        id: "mining-processing",
        nameAr: "معالجة الخامات",
        nameEn: "Ore Processing",
        descriptionAr: "معالجة جميع أنواع الخامات والمعادن",
        descriptionEn: "Processing all types of ores and minerals",
        iconEmoji: "⚙️",
        image: "https://images.unsplash.com/photo-1608889335941-33ac5f2c5b3f?w=600&h=400&fit=crop",
      },
      {
        id: "mining-remote-sensing",
        nameAr: "الاستشعار عن بعد",
        nameEn: "Remote Sensing",
        descriptionAr: "تقنيات الاستشعار عن بعد لتحديد الموارد",
        descriptionEn: "Remote sensing technology for resource identification",
        iconEmoji: "🛰️",
        image: "https://images.unsplash.com/photo-1611080626919-7cf88ca77471?w=600&h=400&fit=crop",
      },
      {
        id: "mining-gis",
        nameAr: "نظم المعلومات الجغرافية",
        nameEn: "GIS Systems",
        descriptionAr: "نظم GIS لرسم الخرائط والتحليل المكاني",
        descriptionEn: "GIS systems for mapping and spatial analysis",
        iconEmoji: "🗺️",
        image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "agriculture",
    nameAr: "قطاع الزراعة والثروة",
    nameEn: "Agriculture & Resources",
    titleAr: "ريادة الحلول الزراعية والثروة المستدامة",
    titleEn: "Leadership in Sustainable Agricultural Solutions",
    descriptionAr: "حلول زراعية وثروية متقدمة",
    descriptionEn: "Advanced agricultural and livestock solutions",
    iconEmoji: "🌾",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    level: "primary",
    position: "right",
    color: "from-green-500 to-emerald-600",
    subsectors: [
      {
        id: "agriculture-crops",
        nameAr: "المحاصيل الزراعية",
        nameEn: "Crops & Agriculture",
        descriptionAr: "إنتاج محاصيل زراعية بمعايير عالمية",
        descriptionEn: "High-quality crop production",
        iconEmoji: "🌾",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      },
      {
        id: "agriculture-livestock",
        nameAr: "الثروة الحيوانية",
        nameEn: "Livestock",
        descriptionAr: "تربية وتسمين حيواني بمعايير دولية",
        descriptionEn: "Advanced livestock breeding and fattening",
        iconEmoji: "🐂",
        image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",
      },
      {
        id: "agriculture-fisheries",
        nameAr: "الثروة السمكية",
        nameEn: "Fisheries & Aquaculture",
        descriptionAr: "الاستزراع السمكي المستدام والحديث",
        descriptionEn: "Sustainable fish farming and aquaculture",
        iconEmoji: "🐟",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
      },
      {
        id: "agriculture-forestry",
        nameAr: "الثروة الغابية",
        nameEn: "Forestry & Woods",
        descriptionAr: "إدارة واستدامة الموارد الغابية",
        descriptionEn: "Sustainable forest resource management",
        iconEmoji: "🌲",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "infrastructure",
    nameAr: "قطاع البنية التحتية",
    nameEn: "Infrastructure Sector",
    titleAr: "صياغة المستقبل عبر بنية تحتية صلبة",
    titleEn: "Shaping the Future with Solid Infrastructure",
    descriptionAr: "مشاريع بنية تحتية كبرى",
    descriptionEn: "Major infrastructure projects",
    iconEmoji: "🏗️",
    image: "https://images.unsplash.com/photo-1581092162562-40038f56543a?w=800&h=600&fit=crop",
    level: "primary",
    position: "left",
    color: "from-slate-600 to-slate-800",
    subsectors: [
      {
        id: "infrastructure-roads",
        nameAr: "الطرق والجسور",
        nameEn: "Roads & Bridges",
        descriptionAr: "بناء وصيانة الطرق والجسور الحديثة",
        descriptionEn: "Construction and maintenance of modern roads and bridges",
        iconEmoji: "🛣️",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      },
      {
        id: "infrastructure-buildings",
        nameAr: "المباني والمجمعات",
        nameEn: "Buildings & Compounds",
        descriptionAr: "بناء المباني التجارية والسكنية والمجمعات الصناعية",
        descriptionEn: "Commercial, residential, and industrial compound construction",
        iconEmoji: "🏢",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
      },
      {
        id: "infrastructure-energy",
        nameAr: "توليد الطاقة الكهرومائية",
        nameEn: "Hydroelectric Power",
        descriptionAr: "مشاريع توليد الطاقة الكهرومائية والطاقة المتجددة",
        descriptionEn: "Hydroelectric and renewable energy generation projects",
        iconEmoji: "⚡",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      },
      {
        id: "infrastructure-quarries",
        nameAr: "المحاجر والرمل",
        nameEn: "Quarries & Materials",
        descriptionAr: "استخراج مواد البناء والرمل والحجر",
        descriptionEn: "Extraction of construction materials, sand, and stone",
        iconEmoji: "⛰️",
        image: "https://images.unsplash.com/photo-1581092162562-40038f56543a?w=600&h=400&fit=crop",
      },
      {
        id: "infrastructure-trade",
        nameAr: "التجارة الدولية والتوريد",
        nameEn: "International Trade & Supply",
        descriptionAr: "توريد الاسمنت والمعادن والخامات عالميا",
        descriptionEn: "Global supply of cement, metals, and raw materials",
        iconEmoji: "🌐",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      },
    ],
  },
];

// Flatten version for quick lookup
export const allSubSectors: SubSector[] = hierarchicalSectors.flatMap(
  (sector) => sector.subsectors
);
