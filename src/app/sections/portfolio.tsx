import {useLanguage} from "@/utils/LanguageContext";
import ProjectSmall from "@/components/ProjectSmall";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Portfolio(){
    const { dict } = useLanguage();

    return(
        <section className={'section mb-[clamp(124px,_25vw,_256px)]'}>
            <Heading Heading={dict.portfolioSection.heading()} Subheading={dict.portfolioSection.subheading}/>
            <div className={'flex flex-col gap-[clamp(52px,_4vw,_64px)]'}>
                <ProjectSmall/>
                <ProjectSmall/>
                <ProjectSmall/>
            </div>
        </section>
    );
}