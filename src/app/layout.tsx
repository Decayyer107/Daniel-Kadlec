import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body className="transition-colors duration-500 antialiased">
        <ThemeProvider>
            <Navbar/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
