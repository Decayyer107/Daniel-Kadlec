'use client'

import { useLanguage } from "@/utils/LanguageContext";
import { projectsCz } from "@/data/projects/projects.cz";
import { projectsEn } from "@/data/projects/projects.en";
import { useState } from "react";
import Heading from "@/components/Heading";
import ProjectBig from "@/components/ProjectBig";
import { AnimatePresence, motion } from "framer-motion";


export default function PortfolioPage() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { key: "all", label: dict.portfolio.filters_all },
        { key: "development", label: dict.portfolio.filters_development },
        { key: "design", label: dict.portfolio.filters_design },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((p) =>
                Array.isArray(p.category)
                    ? p.category.includes(activeFilter)
                    : p.category === activeFilter
            );

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.97 },
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
            className="section min-h-screen mb-[clamp(64px,_20vw,_128px)]"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <Heading
                className="mt-[clamp(112px,_25vw,_224px)]"
                Heading={dict.portfolio.heading()}
                Subheading={dict.portfolio.subheading}
            />

            <motion.div
                variants={item}
                className="w-full flex justify-end mt-12 sm:mt-0"
            >
                <div className="flex flex-col justify-end">
                    <div
                        className="flex gap-1 sm:gap-3 text-[clamp(16px,_2.5vw,_20px)] font-bold flex-wrap justify-end relative"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className="relative px-5 py-2 sm:px-8 sm:py-2 transition-all duration-200 text-center"
                            >
                                <span
                                    className={`absolute inset-0 rounded-full bg-[#d3d3de] dark:bg-gray-700 scale-95 opacity-0 transition-all duration-300 ${
                                        activeFilter === filter.key
                                            ? "opacity-100 scale-100"
                                            : ""
                                    }`}
                                ></span>

                                <span className="relative z-10 cursor-pointer text">
                                    {filter.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-[clamp(52px,_4vw,_64px)]
                    mt-8
                    lg:mt-4
                    [&>*:nth-child(even)]:mt-[clamp(16px,_2vw,_32px)]
                    max-md:[&>*:nth-child(even)]:mt-0
                  "
            >
                <AnimatePresence mode="wait">
                    {filteredProjects.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <ProjectBig
                                title={p.title}
                                subtitle={p.subtitle}
                                image={p.image_preview}
                                link={p.link}
                                techs={
                                    p.technologies as import("@/components/Technologies").TechName[]
                                }
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>

        </motion.section>
    );
}
