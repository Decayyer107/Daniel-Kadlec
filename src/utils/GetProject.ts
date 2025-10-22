import projectsEn from "@/data/projects/projects.en" assert { type: "json" };
import projectsCz from "@/data/projects/projects.cz" assert { type: "json" };

export function getProject(slug: string, lang: "cz" | "en") {
    const projects = lang === "cz" ? projectsCz : projectsEn;
    return projects.find((p) => p.link === slug);
}
