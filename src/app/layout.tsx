import "./globals.css";
import type { Metadata } from "next";
import LoadingOverlay from "../components/LoadingOverlay";
import ClientRoot from "./layoutClient";

/**
 * Server layout: renders SEO content immediately.
 * The LoadingOverlay (client) covers the page and handles the crossfade
 * once fonts + critical images are ready (or after the 4s fallback).
 */
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
        {/* Keep body minimal; the overlay handles visuals */}
        <body>
        {/* Crossfade is handled entirely inside this client component */}
        <LoadingOverlay>
            {/* Your providers + layout tree are preserved exactly */}
            <ClientRoot>{children}</ClientRoot>
        </LoadingOverlay>
        </body>
        </html>
    );
}
