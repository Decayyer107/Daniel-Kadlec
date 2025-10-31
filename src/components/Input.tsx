import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input({className = "", ...props}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            {...props}
            className={`text bg-gray-200 dark:bg-gray-900 border-2 placeholder-gray-400 p-4 rounded-[8px] transition-all duration-500 ${className}`}
        />
    );
}
