import { notFound } from "next/navigation";
import { getProject } from "@/utils/GetProject";
import Project from "../sections/project";

export default async function ProjectPage({
                                              params,
                                          }: {
    params: Promise<{ project: string }>;
}) {
    const { project } = await params;

    const data = getProject(project, "cz");

    if (!data) {
        notFound();
    }

    return <Project project={data} />;
}
