import React, { ReactNode } from "react";

interface FeatureCardProps {
    heading: ReactNode;
    paragraph: ReactNode;
    icon: ReactNode;
    className?: string;
}

export default function Skill({ heading, paragraph, icon, className = "" }: FeatureCardProps) {
    return (
        <article
            className={`w-full bg-gray-900 text-white rounded-xl p-12 flex items-start justify-between gap-6 shadow-md ${className}`}
        >
            <div className="flex flex-col gap-4">
                <h3 className="text-h2">
                    {heading}
                </h3>
                <p className="text-secondary text-2xl">
                    {paragraph}
                </p>
            </div>
            <div className="flex-shrink-0 text-green-secondart dark:text-green-primary text-[58px] -mt-2">
                {icon}
            </div>
        </article>
    );
}