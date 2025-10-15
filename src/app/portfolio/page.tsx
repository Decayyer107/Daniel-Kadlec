"use client";

import { useLanguage } from "@/utils/LanguageContext";
import ProjectBig from "@/components/ProjectBig";
import Heading from "@/components/Heading";
import projectsEn from "@/data/projects/projects.en.json" assert { type: "json" };
import projectsCz from "@/data/projects/projects.cz.json" assert { type: "json" };


export default function Portfolio() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    return (
        <section className="section min-h-screen mb-[clamp(64px,_20vw,_128px)]">
            <Heading
                className={'mt-[clamp(112px,_25vw,_224px)]'}
                Heading={dict.portfolio.heading()}
                Subheading={dict.portfolio.subheading}
            />

            <div className="w-full flex justify-end mt-12 sm:mt-0">
                <div className="flex flex-col justify-end">
                    <span className="font-primary font-bold text-[clamp(18px,_3vw,_30px)] text-green tracking-wider text-right mb-[clamp(0px,_1vw,_12px)]">
                        {dict.portfolio.filters_heading}
                    </span>
                    <div className="text flex gap-10 sm:gap-12 text-[clamp(16px,_2.5vw,_20px)] font-bold flex-wrap justify-end">
                        <span className="cursor-pointer">{dict.portfolio.filters_all}</span>
                        <span className="cursor-pointer">{dict.portfolio.filters_development}</span>
                        <span className="cursor-pointer">{dict.portfolio.filters_design}</span>
                    </div>
                </div>
            </div>

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
                {projects.map((p) => (
                    <ProjectBig
                        key={p.id}
                        title={p.title}
                        subtitle={p.subtitle}
                        image={p.image}
                        link={p.link}
                        techs={p.technologies as import("@/components/Technologies").TechName[]}
                    />
                ))}
            </div>
        </section>
    );
}
