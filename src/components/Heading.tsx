"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HeadingProps {
    Heading: ReactNode;
    Subheading?: string;
    className?: string;
}

export default function Heading({ Heading, Subheading, className }: HeadingProps) {
    const r = useReducedMotion();
    const [ready, setReady] = useState(false);

    // Wait for scroll position to reset before allowing animation
    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const initial = r
        ? { opacity: 0 }
        : { opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)", letterSpacing: "0.05em" };

    const whileInView = r
        ? {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" as const },
        }
        : {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            letterSpacing: "0em",
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] as const,
                filter: { duration: 0.6 },
                letterSpacing: { duration: 0.6 },
                delay: 0.2,
            },
        };

    if (!ready) return null; //  Prevent premature Framer check before layout settles

    return (
        <div className={`mb-[clamp(32px,3vw,72px)] ${className ?? ""}`}>
            <motion.h1
                className="text-h1 tracking-tight"
                initial={initial}
                whileInView={whileInView}
                viewport={{ once: true, amount: 0.6 }}
            >
                {Heading}
            </motion.h1>

            {Subheading && (
                <motion.h2
                    className="text-subheading mt-1 text-gray-300"
                    initial={initial}
                    whileInView={whileInView}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    {Subheading}
                </motion.h2>
            )}
        </div>
    );
}
