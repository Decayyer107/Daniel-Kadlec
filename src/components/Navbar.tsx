'use client'

import { useEffect, useState } from "react";
import LanguageSwitcher from "../components/LanguageSwicther";
import { useLanguage } from '@/utils/LanguageContext';


export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark" >("dark");
    const { dict } = useLanguage();

    useEffect(() => {
        setTheme("dark");
        document.documentElement.classList.add("dark");
    }, []);

    const toggleTheme = () => {
        if (!theme) return;
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.remove("dark");
            setTheme("light");
        } else {
            root.classList.add("dark");
            setTheme("dark");
        }
    };

    if (!theme) return null;

    return (
        <nav className="w-full h-16 flex items-center justify-between px-4 transition-colors duration-500 bg-gray-300 dark:bg-gray-950 absolute top-0">
            <ul className="flex gap-4">
                <li><a className="text-black dark:text-white" href="#">{dict.nav.Home}</a></li>
                <li><a className="text-black dark:text-white" href="#">{dict.nav.Contact}</a></li>
                <li><a className="text-black dark:text-white" href="#">{dict.nav.About}</a></li>
            </ul>
            <div className={'flex gap-4'}>
                <LanguageSwitcher/>
                <button
                    className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors duration-300"
                    onClick={toggleTheme}
                >
                    {theme === "dark" ? "Light" : "Dark"}
                </button>
            </div>
        </nav>
    );
}
