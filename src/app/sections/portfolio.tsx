import {useLanguage} from "@/utils/LanguageContext";
import ProjectBig from "@/components/ProjectBig";

export default function Portfolio(){
    const { dict } = useLanguage();

    return(
        <section className={'section'}>
            <div>
                <h1 className={'text-h1'}>{dict.portfolioSection.heading()}</h1>
                <h2 className={'text-subheading'}>{dict.portfolioSection.subheading}</h2>
            </div>
        <ProjectBig/>
        </section>
    );
}