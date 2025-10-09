'use client';
import Heading from "@/components/Heading";
import {useLanguage} from "@/utils/LanguageContext";

export default function Portfolio() {
    const { dict } = useLanguage();

    return (
        <section className={'section min-h-screen mt-42'}>
            <Heading Heading={dict.portfolio.heading()} Subheading={dict.portfolio.subheading}/>
            <div className={'w-full flex justify-end'}>
                <div>
                    <span className={'font-primary font-bold text-3xl text-green tracking-wider'}>
                        {dict.portfolio.filters_heading}
                    </span>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
