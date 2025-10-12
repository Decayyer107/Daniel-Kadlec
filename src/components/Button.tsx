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
            className={`inline-flex justify-center items-center gap-2 py-[clamp(8px,_3vw,_15px)] px-[clamp(24px,_6vw,_56px)] border-2 rounded-[10px] sm:rounded-[14px] font-secondary font-bold text-[clamp(13px,_2.5vw,_20px)] text-offblack dark:text-offwhite border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            {children}
        </a>
    );
}

