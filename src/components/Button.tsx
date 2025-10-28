"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            {...(props as any)}
            initial="initial"
            whileHover="hover"
            className={`relative overflow-hidden flex justify-center items-center gap-2 py-[clamp(12px,_2vw,_15px)] px-[clamp(36px,_6vw,_56px)] border-2 rounded-[10px] sm:rounded-[14px] font-secondary font-bold text-[clamp(15px,_2vw,_20px)] text-offblack dark:text-offwhite hover:text-offwhite hover:dark:text-offblack border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            <motion.span
                variants={{
                    initial: { scale: 0, opacity: 0 },
                    hover: { scale: 10, opacity: 1 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 -left-1/2 bg-offblack dark:bg-offwhite origin-bottom-left rotate-45 h-[200%] w-screen"
            />
            <span className="relative z-10 flex gap-2">{children}</span>
        </motion.button>
    );
}


