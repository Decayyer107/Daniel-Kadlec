import "./globals.css";
import ClientRoot from "./layoutClient";
import type { Metadata } from 'next'

export const metadata: Metadata  = {
    title: "Your Site",
    description: "Your site description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ClientRoot>{children}</ClientRoot>
        </body>
        </html>
    );
}
