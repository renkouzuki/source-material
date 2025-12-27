export type Locale = (typeof locales)[number];

export const locales = ['vi', 'en', 'cn', 'es', 'th', 'jp', 'kr'] as const;
export const defaultLocale: Locale = 'en';