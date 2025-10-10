"use client";

import React from "react";
import {
    ReactOriginal,
    TailwindcssOriginal,
    Html5Original,
    Css3Original,
    JavascriptOriginal,
    TypescriptOriginal,
    NextjsOriginal,
    NodejsOriginal,
    FigmaOriginal,
    PhotoshopOriginal,
    IllustratorOriginal,
} from "devicons-react";

export type TechName =
    | "react"
    | "tailwind"
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "nextjs"
    | "nodejs"
    | "figma"
    | "photoshop"
    | "illustrator";

export const getTechMap = (size = 20) =>
    ({
        react: { icon: <ReactOriginal size={size} />, label: "React" },
        tailwind: { icon: <TailwindcssOriginal size={size} />, label: "Tailwind CSS" },
        html: { icon: <Html5Original size={size} />, label: "HTML5" },
        css: { icon: <Css3Original size={size} />, label: "CSS3" },
        javascript: { icon: <JavascriptOriginal size={size} />, label: "JavaScript" },
        typescript: { icon: <TypescriptOriginal size={size} />, label: "TypeScript" },
        nextjs: { icon: <NextjsOriginal size={size} />, label: "Next.js" },
        nodejs: { icon: <NodejsOriginal size={size} />, label: "Node.js" },
        figma: { icon: <FigmaOriginal size={size} />, label: "Figma" },
        photoshop: { icon: <PhotoshopOriginal size={size} />, label: "Photoshop" },
        illustrator: { icon: <IllustratorOriginal size={size} />, label: "Illustrator" },
    } as const);

interface TechStackProps {
    techs: TechName[];
    className?: string;
    size?: number;
}

export default function TechStack({ techs, className = "", size = 20 }: TechStackProps) {
    const techMap = getTechMap(size);

    return (
        <div className={`flex flex-wrap gap-6 text-center ${className}`}>
            {techs.map((tech) => {
                const item = techMap[tech];
                if (!item) return null;
                return (
                    <div
                        key={tech}
                        className="py-2 px-4 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 grayscale hover:grayscale-0 rounded-md font-bold transition-all duration-500 cursor-default"
                    >
                        {item.icon}
                        <span className="text-[18px] font-medium text-secondary">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
