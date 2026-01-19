import { Layout } from "@/components/Layout";
import { useTranslation } from "@/hooks/useTranslation";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-theme(height.20)-theme(height.64))] flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {description || t("pageInDevelopment")}
          </p>
          <div className="inline-block">
            <div className="w-16 h-16 bg-orchida-red/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-orchida-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-500">Tell us what you'd like to see here!</p>
        </div>
      </div>
    </Layout>
  );
}
