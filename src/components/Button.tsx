import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    link?: string;
}

export default function Button({ children, className, link }: ButtonProps) {
    return (
        <a
            href={link}
            className={`inline-flex justify-center items-center gap-2 py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            {children}
        </a>
    );
}

