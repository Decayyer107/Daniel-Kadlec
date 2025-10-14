"use client";

import LanguageSwitcher from "@/components/LanguageSwicther";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import { useEffect } from "react";
import { useLanguage } from "@/utils/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from '@/utils/ThemeContext';
import Image from "next/image";

const LogoPrimary = "/logo/logomark-primary.svg";
const LogoSecondary = "/logo/logomark-secondary.svg";

interface HamburgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
    const { dict } = useLanguage();
    const pathname = usePathname();
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();

    const goHome = (hash?: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === "/") {
            if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
            else window.scrollTo({ top: 0, behavior: "smooth" });
            onClose();
        } else {
            router.push(hash ? `/#${hash}` : "/");
            onClose();
        }
    };

    const goPortfolio = (e?: React.MouseEvent) => {
        e?.preventDefault();
        if (pathname === "/portfolio") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/portfolio");
        }
        onClose();
    };

    useEffect(() => {
        if (pathname === "/" && window.location.hash) {
            const id = window.location.hash.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [pathname]);

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
                </div>            <ul className="flex flex-col items-center gap-8 font-secondary font-bold text-lg text">
                <li>
                    <Link href="/" onClick={(e) => goHome(undefined, e)}>{dict.nav.Home}</Link>
                </li>
                <li>
                    <Link href="/#about" onClick={(e) => goHome("about", e)}>{dict.nav.About}</Link>
                </li>
                <li>
                    <Link href="/portfolio" onClick={(e) => goPortfolio(e)}>{dict.nav.Portfolio}</Link>
                </li>
                <li>
                    <Link href="/#contact" onClick={(e) => goHome("contact", e)}>{dict.nav.Contact}</Link>
                </li>
            </ul>
                <div className={'flex justify-center items-center gap-4 mt-12 scale-[130%]'}>
                    <LanguageSwitcher/>
                    <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </nav>
    );
}
