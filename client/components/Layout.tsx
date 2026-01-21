import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTranslation } from "@/hooks/useTranslation";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/249999900048"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 0C5.372 0 0 5.084 0 11.353c0 2.387.844 4.594 2.26 6.345L.89 23.535a.5.5 0 00.652.63l5.68-1.946A11.9 11.9 0 0012 22.706c6.628 0 12-5.084 12-11.353C24 5.084 18.628 0 12 0zm5.787 16.52c-.24.678-1.186 1.243-1.946 1.408-.52.112-1.199.203-3.49-.748-2.934-1.212-4.813-4.252-4.957-4.45-.145-.196-1.183-1.577-1.183-3.005 0-1.43.748-2.136 1.012-2.423.264-.287.58-.359.773-.359.194 0 .387.002.557.01.18.008.42-.068.657.502.24.582.814 2.012.886 2.156.072.144.12.311.024.507-.096.196-.144.311-.288.478-.144.167-.304.374-.433.503-.144.143-.294.298-.127.585.167.287.74 1.22 1.59 1.976 1.092.97 2.009 1.273 2.296 1.42.287.144.457.12.624-.072.167-.191.718-.84.909-1.129.191-.287.383-.239.647-.143.264.096 1.673.79 1.958.934.287.144.48.215.552.335.072.12.072.695-.168 1.373z" />
        </svg>
        <span className="font-semibold text-sm">{t("whatsappChat")}</span>
      </a>
    </div>
  );
}
