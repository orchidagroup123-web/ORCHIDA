import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E31E24;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23006837;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='95' fill='url(%23grad1)' opacity='0.1'/%3E%3Cpath d='M100 40 L140 120 L100 160 L60 120 Z' fill='%23E31E24'/%3E%3Cpath d='M80 80 L100 120 L120 80 Z' fill='%23006837'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23FFD700'/%3E%3C/svg%3E"
                alt="Orchida"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">ORCHIDA</span>
            </div>
            <p className="text-gray-400 text-sm">
              Orchida International Company - Multi-sector conglomerate shaping the future across six major industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('home')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-orchida-red transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orchida-red transition-colors">{t('about')}</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-orchida-red transition-colors">{t('sectors')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('media')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/media" className="text-gray-400 hover:text-orchida-red transition-colors">{t('media')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orchida-red transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{t('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                <span className="font-semibold text-white block mb-1">{t('headOffice')}</span>
                {t('portSudan')}
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white block mb-1">{t('branch')}</span>
                {t('atbara')}
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">{t('phone')}:</span> +249 123 722 286
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-white">{t('email')}:</span><br />
                <a href="mailto:info@orchidagroup.com" className="hover:text-orchida-red transition-colors">
                  info@orchidagroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Orchida International Company. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
