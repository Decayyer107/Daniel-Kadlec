import { useLanguage } from "@/utils/LanguageContext";
import ProjectSmall from "@/components/ProjectSmall";
import Heading from "@/components/Heading";
import projectsEn from "@/data/projects/projects.en.json" assert { type: "json" };
import projectsCz from "@/data/projects/projects.cz.json" assert { type: "json" };


export default function Portfolio() {
    const { lang, dict } = useLanguage();
    const projects = lang === "cz" ? projectsCz : projectsEn;

    return (
        <section className="section mb-[clamp(124px,_25vw,_256px)]">
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
        </section>
    );
}
