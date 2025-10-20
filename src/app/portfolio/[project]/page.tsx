"use client";

import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/utils/LanguageContext";
import { getProject } from "@/utils/GetProject";
import Button from "@/components/Button";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const { lang, dict } = useLanguage();

    const project = getProject(params.project as string, lang);

    if (!project) return <div className="p-10">Project not found.</div>;

    return (
        <section className="section !max-w-[1550px] min-h-screen flex flex-col gap-8 py-20">
            <Button onClick={() => router.back()} className="w-fit">
                ← Back
            </Button>


            <div className={''}>
                {/*main image*/}
                <div className={'project-section'}>
                    <div className="relative aspect-[16/9] rounded-2xl shadow-md overflow-hidden">
                        <Image
                            src={project.image}
                            alt="Background image"
                            fill
                            className="object-cover object-center"
                        />
                    </div>
                </div>
                <div className={'project-section'}>

                </div>
            </div>

            <h1 className="text-h1">{project.title}</h1>
            <h2 className="text-subheading-green">{project.subtitle}</h2>

            <Technologies techs={project.technologies as import("@/components/Technologies").TechName[]} />

            <p className="text-base mt-4 max-w-3xl opacity-80 leading-relaxed">
                {project.description}
            </p>
        </section>
    );
}
