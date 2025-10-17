import projectsEn from "@/data/projects/projects.en.json" assert { type: "json" };
import projectsCz from "@/data/projects/projects.cz.json" assert { type: "json" };

export function getProject(slug: string, lang: "cz" | "en") {
    const projects = lang === "cz" ? projectsCz : projectsEn;
    return projects.find((p) => p.link === slug);
}
