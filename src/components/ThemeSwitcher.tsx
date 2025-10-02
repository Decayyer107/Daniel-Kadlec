import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

type ThemeSwitcherProps = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export default function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
    let icon;

    if (theme === "dark") {
        icon = <MdSunny className="text-green-primary w-5 h-5" />;
    } else {
        icon = <FaMoon className="text-green-secondary w-5 h-5" />;
    }

    return (
        <button onClick={toggleTheme} className={'cursor-pointer'}>
            {icon}
        </button>
    );
}
