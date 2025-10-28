"use client";

import LanguageSwitcher from "@/components/LanguageSwicther";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { IoIosClose } from "react-icons/io";
import { useTheme } from '@/utils/ThemeContext';
import Image from "next/image";
import NavLinks from "@/components/NavLinks";

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

interface HamburgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav
            className={`fixed left-0 top-0 w-screen h-screen bg-white/90 dark:bg-black/90 backdrop-blur-xs
        z-[200] transition-all duration-[500ms]
        ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
        >
            <IoIosClose className="text text-[64px] cursor-pointer absolute top-6 right-6" onClick={onClose} />
            <div className={'flex flex-col justify-center items-center h-full -mt-7'}>
                <div className="flex gap-2 justify-center items-center mb-8">
                    <div className="relative w-20 h-20">
                        <Image
                            src={theme === "dark" ? LogoPrimary : LogoSecondary}
                            alt="Logo"
                            fill
                            className="object-contain cursor-pointer"
                            priority
                            unoptimized
                        />
                    </div>
                    <span className="text font-primary font-bold text-4xl">Daniel <span className="text-green">Kadlec</span></span>
                </div>
                <NavLinks className="!flex !flex-col !text-center" onLinkClick={onClose} />
                <div className={'flex justify-center items-center gap-4 mt-12 scale-[130%]'}>
                    <LanguageSwitcher/>
                    <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </nav>
    );
}
