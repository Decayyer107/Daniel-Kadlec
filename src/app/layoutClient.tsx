"use client";
import { ThemeProvider } from "@/utils/ThemeContext";
import { LanguageProvider } from "@/utils/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldHideNav =
        /^\/(?!portfolio$)[^/]+$/.test(pathname) ||
        /^\/portfolio\/[^/]+$/.test(pathname);

    useScroll();

    return (
        <ThemeProvider>
            <LanguageProvider>
                {!shouldHideNav && <Navbar />}
                <main className="min-h-screen overflow-x-hidden antialiased">
                    {children}
                    {!shouldHideNav && <Footer />}
                </main>
            </LanguageProvider>
        </ThemeProvider>
    );
}
