import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Sector {
  id: string;
  titleKey: string;
  descKey: string;
  icon: string;
  color: string;
  image: string;
}

const sectors: Sector[] = [
  {
    id: 'agricultural-health',
    titleKey: 'agriculturalHealth',
    descKey: 'agriculturalHealthDesc',
    icon: '🌾',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=400&fit=crop',
  },
  {
    id: 'mining',
    titleKey: 'mining',
    descKey: 'miningDesc',
    icon: '⛏️',
    color: 'bg-yellow-600',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
  },
  {
    id: 'international-trade',
    titleKey: 'internationalTrade',
    descKey: 'tradingDesc',
    icon: '🌐',
    color: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
  },
  {
    id: 'livestock',
    titleKey: 'livestock',
    descKey: 'livestockDesc',
    icon: '🐂',
    color: 'bg-orange-600',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop',
  },
  {
    id: 'fisheries',
    titleKey: 'fisheries',
    descKey: 'fisheriesDesc',
    icon: '🐟',
    color: 'bg-cyan-600',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=400&fit=crop',
  },
  {
    id: 'infrastructure',
    titleKey: 'infrastructure',
    descKey: 'infrastructureDesc',
    icon: '🏗️',
    color: 'bg-gray-700',
    image: 'https://images.unsplash.com/photo-1581092162562-40038f56543a?w=400&h=400&fit=crop',
  },
];

export function SectorsSection() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="sectors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('sectors')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our six major business sectors and discover how we drive innovation and growth
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector) => (
            <Link
              key={sector.id}
              to={`/sector/${sector.id}`}
              className="group"
            >
              <div
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredId(sector.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sector.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Front Side - Icon & Title */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                    hoveredId === sector.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="text-6xl mb-4">{sector.icon}</div>
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {t(sector.titleKey as any)}
                  </h3>
                </div>

                {/* Back Side - Description */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-orchida-red to-orchida-green p-6 transition-opacity duration-300 ${
                    hoveredId === sector.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-white text-center font-semibold mb-4">
                    {t(sector.descKey as any)}
                  </p>
                  <span className="inline-block px-4 py-2 bg-white text-orchida-red font-bold rounded-lg">
                    {t('readMore')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
