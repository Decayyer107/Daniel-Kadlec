import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={`inline-flex justify-center items-center gap-2 py-[clamp(12px,_2vw,_15px)] px-[clamp(36px,_6vw,_56px)] border-2 rounded-[10px] sm:rounded-[14px] font-secondary font-bold text-[clamp(15px,_2vw,_20px)] text-offblack dark:text-offwhite border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
