'use client';
import Heading from "@/components/Heading";
import ProjectBig from "@/components/ProjectBig";
import { useLanguage } from "@/utils/LanguageContext";

export default function Portfolio() {
    const { dict } = useLanguage();

    return (
        <section className="section min-h-screen mb-32">
            <Heading
                Heading={dict.portfolio.heading()}
                Subheading={dict.portfolio.subheading}
            />

            {/* Filters */}
            <div className="w-full flex justify-end mt-[clamp(16px,_3vw,_32px)]">
                <div className="flex flex-col justify-end">
                    <span className="font-primary font-bold text-3xl text-green tracking-wider text-right mb-4">
                        {dict.portfolio.filters_heading}
                    </span>
                    <div className="text flex gap-[clamp(12px,_3vw,_24px)] text-xl font-bold flex-wrap justify-end">
                        <span className="cursor-pointer">{dict.portfolio.filters_all}</span>
                        <span className="cursor-pointer">{dict.portfolio.filters_development}</span>
                        <span className="cursor-pointer">{dict.portfolio.filters_design}</span>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-[clamp(24px,_4vw,_48px)]
                mt-[clamp(24px,_4vw,_64px)]
                [&>*:nth-child(even)]:mt-[clamp(16px,_2vw,_32px)]
                max-md:[&>*:nth-child(even)]:mt-0
            ">
                <ProjectBig />
                <ProjectBig />
                <ProjectBig />
                <ProjectBig />
            </div>
        </section>
    );
}
