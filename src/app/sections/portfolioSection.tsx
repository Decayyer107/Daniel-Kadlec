'use client'

import { useLanguage } from "@/utils/LanguageContext";
import ProjectSmall from "@/components/ProjectSmall";
import Heading from "@/components/Heading";
import {projectsEn} from "@/data/projects/projects.en";
import {projectsCz} from "@/data/projects/projects.cz";
import Button from "@/components/Button";
import Link from "next/link";


export default function PortfolioSection() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    return (
        <section id="portfolio" className="section mb-[clamp(124px,_25vw,_256px)]">
            <Heading
                Heading={dict.portfolioSection.heading()}
                Subheading={dict.portfolioSection.subheading}
            />

            <div className="flex flex-col gap-[clamp(52px,_4vw,_64px)]">
                {projects
                    .filter((p) => p.featured)
                    .map((p) => (
                        <ProjectSmall
                            key={p.id}
                            title={p.title}
                            subtitle={p.subtitle}
                            image={p.image}
                            link={p.link}
                            techs={p.technologies as import("@/components/Technologies").TechName[]}
                        />
                    ))}
            </div>
            <Link href="/portfolio">
                <Button className="w-full mt-24">
                    {dict.portfolioSection.button}
                </Button>
            </Link>
        </section>
    );
}
