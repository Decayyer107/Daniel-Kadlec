import { notFound } from "next/navigation";
import { getProject } from "@/utils/GetProject";
import Project from "../sections/project";


export default function ProjectPage({params}:{params: { project: string };
}) {
    const project = getProject(params.project, "cz");

    if (!project) {
        notFound();
    }

    return <Project project={project} />;
}
