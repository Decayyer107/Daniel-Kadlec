"use client";

import { ReactNode, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
    const [isLight, setIsLight] = useState(false); // dark mode by default

    return (
        <html className={isLight ? "" : "dark"}>
        <body className="transition-colors duration-500 antialiased">
        {children}

        <button
            className="fixed top-4 right-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors duration-300"
            onClick={() => setIsLight(!isLight)}
        >
            Toggle Light Mode
        </button>
        </body>
        </html>
    );
}
