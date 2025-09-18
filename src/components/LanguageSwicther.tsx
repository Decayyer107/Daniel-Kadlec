'use client';
import { useLanguage } from '@/utils/LanguageContext';
import { locales } from '@/i18n-config';

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    console.log("Current lang in switcher:", lang);

    return (
        <div className={'bg-gray-200 dark:bg-gray-400 transition duration-500 flex justify-center items-center'}>
            {locales.map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{ fontWeight: l === lang ? 'bold' : 'normal', marginRight: 8 }}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
