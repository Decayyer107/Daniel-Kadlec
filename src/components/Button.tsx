"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";


type ButtonProps = {
    children: ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

export default function Button({ children, className, ...props }: ButtonProps) {
    return (
        <motion.button
            {...props}
            whileHover="hover"
            className={`relative overflow-hidden flex justify-center text-left items-center gap-4 py-[clamp(12px,_2vw,_15px)] px-[clamp(42px,_6vw,_64px)] border-2 rounded-full font-secondary font-bold text-[clamp(15px,_2vw,_20px)] text-offblack dark:text-offwhite hover:text-offwhite hover:dark:text-offblack border-offblack dark:border-offwhite transition-all cursor-pointer ${className}`}
        >
            <span className="relative z-10 flex gap-2 pointer-events-none">{children}</span>
            <motion.span
                className="relative inline-flex items-center justify-center"
                initial="initial"
            >
                <motion.span
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 105 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-offblack dark:bg-offwhite w-[12px] h-[12px] rounded-full"
                />
                <motion.span
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute"
                >
                    <FiExternalLink className={'text-2xl'}/>
                </motion.span>
            </motion.span>


        </motion.button>
    );
}
