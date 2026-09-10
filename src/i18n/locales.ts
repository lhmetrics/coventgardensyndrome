export const locales = ['en', 'es', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  ru: 'RU',
};

// BCP 47 tags used for Intl.DateTimeFormat / <html lang>.
export const localeTags: Record<Locale, string> = {
  en: 'en-GB',
  es: 'es-ES',
  ru: 'ru-RU',
};
