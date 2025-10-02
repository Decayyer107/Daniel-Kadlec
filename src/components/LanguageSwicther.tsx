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
            className="p-2 bg-gray-100 dark:bg-gray-900 text-offblack dark:text-offwhite rounded-md transition-colors duration-300"
        >
            {lang === 'cz' ? 'CZ' : 'EN'}
        </button>
    );
}
