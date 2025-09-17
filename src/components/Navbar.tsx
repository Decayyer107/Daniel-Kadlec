'use client'
export default function Navbar() {
    return (
        <nav className="w-full h-16 flex items-center justify-between px-4 transition-colors duration-500 bg-gray-300 dark:bg-gray-900">
            <ul className="flex gap-4">
                <li><a className={'text-black dark:text-white'} href="#">Domů</a></li>
                <li><a className={'text-black dark:text-white'} href="#">Kontakt</a></li>
                <li><a className={'text-black dark:text-white'} href="#">O nás</a></li>
            </ul>

            <button
                className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-colors duration-300"
                onClick={() => {
                    document.documentElement.classList.toggle("dark");
                }}
            >
                Toggle
            </button>
        </nav>
    );
}
