'use client'

import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '@/utils/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

export default function Navbar() {
    const { dict } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    const goHome = (hash?: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === '/') {
            if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(hash ? `/#${hash}` : '/');
        }
    };

    const goPortfolio = (e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === '/portfolio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/portfolio');
        }
    };

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const id = window.location.hash.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 section h-20 flex items-center justify-between transition-colors duration-500 z-[99]">
            <a href="/" onClick={(e) => goHome(undefined, e)}>
                <img
                    src={theme === 'dark' ? LogoPrimary : LogoSecondary}
                    alt="Logo"
                    className="w-14 cursor-pointer"
                />
            </a>
            <ul className="flex gap-12 font-secondary font-bold text-md">
                <li><a className={'text'} href="/" onClick={(e) => goHome(undefined, e)}>{dict.nav.Home}</a></li>
                <li><a className={'text'} href="/#about" onClick={(e) => goHome('about', e)}>{dict.nav.About}</a></li>
                <li><a className={'text'} href="/portfolio" onClick={(e) => goPortfolio(e)}>{dict.nav.Portfolio}</a></li>
                <li><a className={'text'} href="/#contact" onClick={(e) => goHome('contact', e)}>{dict.nav.Contact}</a></li>
            </ul>
            <div className="flex gap-4">
                <LanguageSwitcher />
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
}
