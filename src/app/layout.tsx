import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/utils/ThemeProvider";
import { LanguageProvider } from "@/utils/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <LanguageProvider>
                <div className="bg-offwhite dark:bg-offblack transition-all duration-500 antialiased min-h-screen">
                    <Navbar />
                    {children}
                </div>
            </LanguageProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
