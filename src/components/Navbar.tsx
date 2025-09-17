'use client'

import { useEffect, useState } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState<"light" | "dark" >("dark");

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
        <nav className="w-full h-16 flex items-center justify-between px-4 transition-colors duration-500 bg-gray-300 dark:bg-gray-950">
            <ul className="flex gap-4">
                <li><a className="text-black dark:text-white" href="/">Třeba Domů</a></li>
                <li><a className="text-black dark:text-white" href="#">Třeba Kontakt</a></li>
                <li><a className="text-black dark:text-white" href="#">Třeba o mě</a></li>
            </ul>

            <button
                className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors duration-300"
                onClick={toggleTheme}
            >
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </nav>
    );
}
