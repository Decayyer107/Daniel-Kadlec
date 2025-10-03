'use client'

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        const userPref = localStorage.theme as Theme | undefined;
        const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (userPref) {
            setTheme(userPref);
            html.classList.toggle('dark', userPref === 'dark');
        } else {
            const initial = systemPref ? 'dark' : 'light';
            setTheme(initial);
            html.classList.toggle('dark', initial === 'dark');
        }

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.theme = newTheme;
    };

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};
