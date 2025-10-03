'use client'

import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '@/utils/LanguageContext';

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

export default function Navbar() {
    const { dict } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 section h-20 flex items-center justify-between transition-colors duration-500 z-[99]">
            <img src={theme === "dark" ? LogoPrimary : LogoSecondary} alt="Logo" className="w-14 cursor-pointer" />
            <ul className="flex gap-12 font-secondary font-bold text-md">
                <li><a className="text" href="#">{dict.nav.Home}</a></li>
                <li><a className="text" href="#">{dict.nav.About}</a></li>
                <li><a className="text" href="#">{dict.nav.Portfolio}</a></li>
                <li><a className="text" href="#">{dict.nav.Contact}</a></li>
            </ul>
            <div className="flex gap-4">
                <LanguageSwitcher />
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
}
