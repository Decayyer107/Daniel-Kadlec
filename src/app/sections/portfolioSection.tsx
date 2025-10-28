'use client'

import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";
import ProjectSmall from "@/components/ProjectSmall";
import Heading from "@/components/Heading";
import { projectsEn } from "@/data/projects/projects.en";
import { projectsCz } from "@/data/projects/projects.cz";
import Button from "@/components/Button";
import Link from "next/link";

export default function PortfolioSection() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <motion.section
            id="portfolio"
            className="section mb-[clamp(124px,_25vw,_256px)]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
        >

        <Heading
                Heading={dict.portfolioSection.heading()}
                Subheading={dict.portfolioSection.subheading}
            />

            {/* Projects container */}
            <motion.div
                variants={container}
                className="flex flex-col gap-[clamp(52px,_4vw,_64px)]"
            >
                {projects
                    .filter((p) => p.featured)
                    .map((p) => (
                        <motion.div key={p.id} variants={item}>
                            <ProjectSmall
                                title={p.title}
                                subtitle={p.subtitle}
                                image={p.image}
                                link={p.link}
                                techs={
                                    p.technologies as import("@/components/Technologies").TechName[]
                                }
                            />
                        </motion.div>
                    ))}
            </motion.div>

            <motion.div variants={item} className="mt-24">
                <Link href="/portfolio">
                    <Button className="w-1/2">{dict.portfolioSection.button}</Button>
                </Link>
            </motion.div>
        </motion.section>
    );
}
