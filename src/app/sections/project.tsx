'use client'

import Button from "@/components/Button";
import Image from "next/image";
import Technologies from "@/components/Technologies";
import {useParams, useRouter} from "next/navigation";
import {useLanguage} from "@/utils/LanguageContext";
import {getProject} from "@/utils/GetProject";
import { IoPlayBackCircle } from "react-icons/io5";
import {useState} from "react";
import Link from "next/link";
import { TechName } from "@/components/Technologies";
import HopperElement from "@/components/HopperElement";
import { notFound } from "next/navigation";
import {ProjectType} from "../types/project"
import { motion } from "motion/react"


export default function Project({ project }: { project: ProjectType }) {
    const params = useParams();
    const router = useRouter();
    const { lang, dict } = useLanguage();

    const [isAnimating, setIsAnimating] = useState(false);

    const handleAnimate = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }
    };

    project = getProject(params.project as string, lang)!;

    if (!project) {
        notFound();
    }

    return(
        <section className="section !max-w-[1550px] relative py-[clamp(112px,_25vw,_150px)]">
            <motion.div
                onHoverStart={handleAnimate}
                animate={
                    isAnimating
                        ? { rotate: [0, 30, -30, 15, -10, 0] }
                        : { rotate: 0 }
                }
                transition={
                    isAnimating
                        ? {
                            duration: 0.7,
                            ease: "easeInOut",
                        }
                        : {}
                }
                onClick={() => {
                    document.documentElement.style.scrollBehavior = "auto";
                    router.back();
                    setTimeout(() => {
                        document.documentElement.style.scrollBehavior = "";
                    }, 100);
                }}
                className="p-[1px] border-offblack dark:border-offwhite border-2 rounded-full w-14 h-14 absolute top-6 left-6"
            >
                <IoPlayBackCircle className="text w-full h-full" />
            </motion.div>
            <div className={'flex flex-col'}>
                <h1 className={'text-h1'}>{project.title}</h1>
                <h2 className={'text-subheading-green'}>{project.subtitle}</h2>
                <p className={'text-secondary mt-8'}>{project.description}</p>
            </div>

            <div className={'flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 mt-12'}>
                <div className={'project-section !p-[clamp(24px,_2vw,_32px)] w-full flex flex-col gap-6'}>
                    <div>
                        <h2 className={'text-h2'}>{dict.project.technical_title}</h2>
                        <h3 className={'text-subheading-green'}>{dict.project.technical_subtitle}</h3>
                    </div>
                    <p className={'text-secondary'}>{project.technical_description}</p>
                    <Technologies techs={project.technologies as TechName[]} />
                </div>
                <div className={'flex flex-col gap-0 lg:gap-6 justify-between font-secondary w-full'}>
                    <div className={'w-full'}>
                        <div className={'scale-y-[-1] hidden lg:block'}>
                            <HopperElement/>
                        </div>
                    </div>
                    <div className={'flex flex-row lg:flex-col justify-between items-end lg:justify-end gap-6 text text-left lg:text-right'}>
                        <div className={'flex flex-col gap-3'}>
                            <span className={'flex flex-col'}>
                                <h3 className={'text-h2'}>{project.anchorTitle1}</h3>
                                <Link className={'text-body-large !mt-1 !text-green-secondary dark:!text-gray-400 hover:underline'} href={"#"}>{project.anchor1}</Link>
                            </span>
                            <span className={'flex flex-col'}>
                                <h3 className={'text-h2'}>{project.anchorTitle2}</h3>
                                <Link className={'text-body-large !mt-1 !text-green-secondary dark:!text-gray-400  hover:underline'} href={"#"}>{project.anchor2}</Link>
                            </span>
                        </div>
                        <div className={'hidden sm:block lg:hidden scale-x-[-1]'}>
                            <HopperElement/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'project-section w-full mt-8 sm:mt-16'}>
                <div className="relative aspect-[16/9] rounded-2xl shadow-md overflow-hidden">
                    <Image
                        src={project.image}
                        alt="Background image"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <div className={'project-section w-full grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center mt-8'}>
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
        </section>
    );
}