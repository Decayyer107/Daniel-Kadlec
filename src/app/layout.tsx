import "./globals.css";
import type { Metadata } from "next";
import LoadingOverlay from "../components/LoadingOverlay";
import ClientRoot from "./layoutClient";

export const metadata: Metadata = {
    title: "Daniel Kadlec",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje.",
    icons: {
        icon: '/icon.svg',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <LoadingOverlay>
            <ClientRoot>{children}</ClientRoot>
        </LoadingOverlay>
        </body>
        </html>
    );
}
