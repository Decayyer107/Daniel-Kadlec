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

type TechName =
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

const size = 20;

const techMap: Record<TechName, { icon: React.ReactNode; label: string }> = {
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
};

interface TechStackProps {
    techs: TechName[];
    className?: string;
}

export default function TechStack({ techs, className = "" }: TechStackProps) {
    return (
        <div className={`flex gap-6 text-center ${className}`}>
            {techs.map((tech) => {
                const item = techMap[tech];
                if (!item) return null;
                return (
                    <div
                        key={tech}
                        className="py-[6px] px-4 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-700 grayscale-100 hover:grayscale-0 shadow-md rounded-md font-bold transition-all duration-500 cursor-default"
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
