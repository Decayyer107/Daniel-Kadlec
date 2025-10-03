import en from "./en";
import cz from "./cz";
import { Locale } from "@/i18n-config";

type Dict = typeof en;

const dictionaries: Record<Locale, Dict> = { en, cz };

export const getDictionary = (locale: Locale): Dict => dictionaries[locale];
export type Dictionary = Dict;
