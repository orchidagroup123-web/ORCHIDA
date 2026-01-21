export interface SubSpecialization {
  arName: string;
  enName: string;
  arDesc: string;
  enDesc: string;
  emoji: string;
  image: string;
}

export interface Sector {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  iconEmoji: string;
  image: string;
  color: string;
  fullContentAr: string;
  fullContentEn: string;
  specializations?: SubSpecialization[];
}

export const sectorsData: Sector[] = [
  {
    id: "agricultural-health",
    nameAr: "قطاع الزراعة والثروة",
    nameEn: "Agriculture & Livestock",
    titleAr: "نساهم في تحقيق الأمن الغذائي وتنمية الموارد الطبيعية",
    titleEn: "Contributing to Food Security and Natural Resource Development",
    descriptionAr: "حلول مستدامة في الزراعة والثروة الحيوانية والسمكية",
    descriptionEn:
      "Sustainable solutions in agriculture, livestock, and fisheries",
    iconEmoji: "🌾",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
    color: "from-green-500 to-green-700",
    fullContentAr: `نحن في مجموعة أوركيد نؤمن بأن الأمن الغذائي يبدأ من حماية الأرض والمحصول. يتخصص قطاعنا في توفير أحدث التقنيات الوقائية، من مبيدات آمنة وأسمدة حيوية ومغذيات متطورة، مصممة لرفع كفاءة الإنتاج الزراعي مع الحفاظ على التوازن البيئي. نحن شريك المزارع والمربي والصياد في مواجهة التحديات وضمان منتجات عالية الجودة.`,
    fullContentEn: `We at Orchida Group believe that food security begins with protecting the land and crops. Our sector specializes in providing the latest preventive technologies, from safe pesticides to bio-fertilizers and advanced nutrients, designed to enhance agricultural production efficiency while preserving environmental balance. We are the farmer's, livestock breeder's, and fisherman's partner in facing challenges and ensuring high-quality products.`,
    specializations: [
      {
        arName: "الثروة الحيوانية",
        enName: "Livestock Development",
        arDesc: "تطوير وإدارة مشاريع الإنتاج الحيواني مع تحسين السلالات",
        enDesc: "Development and management of livestock production projects",
        emoji: "🐂",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
      },
      {
        arName: "الثروة السمكية",
        enName: "Fisheries & Aquaculture",
        arDesc: "الاستزراع السمكي المستدام في المياه العذبة والمالحة",
        enDesc: "Sustainable fish farming in fresh and salt waters",
        emoji: "🐟",
        image:
          "https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&h=600&fit=crop",
      },
      {
        arName: "الثروة الغابية والمحاصيل",
        enName: "Forestry & Crops",
        arDesc: "إدارة الموارد الغابية وتطوير المحاصيل الاستراتيجية",
        enDesc: "Forest resource management and strategic crop development",
        emoji: "🌲",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      },
    ],
  },
  {
    id: "mining",
    nameAr: "قطاع التعدين",
    nameEn: "Mining Sector",
    titleAr: "استكشاف واستخراج ثروات الأرض بمسؤولية",
    titleEn: "Responsible Exploration and Extraction of Mineral Wealth",
    descriptionAr:
      "ريادة قطاع التعدين من خلال خبرات متكاملة في الاستكشاف وفتح المناجم ومعالجة الخامات",
    descriptionEn:
      "Leading mining sector through integrated expertise in exploration, mine development, and ore processing",
    iconEmoji: "⛏️",
    image:
      "https://images.unsplash.com/photo-1581092162562-40038f56543a?w=600&h=400&fit=crop",
    color: "from-yellow-600 to-orange-700",
    fullContentAr: `تعتبر مجموعة أوركيد ركيزة أساسية في قطاع التعدين، حيث نقوم باستخراج وتجهيز الخامات المعدنية وفق أعلى المعايير العالمية. نعتمد على تكنولوجيا تنقيب حديثة وفرق عمل خبيرة لضمان الاستفادة القصوى من الموارد الطبيعية، مع الالتزام الصارم بمعايير الاستدامة البيئية والسلامة المهنية، لرفد الصناعات المحلية والعالمية بالمواد الخام الأساسية.`,
    fullContentEn: `Orchida Group is a cornerstone in the mining sector, extracting and processing mineral ores according to the highest international standards. We rely on modern exploration technology and expert teams to ensure maximum utilization of natural resources, while strictly adhering to environmental sustainability and occupational safety standards, supplying local and global industries with essential raw materials.`,
    specializations: [
      {
        arName: "فتح المناجم (السطحي والجوفي)",
        enName: "Surface & Underground Mining",
        arDesc:
          "متخصصون في تخطيط وتنفيذ عمليات التعدين السطحي والجوفي لمختلف أنواع المعادن",
        enDesc:
          "Specialists in surface and underground mining operations for various mineral types",
        emoji: "⛏️",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe2a45f0e208241259045fa13f2fac261?format=webp&width=800&height=1200",
      },
      {
        arName: "معالجة الخامات",
        enName: "Ore Processing",
        arDesc: "حلول متقدمة لمعالجة وتنقية الخامات المعدنية",
        enDesc: "Advanced solutions for processing and refining mineral ores",
        emoji: "⚙️",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fbeb933cb108e426987c5d3755fc00bb8?format=webp&width=800&height=1200",
      },
      {
        arName: "الاستشعار عن بعد و GIS",
        enName: "Remote Sensing & GIS",
        arDesc: "تحديد مواقع المعادن وتقييم الجدوى الاقتصادية",
        enDesc:
          "Identifying mineral locations and assessing economic viability",
        emoji: "🛰️",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Ff924ad21ae31466a80707664b04ed109?format=webp&width=800&height=1200",
      },
      {
        arName: "إدارة مشاريع التعدين",
        enName: "Project Management",
        arDesc: "الإشراف الكامل على مشاريع التعدين من البداية للإغلاق",
        enDesc: "Full oversight of mining projects from start to closure",
        emoji: "📊",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2F96be6901fb834da7beb88d346db753d1?format=webp&width=800&height=1200",
      },
    ],
  },
  {
    id: "international-trade",
    nameAr: "قطاع التجارة الدولية",
    nameEn: "International Trade",
    titleAr: "جسركم الموثوق للأسواق العالمية",
    titleEn: "Your Trusted Bridge to Global Markets",
    descriptionAr: "خدمات لوجستية وتجارية متكاملة",
    descriptionEn: "Integrated logistics and trade services",
    iconEmoji: "🌐",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    color: "from-blue-600 to-blue-800",
    fullContentAr: `بشبكة علاقات تمتد عبر القارات، تقود مجموعة أوركيد عمليات التجارة الدولية والخدمات اللوجستية بكفاءة متناهية. نحن نتخصص في سلاسل التوريد المتكاملة، وتسهيل حركة البضائع بين المنتجين والمستهلكين في مختلف أنحاء العالم، مع التركيز على الجودة، السرعة، والشفافية في التعاملات التجارية العابرة للحدود.`,
    fullContentEn: `With a network of relationships spanning continents, Orchida Group leads international trade operations and logistics services with exceptional efficiency. We specialize in integrated supply chains, facilitating the movement of goods between producers and consumers worldwide, focusing on quality, speed, and transparency in cross-border commercial transactions.`,
  },
  {
    id: "livestock",
    nameAr: "قطاع الثروة الحيوانية",
    nameEn: "Livestock",
    titleAr: "التميز في الإنتاج الحيواني والأمن الغذائي",
    titleEn: "Excellence in Livestock Production",
    descriptionAr: "إنتاج حيواني متطور وآمن",
    descriptionEn: "Advanced and safe animal production",
    iconEmoji: "🐂",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",
    color: "from-orange-600 to-red-700",
    fullContentAr: `نعمل في قطاع الثروة الحيوانية على بناء منظومة إنتاجية متكاملة تشمل التربية، التسمين، والرعاية البيطرية المتقدمة. نطبق معايير صارمة في التغذية والصحة لضمان تقديم منتجات حيوانية (لحوم وألبان) تتوافق مع أرقى معايير الجودة الغذائية، مساهمين بذلك في دعم الاكتفاء الذاتي وتعزيز الصحة العامة.`,
    fullContentEn: `In the livestock sector, we work to build an integrated production system encompassing breeding, fattening, and advanced veterinary care. We apply strict standards in nutrition and health to ensure animal products (meat and dairy) that meet the highest food quality standards, contributing to self-sufficiency and promoting public health.`,
  },
  {
    id: "fisheries",
    nameAr: "قطاع الثروة السمكية",
    nameEn: "Fisheries & Aquaculture",
    titleAr: "استدامة الموارد البحرية والذكاء المائي",
    titleEn: "Sustainability of Marine Resources",
    descriptionAr: "استزراع سمكي مستدام وذكي",
    descriptionEn: "Sustainable and intelligent fish farming",
    iconEmoji: "🐟",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop",
    color: "from-cyan-600 to-blue-700",
    fullContentAr: `تستثمر مجموعة أوركيد في مستقبل البروتين البحري من خلال مشاريع الاستزراع السمكي المتطورة وإدارة المصايد الطبيعية. نستخدم أنظمة مراقبة وتقنيات تدوير مياه ذكية لضمان إنتاج سمكي مستدام وعالي القيمة الغذائية، مع الحفاظ على النظم البيئية المائية وحمايتها للأجيال القادمة.`,
    fullContentEn: `Orchida Group invests in the future of marine protein through advanced aquaculture projects and natural fisheries management. We use monitoring systems and smart water recycling technologies to ensure sustainable and highly nutritious fish production, while preserving and protecting aquatic ecosystems for future generations.`,
  },
  {
    id: "infrastructure",
    nameAr: "قطاع البنية التحتية",
    nameEn: "Infrastructure Development",
    titleAr: "بناء شرايين التنمية عبر مشاريع البنية التحتية الحيوية",
    titleEn:
      "Building Development Arteries Through Vital Infrastructure Projects",
    descriptionAr:
      "تصميم وتنفيذ مشاريع البنية التحتية التي تدعم النمو الاقتصادي والاجتماعي",
    descriptionEn:
      "Designing and executing infrastructure projects that support economic and social growth",
    iconEmoji: "🏗️",
    image:
      "https://images.unsplash.com/photo-1581092162562-40038f56543a?w=600&h=400&fit=crop",
    color: "from-gray-700 to-slate-900",
    fullContentAr: `نحن في أوركيد نبني الأساس الذي تقوم عليه التنمية الاقتصادية. يختص قطاع البنية التحتية لدينا بتنفيذ المشاريع الاستراتيجية الكبرى، من شبكات الطرق والجسور إلى مرافق الطاقة والمياه. نجمع بين الهندسة المبتكرة والإدارة الاحترافية للمشاريع لتحويل الرؤى العمرانية إلى واقع ملموس يدعم النمو الحضري والصناعي.`,
    fullContentEn: `We at Orchida build the foundation upon which economic development stands. Our Infrastructure sector specializes in executing major strategic projects, from road and bridge networks to energy and water facilities. We combine innovative engineering and professional project management to transform urban visions into tangible reality supporting urban and industrial growth.`,
    specializations: [
      {
        arName: "الطرق والجسور",
        enName: "Roads & Bridges",
        arDesc: "إنشاء وتطوير شبكات الطرق والجسور التي تربط المدن",
        enDesc:
          "Creating and developing road and bridge networks connecting cities",
        emoji: "🛣️",
        image:
          "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800&h=600&fit=crop",
      },
      {
        arName: "المباني والمجمعات",
        enName: "Buildings & Compounds",
        arDesc: "تنفيذ مشاريع إنشائية متكاملة للمباني الإدارية والسكنية",
        enDesc:
          "Executing integrated construction projects for buildings and residential compounds",
        emoji: "🏢",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      },
      {
        arName: "الطاقة الكهرومائية والمحاجر",
        enName: "Hydropower & Quarries",
        arDesc: "توليد الطاقة الكهرومائية وإدارة المحاجر",
        enDesc: "Hydroelectric power generation and quarry management",
        emoji: "⚡",
        image:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&h=600&fit=crop",
      },
      {
        arName: "التجارة الدولية والخدمات اللوجستية",
        enName: "International Trade & Logistics",
        arDesc: "توريد المواد الأساسية وتقديم حلول لوجستية متكاملة",
        enDesc:
          "Supplying essential materials and offering integrated logistics solutions",
        emoji: "🌐",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop",
      },
    ],
  },
];
