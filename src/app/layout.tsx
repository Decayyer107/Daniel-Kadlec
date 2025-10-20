import "./globals.css";
import ClientRoot from "./layoutClient";

export const metadata = {
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
