import "./globals.css";
import type { Metadata } from "next";
import LoadingOverlay from "../components/LoadingOverlay";
import ClientRoot from "./layoutClient";

export const metadata: Metadata = {
    title: "Your Site",
    description: "Your site description",
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
