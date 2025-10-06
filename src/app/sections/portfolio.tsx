import {useLanguage} from "@/utils/LanguageContext";
import ProjectBig from "@/components/ProjectBig";
import Button from "@/components/Button";

export default function Portfolio(){
    const { dict } = useLanguage();

    return(
        <section className={'section mb-64'}>
            <div className={'mb-20'}>
                <h1 className={'text-h1'}>{dict.portfolioSection.heading()}</h1>
                <h2 className={'text-subheading'}>{dict.portfolioSection.subheading}</h2>
            </div>
            <div className={'flex flex-col gap-12'}>
                <ProjectBig/>
                <ProjectBig/>
                <ProjectBig/>
            </div>
            <div className="flex justify-end items-center h-full mt-28">
                <Button className={'w-1/3'}>{dict.portfolioSection.button}</Button>
            </div>
        </section>
    );
}