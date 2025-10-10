'use client'

import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '@/utils/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

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
            <Link href="/" onClick={(e) => goHome(undefined, e)}>
                <Image
                    src={theme === 'dark' ? LogoPrimary : LogoSecondary}
                    alt="Logo"
                    width={56}
                    height={56}
                    className="cursor-pointer"
                />
            </Link>
            <ul className="flex gap-12 font-secondary font-bold text-md">
                <li><Link className={'text'} href="/" onClick={(e) => goHome(undefined, e)}>{dict.nav.Home}</Link></li>
                <li><Link className={'text'} href="/#about" onClick={(e) => goHome('about', e)}>{dict.nav.About}</Link></li>
                <li><Link className={'text'} href="/portfolio" onClick={(e) => goPortfolio(e)}>{dict.nav.Portfolio}</Link></li>
                <li><Link className={'text'} href="/#contact" onClick={(e) => goHome('contact', e)}>{dict.nav.Contact}</Link></li>
            </ul>
            <div className="flex gap-4">
                <LanguageSwitcher />
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
}
