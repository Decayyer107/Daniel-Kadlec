'use client'

import { useTheme } from '@/utils/ThemeContext';
import LanguageSwitcher from './LanguageSwicther';
import ThemeSwitcher from './ThemeSwitcher';

import { useLanguage } from '@/utils/LanguageContext';
import HopperElement from "@/components/HopperElement";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";


export default function Footer() {
    const { dict } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="section ">
            <div className={'bg-gray-200 dark:bg-[#0C0C0E] border-2 shadow-xl border-gray-100 dark:border-gray-900 w-full h-72 rounded-[24px] mb-8 px-12 transition-all duration-500 flex justify-between items-center'}>
                <div className={'scale-y-[-1]'}>
                    <HopperElement/>
                </div>
                <div className={'flex flex-col justify-center items-center gap-6'}>
                    <div className="flex gap-2 justify-center items-center">
                        <Image width={56} height={56} src={theme === "dark" ? LogoPrimary : LogoSecondary} alt="Logo" className="cursor-pointer" priority unoptimized/>
                        <span className="text font-primary font-bold text-3xl">Daniel <span className="text-green">Kadlec</span></span>
                    </div>
                    <div>
                        <ul className="flex gap-12 font-secondary font-bold text-md">
                            <li><Link className="text" href="#">{dict.nav.Home}</Link></li>
                            <li><Link className="text" href="#">{dict.nav.About}</Link></li>
                            <li><Link className="text" href="#">{dict.nav.Portfolio}</Link></li>
                            <li><Link className="text" href="#">{dict.nav.Contact}</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-8 justify-center items-center">
                        <LanguageSwitcher />
                        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div>
                <span className="flex gap-6 items-center">
                    <SocialIcons isSmall={true}/>
                </span>
                    </div>
                </div>
                <div className={'scale-x-[-1]'}>
                    <HopperElement/>
                </div>
            </div>
        </footer>
    );
}
