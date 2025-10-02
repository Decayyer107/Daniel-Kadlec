'use client';
import { useLanguage } from '@/utils/LanguageContext';

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    const toggleLang = () => {
        setLang(lang === 'cz' ? 'en' : 'cz');
    };

    return (
        <button
            onClick={toggleLang}
            className="font-secondary font-bold dark:text-offwhite transition-colors duration-300 cursor-pointer"
        >
            {lang === 'cz' ? 'CZ' : 'EN'}
        </button>
    );
}
