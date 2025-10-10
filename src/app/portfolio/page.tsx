'use client';
import Heading from "@/components/Heading";
import ProjectBig from "@/components/ProjectBig";

import {useLanguage} from "@/utils/LanguageContext";

export default function Portfolio() {
    const { dict } = useLanguage();

    return (
        <section className={'section min-h-screen mt-42 mb-32'}>
            <Heading Heading={dict.portfolio.heading()} Subheading={dict.portfolio.subheading}/>
            <div className={'w-full flex justify-end'}>
                <div className={'flex flex-col justify-end'}>
                    <span className={'font-primary font-bold text-3xl text-green tracking-wider text-right mb-4'}>
                        {dict.portfolio.filters_heading}
                    </span>
                    <div className={'text flex gap-14 text-xl font-bold'}>
                        <span className={'cursor-pointer'}>{dict.portfolio.filters_all}</span>
                        <span className={'cursor-pointer'}>{dict.portfolio.filters_development}</span>
                        <span className={'cursor-pointer'}>{dict.portfolio.filters_design}</span>
                    </div>
                </div>
            </div>
            <div className="
                grid grid-cols-2 gap-24 mt-8
                [&>*:nth-child(even)]:mt-16
                max-md:grid-cols-1
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
