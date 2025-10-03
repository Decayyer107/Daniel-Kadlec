import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <a
            href="#"
            className="py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite"
        >
            {children}
        </a>
    );
}
