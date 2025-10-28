"use client";

import { useLanguage } from "@/utils/LanguageContext";
import Button from "../../components/Button";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import HeroElement from "@/components/HeroElement";
import SocialIcons from "@/components/SocialIcons";

export default function Hero() {
    const { dict } = useLanguage();
    const r = useReducedMotion();

    return (
        <section className="section min-h-screen flex justify-center flex-col relative">
            <HeroElement />

            {/* Main heading & paragraph */}
            <motion.div
                className="relative z-10 flex flex-col justify-start"
                initial={
                    r
                        ? { opacity: 0 }
                        : { opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)", letterSpacing: "0.03em" }
                }
                animate={
                    r
                        ? { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            letterSpacing: "0em",
                            transition: {
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                                filter: { duration: 0.6 },
                                letterSpacing: { duration: 0.6 },
                            },
                        }
                }
            >
                <h1 className="text-h1 !text-[clamp(36px,_7vw,_64px)]">
                    {dict.hero.heading()}
                </h1>
                <h2 className="text-body-large">{dict.hero.paragraph()}</h2>
            </motion.div>

            {/* Social icons & button */}
            <motion.div
                className="relative z-10 flex flex-col items-end gap-[clamp(10px,_4vw,_20px)] mt-[clamp(48px,_4vw,_32px)]"
                initial={
                    r
                        ? { opacity: 0 }
                        : { opacity: 0, y: 20, scale: 0.97, filter: "blur(8px)" }
                }
                animate={
                    r
                        ? { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: {
                                delay: 0.2,
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                                filter: { duration: 0.9 },
                            },
                        }
                }
            >
                <SocialIcons isSmall={false} />
                <Link href="/portfolio">
                    <Button>{dict.hero.button}</Button>
                </Link>
            </motion.div>
        </section>
    );
}
