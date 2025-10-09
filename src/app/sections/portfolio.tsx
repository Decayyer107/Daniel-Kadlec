import {useLanguage} from "@/utils/LanguageContext";
import ProjectBig from "@/components/ProjectBig";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Portfolio(){
    const { dict } = useLanguage();

    return(
        <section className={'section mb-64'}>
            <Heading Heading={dict.portfolioSection.heading()} Subheading={dict.portfolioSection.subheading}/>
            <div className={'flex flex-col gap-12'}>
                <ProjectBig/>
                <ProjectBig/>
                <ProjectBig/>
            </div>
            <div className="flex justify-end items-center h-full mt-28">
                <Button link={"/portfolio"} className={'w-1/3'}>{dict.portfolioSection.button}</Button>
            </div>
        </section>
    );
}