import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <a
            href="#"
            className={`inline-flex justify-center items-center gap-2 py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite transition-all ${className}`}
        >
            {children}
        </a>
    );
}

