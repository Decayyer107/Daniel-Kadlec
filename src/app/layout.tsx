import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body className="transition-colors duration-500 antialiased">
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
