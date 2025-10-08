import {DetailedHTMLProps, InputHTMLAttributes} from "react";

interface CustomInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export default function Input({ className = "", ...props }: CustomInputProps) {
    return (
        <input
            {...props}
            className={`text bg-gray-200 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 placeholder-gray-400 p-4 rounded-[8px] transition-all duration-500 ${className}`}
        />
    );
}
