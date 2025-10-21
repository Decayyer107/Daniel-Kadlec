'use client'

import Button from "@/components/Button";
import Image from "next/image";
import Technologies from "@/components/Technologies";
import {useParams, useRouter} from "next/navigation";
import {useLanguage} from "@/utils/LanguageContext";
import {getProject} from "@/utils/GetProject";
import { IoPlayBackCircle } from "react-icons/io5";
export default function Project(){
    const params = useParams();
    const router = useRouter();
    const { lang, dict } = useLanguage();

    const project = getProject(params.project as string, lang);

    if (!project) return <div className="p-10 text-h1">Project not found.</div>;
    return(
        <section className="section !max-w-[1550px] relative flex justify-center items-center">
            <Button
                onClick={() => {
                    document.documentElement.style.scrollBehavior = "auto";

                    router.back();

                    setTimeout(() => {
                        document.documentElement.style.scrollBehavior = "";
                    }, 100);
                }}
                className="group absolute w-12 h-12 !p-0 !rounded-full top-6 left-6 flex items-center justify-center transition-all duration-300"
            >
                <IoPlayBackCircle className="text w-9 h-9 transition-all duration-300 group-hover:w-full group-hover:h-full" />
            </Button>


            <div className={'w-full h-full flex flex-col gap-12 '}>
                <div className={'flex justify-between gap-12'}>
                    {/*top left*/}
                    <div className={'project-section w-3/5'}>
                        <div className="relative aspect-[16/9] rounded-2xl shadow-md overflow-hidden">
                            <Image
                                src={project.image}
                                alt="Background image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    {/*top right*/}
                    <div className={'project-section w-2/5'}>
                        <h1 className={'text-h1'}>{project.title}</h1>
                        <h2 className={'text-subheading-green'}>{project.subtitle}</h2>
                        <p className={'text'}>{project.description}</p>
                    </div>
                </div>
                <div className={'flex justify-between gap-12'}>
                    {/*bottom left*/}
                    <div className={'project-section w-2/5 flex flex-col'}>
                        <h1 className={'text-h1'}>{dict.project.technical_title}</h1>
                        <h2 className={'text-subheading-green'}>{dict.project.technical_subtitle}</h2>
                        <p className={'text'}>{project.technical_description}</p>
                        <Technologies techs={project.technologies as import("@/components/Technologies").TechName[]} />
                    </div>
                    {/*bottom right*/}
                    <div className={'project-section w-3/5 grid grid-cols-2 gap-6 justify-center items-center'}>
                        <div className="project-image-small">
                            <Image
                                src={project.image}
                                alt="Background image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="project-image-small">
                            <Image
                                src={project.image}
                                alt="Background image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="project-image-small">
                            <Image
                                src={project.image}
                                alt="Background image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="project-image-small">
                            <Image
                                src={project.image}
                                alt="Background image"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}