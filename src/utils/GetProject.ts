import {projectsEn} from "@/data/projects/projects.en";
import {projectsCz} from "@/data/projects/projects.cz";

export function getProject(slug: string, lang: "cz" | "en") {
    const projects = lang === "cz" ? projectsCz : projectsEn;
    return projects.find((p) => p.link === slug);
}
