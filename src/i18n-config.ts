export const locales = ['en', 'cz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'cz';
