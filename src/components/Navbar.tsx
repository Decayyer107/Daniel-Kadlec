'use client'

import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';
import { useLanguage } from '@/utils/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { TbMenuDeep } from "react-icons/tb";

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

export default function Navbar() {
    const { dict } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

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
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const id = window.location.hash.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);

    return (
        <header className={'section w-full fixed top-0 left-1/2 -translate-x-1/2 z-[99]'}>
            <nav
                className={`nav-section h-20 flex items-center justify-between transition-all duration-500 rounded-full
                    ${scrolled
                    ? 'w-[90%] px-[clamp(_18px,_6vw,_42px)] mt-4 border border-neutral-300/100 dark:border-neutral-700/100 bg-offwhite/70 dark:bg-offblack/70 backdrop-blur-sm shadow-md'
                    : 'w-full px-0 border border-neutral-300/0 dark:border-neutral-700/0 bg-transparent backdrop-blur-0 shadow-none'
                }`
                }
            >
                <Link href="/" onClick={(e) => goHome(undefined, e)}>
                    <Image width={56} height={56} src={theme === "dark" ? LogoPrimary : LogoSecondary} alt="Logo" className="cursor-pointer" priority unoptimized/>
                </Link>
                <TbMenuDeep className={'block md:hidden text w-8 h-8'}/>
                <ul className="gap-[clamp(_26px,_2vw,_48px)] font-secondary font-bold text-md hidden md:flex">
                    <li><Link className={'text'} href="/" onClick={(e) => goHome(undefined, e)}>{dict.nav.Home}</Link></li>
                    <li><Link className={'text'} href="/#about" onClick={(e) => goHome('about', e)}>{dict.nav.About}</Link></li>
                    <li><Link className={'text'} href="/portfolio" onClick={(e) => goPortfolio(e)}>{dict.nav.Portfolio}</Link></li>
                    <li><Link className={'text'} href="/#contact" onClick={(e) => goHome('contact', e)}>{dict.nav.Contact}</Link></li>
                </ul>
                <div className="gap-4 hidden md:flex">
                    <LanguageSwitcher />
                    <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                </div>
            </nav>
        </header>

    );
}
