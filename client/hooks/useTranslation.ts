import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key as any] || '';
  };

  return { t, language };
}
