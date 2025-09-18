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
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors duration-300"
        >
            {lang === 'cz' ? 'CZ' : 'EN'}
        </button>
    );
}
