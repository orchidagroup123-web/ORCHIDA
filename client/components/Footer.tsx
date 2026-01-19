import { useTranslation } from '@/hooks/useTranslation';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-orchida-red via-orchida-green to-orchida-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E31E24;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23006837;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='95' fill='url(%23grad1)' opacity='0.1'/%3E%3Cpath d='M100 40 L140 120 L100 160 L60 120 Z' fill='%23E31E24'/%3E%3Cpath d='M80 80 L100 120 L120 80 Z' fill='%23006837'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23FFD700'/%3E%3C/svg%3E"
                alt="Orchida"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orchida-red to-orchida-green bg-clip-text text-transparent">ORCHIDA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Orchida International Company - Multi-sector conglomerate shaping the future across six major industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-orchida-red transition-colors font-medium">{t('home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orchida-red transition-colors font-medium">{t('about')}</Link></li>
              <li><Link to="/sectors" className="text-gray-400 hover:text-orchida-red transition-colors font-medium">{t('sectors')}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/media" className="text-gray-400 hover:text-orchida-red transition-colors font-medium">{t('media')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orchida-red transition-colors font-medium">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300 block mb-1">{t('headOffice')}</span>
                <span className="text-xs">{t('portSudan')}</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300 block mb-1">{t('branch')}</span>
                <span className="text-xs">{t('atbara')}</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">{t('phone')}:</span>
                <span className="block text-xs">+249 123 722 286</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">{t('email')}:</span>
                <a href="mailto:info@orchidagroup.com" className="block text-xs hover:text-orchida-red transition-colors">
                  info@orchidagroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} <span className="text-white font-semibold">Orchida International Company</span>. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}
