import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/utils/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <LanguageProvider>
                <div className="bg-offwhite dark:bg-offblack transition-colors duration-500 antialiased">
                    <Navbar />
                    {children}
                </div>
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
