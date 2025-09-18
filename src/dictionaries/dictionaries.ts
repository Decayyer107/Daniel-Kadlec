import en from './en.json';
import cz from './cz.json';
import { Locale } from '@/i18n-config';

const dictionaries: Record<Locale, any> = { en, cz };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export type Dictionary = typeof en;