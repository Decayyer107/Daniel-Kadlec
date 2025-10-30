'use client'

import Image from "next/image";
import Technologies from "@/components/Technologies";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/utils/LanguageContext";
import { getProject } from "@/utils/GetProject";
import { IoPlayBackCircle } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { TechName } from "@/components/Technologies";
import HopperElement from "@/components/HopperElement";
import { notFound } from "next/navigation";
import { ProjectType } from "../types/project";
import { motion } from "framer-motion"; // fixed import

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
    if (!project) notFound();



    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <motion.section
            id="project"
            className="section !max-w-[1550px] relative py-[clamp(112px,_25vw,_150px)]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            animate="visible"
        >
            <motion.div
                variants={item}
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
                className="p-[1px] border-offblack dark:border-offwhite border-2 rounded-full w-14 h-14 absolute top-6 left-6 cursor-pointer"
            >
                <IoPlayBackCircle className="text w-full h-full" />
            </motion.div>

            {/* Title and description */}
            <motion.div variants={item} className="flex flex-col mt-10">
                <motion.h1 variants={item} className="text-h1">
                    {project.title}
                </motion.h1>
                <motion.h2 variants={item} className="text-subheading-green">
                    {project.subtitle}
                </motion.h2>
                <motion.p variants={item} className="text-secondary mt-8">
                    {project.description}
                </motion.p>
            </motion.div>

            <motion.div
                variants={item}
                className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 mt-12"
            >
                <motion.div
                    variants={item}
                    className="project-section !p-[clamp(24px,_2vw,_32px)] w-full flex flex-col gap-6"
                >
                    <motion.div variants={item}>
                        <h2 className="text-h2">{dict.project.technical_title}</h2>
                        <h3 className="text-subheading-green">{dict.project.technical_subtitle}</h3>
                    </motion.div>
                    <motion.p variants={item} className="text-secondary">
                        {project.technical_description}
                    </motion.p>
                    <motion.div variants={item}>
                        <Technologies techs={project.technologies as TechName[]} />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex flex-col gap-0 lg:gap-6 justify-between font-secondary w-full"
                >
                    <motion.div variants={item} className="w-full">
                        <div className="scale-y-[-1] hidden lg:block">
                            <HopperElement />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="flex flex-row lg:flex-col justify-between items-end lg:justify-end gap-6 text text-left lg:text-right"
                    >
                        <div className="flex flex-col gap-3">
                            <motion.span variants={item} className="flex flex-col">
                                <h3 className="text-h2">{project.anchorTitle1}</h3>
                                <Link
                                    className="text-body-large !mt-1 !text-green-secondary dark:!text-gray-400 hover:underline"
                                    href={"#"}
                                >
                                    {project.anchor1}
                                </Link>
                            </motion.span>
                            <motion.span variants={item} className="flex flex-col">
                                <h3 className="text-h2">{project.anchorTitle2}</h3>
                                <Link
                                    className="text-body-large !mt-1 !text-green-secondary dark:!text-gray-400 hover:underline"
                                    href={"#"}
                                >
                                    {project.anchor2}
                                </Link>
                            </motion.span>
                        </div>

                        <motion.div variants={item} className="hidden sm:block lg:hidden scale-x-[-1]">
                            <HopperElement />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div variants={item} className="project-section w-full mt-8 sm:mt-16">
                <motion.div
                    variants={item}
                    className="relative aspect-[16/9] rounded-2xl shadow-md overflow-hidden"
                >
                    <Image
                        src={project.image_main}
                        alt="Background image"
                        fill
                        className="object-cover object-center"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                variants={item}
                className="project-section w-full grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center mt-8"
            >
                    <motion.div
                        variants={item}
                        key={1}
                        className="project-image-small"
                    >
                        <Image
                            src={project.image_1}
                            alt={`Project image 1`}
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                <motion.div
                    variants={item}
                    key={2}
                    className="project-image-small"
                >
                    <Image
                        src={project.image_2}
                        alt={`Project image 2`}
                        fill
                        className="object-cover object-center"
                    />
                </motion.div>
                <motion.div
                    variants={item}
                    key={3}
                    className="project-image-small"
                >
                    <Image
                        src={project.image_3}
                        alt={`Project image 3`}
                        fill
                        className="object-cover object-center"
                    />
                </motion.div>
                <motion.div
                    variants={item}
                    key={4}
                    className="project-image-small"
                >
                    <Image
                        src={project.image_4}
                        alt={`Project image 4`}
                        fill
                        className="object-cover object-center"
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
