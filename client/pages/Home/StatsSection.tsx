import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
}

const stats: StatItem[] = [
  {
    value: 20,
    suffix: '+',
    labelKey: 'yearsOfExperience',
  },
  {
    value: 500,
    suffix: '+',
    labelKey: 'employees',
  },
  {
    value: 10,
    suffix: '+',
    labelKey: 'countries',
  },
];

function AnimatedCounter({ stat }: { stat: StatItem & { label: string } }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timer: NodeJS.Timeout;
    if (count < stat.value) {
      timer = setTimeout(() => {
        setCount(Math.min(count + Math.ceil(stat.value / 20), stat.value));
      }, 30);
    }

    return () => clearTimeout(timer);
  }, [count, isVisible, stat.value]);

  return (
    <div
      ref={ref}
      className="text-center animate-count-up"
    >
      <div className="text-5xl md:text-6xl font-bold text-orchida-red mb-2">
        {count}
        <span className="text-4xl md:text-5xl ml-1">{stat.suffix}</span>
      </div>
      <p className="text-lg md:text-xl text-gray-600">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Impact by Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              stat={{ ...stat, labelKey: t(stat.labelKey as any) }}
            />
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Orchida International Company has established itself as a leading multi-sector conglomerate with a proven track record of excellence, innovation, and sustainable growth across agriculture, mining, international trade, livestock, fisheries, and infrastructure development.
          </p>
        </div>
      </div>
    </section>
  );
}
