'use client'

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const userPref = localStorage.theme;
        const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userPref === 'dark' || (!userPref && systemPref)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        setMounted(true);
    }, []);

    // Render nothing until theme is applied
    if (!mounted) return null;

    return <>{children}</>;
}