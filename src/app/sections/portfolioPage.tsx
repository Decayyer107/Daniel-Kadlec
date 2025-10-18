'use client'

import {useLanguage} from "@/utils/LanguageContext";
import projectsCz from "@/data/projects/projects.cz.json";
import projectsEn from "@/data/projects/projects.en.json";
import {useState} from "react";
import Heading from "@/components/Heading";
import ProjectBig from "@/components/ProjectBig";

export default function PortfolioPage(){
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

    return (
        <section className="section min-h-screen mb-[clamp(64px,_20vw,_128px)]">
            <Heading
                className={"mt-[clamp(112px,_25vw,_224px)]"}
                Heading={dict.portfolio.heading()}
                Subheading={dict.portfolio.subheading}
            />

            <div className="w-full flex justify-end mt-12 sm:mt-0">
                <div className="flex flex-col justify-end">
                    <span className="font-primary font-bold text-[clamp(18px,_3vw,_30px)] text-green tracking-wider text-right mb-[clamp(0px,_1vw,_12px)]">
                        {dict.portfolio.filters_heading}
                    </span>

                    <div className="flex gap-3 sm:gap-5 text-[clamp(16px,_2.5vw,_20px)] font-bold flex-wrap justify-end relative">
                        {filters.map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className="relative px-8 py-2 transition-all duration-200 text-center"
                            >
                                {/*Background*/}
                                <span
                                    className={`absolute inset-0 rounded-full bg-gray-700 scale-95 opacity-0 transition-all duration-300 ${
                                        activeFilter === filter.key
                                            ? "opacity-100 scale-100"
                                            : ""
                                    }`}
                                ></span>

                                {/* Label */}
                                <span className="relative z-10 cursor-pointer text">
                                    {filter.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* PROJECT GRID */}
            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-[clamp(52px,_4vw,_64px)]
                    mt-[clamp(42px,_4vw,_64px)]
                    [&>*:nth-child(even)]:mt-[clamp(16px,_2vw,_32px)]
                    max-md:[&>*:nth-child(even)]:mt-0
                "
            >
                {filteredProjects.map((p) => (
                    <ProjectBig
                        key={p.id}
                        title={p.title}
                        subtitle={p.subtitle}
                        image={p.image}
                        link={p.link}
                        techs={
                            p.technologies as import("@/components/Technologies").TechName[]
                        }
                    />
                ))}
            </div>
        </section>
    );
}