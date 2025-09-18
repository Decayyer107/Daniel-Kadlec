'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { defaultLocale, type Locale } from '@/i18n-config';
import { getDictionary, type Dictionary } from '@/dictionaries/dictionaries';

type LanguageContextType = {
    lang: Locale;
    dict: Dictionary;
    setLang: (l: Locale) => void;
};

const getCookieLang = (): Locale => {
    const match = document.cookie.match(/(^| )locale=([^;]+)/);
    return match ? (match[2] as Locale) : defaultLocale;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Locale>(getCookieLang());
    const dict = getDictionary(lang);
    console.log("Dictionary for", lang, dict);

    const setLang = (newLang: Locale) => {
        setLangState(newLang);
        document.cookie = `locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}`;
        console.log("Cookie set:", document.cookie);
    };

    return (
        <LanguageContext.Provider value={{ lang, dict, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
