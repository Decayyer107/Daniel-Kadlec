import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

type ThemeSwitcherProps = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export default function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
    let icon;

    if (theme === "dark") {
        icon = <MdSunny className="text-green-primary text-[clamp(_16px,_2vw,_20px)]" />;
    } else {
        icon = <FaMoon className="text-green-secondary text-[clamp(_16px,_2vw,_20px)]" />;
    }

    return (
        <button onClick={toggleTheme} className={'cursor-pointer'}>
            {icon}
        </button>
    );
}
