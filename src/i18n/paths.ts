import { defaultLocale, type Locale } from './locales';

// English lives at the site root; other locales are prefixed (/es/, /ru/).
const prefix = (locale: Locale) => (locale === defaultLocale ? '' : `/${locale}`);

export const getHomePath = (locale: Locale) => `${prefix(locale)}/`;

export const getStoryPath = (locale: Locale, slug: string) => `${prefix(locale)}/stories/${slug}/`;

export const getSectionPath = (locale: Locale, id: string) => `${prefix(locale)}/sections/${id}/`;
