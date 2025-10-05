import {useLanguage} from "@/utils/LanguageContext";
import Button from "../../components/Button"



import HeroElement from "@/components/HeroElement";
import SocialIcons from "@/components/SocialIcons";

export default function Hero() {
    const { dict } = useLanguage();

    return (
        <section className={'section min-h-screen flex justify-center flex-col relative'}>
            <HeroElement />
            <div className="relative z-10 flex flex-col justify-start">
                <h1 className={'text-h1'}>
                    {dict.hero.heading()}
                </h1>
                <h2 className={'font-secondary font-bold text-3xl text mt-5'}>
                    {dict.hero.paragraph()}
                </h2>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-5">
                <SocialIcons isSmall={false}/>
                <Button>{dict.hero.button}</Button>
            </div>
        </section>
    );
}
