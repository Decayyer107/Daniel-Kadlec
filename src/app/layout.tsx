// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/utils/ThemeContext"; // <- updated import
import { LanguageProvider } from "@/utils/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <LanguageProvider>
                <div className="bg-offwhite dark:bg-offblack transition-all duration-500 antialiased min-h-screen z-0 overflow-x-hidden">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
