import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "react-router-dom";

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
            <div className="mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fce04605038104603b965d31c7c18e8db%2Fe6b25b3b6acc427391d5fe4bf3607aef?format=webp&width=800"
                alt="Orchida Group"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Orchida International Company - Multi-sector conglomerate shaping
              the future across six major industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-orchida-red transition-colors font-medium"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orchida-red transition-colors font-medium"
                >
                  {t("about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/media"
                  className="text-gray-400 hover:text-orchida-red transition-colors font-medium"
                >
                  {t("media")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orchida-red transition-colors font-medium"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300 block mb-1">
                  {t("headOffice")}
                </span>
                <span className="text-xs">{t("portSudan")}</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300 block mb-1">
                  {t("branch")}
                </span>
                <span className="text-xs">{t("atbara")}</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">
                  {t("phone")}:
                </span>
                <span className="block text-xs">+249 123 722 286</span>
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">
                  {t("email")}:
                </span>
                <a
                  href="mailto:info@orchidagroup.com"
                  className="block text-xs hover:text-orchida-red transition-colors"
                >
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
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Orchida International Company
            </span>
            . {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
