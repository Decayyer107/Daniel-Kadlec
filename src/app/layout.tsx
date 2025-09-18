import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/utils/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwicther";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="transition-colors duration-500 antialiased">
        <ThemeProvider>
            <LanguageProvider>
                <LanguageSwitcher />
                <Navbar />
                {children}
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
