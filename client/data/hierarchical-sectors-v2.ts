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
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  iconEmoji: string;
  image: string;
  level: 'primary'; // المستوى الأساسي الهرمي
  position: 'apex' | 'right' | 'left'; // الموضع في الهرم
  color: string;
  bgColor: string;
  subsectors: SubSector[];
}

export const hierarchicalSectorsV2: MainSector[] = [
  // ========== MINING (TOP/APEX) ==========
  {
    id: 'mining',
    nameAr: 'قطاع التعدين',
    nameEn: 'Mining Sector',
    titleAr: 'ريادة قطاع التعدين من خلال خبرات متكاملة',
    titleEn: 'Leading Mining Excellence Through Integrated Expertise',
    descriptionAr:
      'ريادة قطاع التعدين من خلال خبرات متكاملة تشمل الاستكشاف، فتح المناجم، ومعالجة الخامات، باستخدام أحدث التقنيات لضمان الكفاءة والاستدامة.',
    descriptionEn:
      'Leading mining sector through integrated expertise spanning exploration, mine development, and ore processing, utilizing cutting-edge technologies for efficiency and sustainability.',
    shortDescriptionAr: 'استكشاف ومعالجة الثروات المعدنية بأحدث التقنيات',
    shortDescriptionEn: 'Exploration and processing of mineral wealth with advanced technologies',
    iconEmoji: '⛏️',
    image: 'https://images.unsplash.com/photo-1581092162562-40038f56543a?w=1200&h=800&fit=crop',
    level: 'primary',
    position: 'apex',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    subsectors: [
      {
        id: 'mining-surface-underground',
        nameAr: 'فتح المناجم (السطحي والجوفي)',
        nameEn: 'Surface & Underground Mining',
        descriptionAr:
          'متخصصون في تخطيط وتنفيذ عمليات التعدين السطحي والجوفي لمختلف أنواع المعادن بأعلى معايير الأمان والكفاءة.',
        descriptionEn:
          'Specialists in planning and executing surface and underground mining operations for various mineral types with highest safety and efficiency standards.',
        iconEmoji: '⛏️',
        image: 'https://images.unsplash.com/photo-1581092162562-40038f56543a?w=600&h=400&fit=crop',
      },
      {
        id: 'mining-ore-processing',
        nameAr: 'معالجة الخامات',
        nameEn: 'Ore Processing & Refining',
        descriptionAr:
          'حلول متقدمة لمعالجة وتنقية الخامات المعدنية (الذهب، النحاس، الحديد وغيرها) لزيادة قيمتها الاقتصادية والاستفادة القصوى من الموارد.',
        descriptionEn:
          'Advanced solutions for processing and refining mineral ores (gold, copper, iron, etc.) to maximize economic value and resource utilization.',
        iconEmoji: '⚙️',
        image: 'https://images.unsplash.com/photo-1608889335941-33ac5f2c5b3f?w=600&h=400&fit=crop',
      },
      {
        id: 'mining-remote-sensing-gis',
        nameAr: 'الاستشعار عن بعد ونظم المعلومات الجغرافية',
        nameEn: 'Remote Sensing & GIS',
        descriptionAr:
          'استخدام تقنيات الاستشعار عن بعد ونظم المعلومات الجغرافية لتحديد مواقع المعادن المحتملة وتقييم الجدوى الاقتصادية للمشاريع.',
        descriptionEn:
          'Utilizing remote sensing and GIS technologies to identify potential mineral locations and assess economic viability of mining projects.',
        iconEmoji: '🛰️',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf88ca77471?w=600&h=400&fit=crop',
      },
      {
        id: 'mining-project-management',
        nameAr: 'إدارة مشاريع التعدين',
        nameEn: 'Mining Project Management',
        descriptionAr:
          'الإشراف الكامل على مشاريع التعدين بدءًا من الدراسات الأولية وحتى مرحلة الإنتاج والإغلاق الآمن والمسؤول للمنجم.',
        descriptionEn:
          'Full oversight of mining projects from initial studies through production and responsible mine closure management.',
        iconEmoji: '📊',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
    ],
  },

  // ========== AGRICULTURE (RIGHT) ==========
  {
    id: 'agriculture',
    nameAr: 'قطاع الزراعة والثروة',
    nameEn: 'Agriculture & Livestock',
    titleAr: 'نساهم في تحقيق الأمن الغذائي وتنمية الموارد الطبيعية',
    titleEn: 'Contributing to Food Security and Natural Resource Development',
    descriptionAr:
      'نساهم في تحقيق الأمن الغذائي وتنمية الموارد الطبيعية عبر حلول مستدامة في قطاعات الزراعة والثروة الحيوانية والسمكية.',
    descriptionEn:
      'Contributing to food security and natural resource development through sustainable solutions in agriculture, livestock, and fisheries sectors.',
    shortDescriptionAr: 'حلول مستدامة لتحقيق الأمن الغذائي وتنمية الموارد',
    shortDescriptionEn: 'Sustainable solutions for food security and resource development',
    iconEmoji: '🌾',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=800&fit=crop',
    level: 'primary',
    position: 'right',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
    subsectors: [
      {
        id: 'agriculture-livestock',
        nameAr: 'الثروة الحيوانية',
        nameEn: 'Livestock Development',
        descriptionAr:
          'تطوير وإدارة مشاريع الإنتاج الحيواني، مع التركيز على تحسين السلالات وتوفير الرعاية الصحية والتغذية الأمثل لقطعان الماشية.',
        descriptionEn:
          'Development and management of livestock production projects, focusing on breed improvement and optimal health and nutrition care for cattle herds.',
        iconEmoji: '🐂',
        image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop',
      },
      {
        id: 'agriculture-fisheries',
        nameAr: 'الثروة السمكية',
        nameEn: 'Fisheries & Aquaculture',
        descriptionAr:
          'استثمار الموارد المائية من خلال مشاريع الاستزراع السمكي وتطوير مصايد الأسماك في المياه العذبة والمالحة بطرق مستدامة.',
        descriptionEn:
          'Investing in water resources through fish farming projects and developing fisheries in fresh and salt waters using sustainable methods.',
        iconEmoji: '🐟',
        image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
      },
      {
        id: 'agriculture-forestry-crops',
        nameAr: 'الثروة الغابية والمحاصيل',
        nameEn: 'Forestry & Crops',
        descriptionAr:
          'إدارة الموارد الغابية بشكل مستدام وتطوير زراعة المحاصيل الاستراتيجية التي تتناسب مع البيئة المحلية وتلبي احتياجات السوق.',
        descriptionEn:
          'Sustainable forest resource management and development of strategic crops suited to local environment and market needs.',
        iconEmoji: '🌲',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
      },
    ],
  },

  // ========== INFRASTRUCTURE (LEFT) ==========
  {
    id: 'infrastructure',
    nameAr: 'قطاع البنية التحتية',
    nameEn: 'Infrastructure Development',
    titleAr: 'بناء شرايين التنمية عبر مشاريع البنية التحتية الحيوية',
    titleEn: 'Building Development Arteries Through Vital Infrastructure Projects',
    descriptionAr:
      'بناء شرايين التنمية عبر تصميم وتنفيذ مشاريع البنية التحتية الحيوية التي تدعم النمو الاقتصادي والاجتماعي.',
    descriptionEn:
      'Building development arteries by designing and executing vital infrastructure projects that support economic and social growth.',
    shortDescriptionAr: 'نصمم وننفذ مشاريع البنية التحتية التي تدعم النمو',
    shortDescriptionEn: 'Designing and executing infrastructure projects that support growth',
    iconEmoji: '🏗️',
    image: 'https://images.unsplash.com/photo-1581092162562-40038f56543a?w=1200&h=800&fit=crop',
    level: 'primary',
    position: 'left',
    color: 'from-slate-600 to-slate-800',
    bgColor: 'bg-slate-50',
    subsectors: [
      {
        id: 'infrastructure-roads-bridges',
        nameAr: 'الطرق والجسور',
        nameEn: 'Roads & Bridges',
        descriptionAr:
          'إنشاء وتطوير شبكات الطرق والجسور التي تربط بين المدن والمناطق الصناعية لتسهيل حركة النقل والتجارة.',
        descriptionEn:
          'Creating and developing road and bridge networks connecting cities and industrial areas to facilitate transport and commerce.',
        iconEmoji: '🛣️',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      },
      {
        id: 'infrastructure-buildings-compounds',
        nameAr: 'المباني والمجمعات السكنية',
        nameEn: 'Buildings & Compounds',
        descriptionAr:
          'تنفيذ مشاريع إنشائية متكاملة تشمل المباني الإدارية والمجمعات السكنية الحديثة ومرافق الخدمات.',
        descriptionEn:
          'Executing integrated construction projects including administrative buildings, modern residential complexes, and service facilities.',
        iconEmoji: '🏢',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      },
      {
        id: 'infrastructure-energy-quarries',
        nameAr: 'الطاقة الكهرومائية والمحاجر',
        nameEn: 'Hydropower & Quarries',
        descriptionAr:
          'تطوير مشاريع توليد الطاقة الكهرومائية وإدارة المحاجر لتوفير المواد الخام اللازمة للبناء والصناعة.',
        descriptionEn:
          'Developing hydroelectric power generation projects and managing quarries to supply raw materials for construction and industry.',
        iconEmoji: '⚡',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
      {
        id: 'infrastructure-trade-logistics',
        nameAr: 'التجارة الدولية والخدمات اللوجستية',
        nameEn: 'International Trade & Logistics',
        descriptionAr:
          'توريد المواد الأساسية مثل الإسمنت وغيرها، وتقديم حلول لوجستية متكاملة للمشاريع الكبرى والشركات العملاقة.',
        descriptionEn:
          'Supplying essential materials like cement and offering integrated logistics solutions for major projects and large-scale companies.',
        iconEmoji: '🌐',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      },
    ],
  },
];
