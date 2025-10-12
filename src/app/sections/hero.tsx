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
                <h1 className={'text-h1 !text-[clamp(36px,_7vw,_64px)]'}>
                    {dict.hero.heading()}
                </h1>
                <h2 className={'text-body-large'}>
                    {dict.hero.paragraph()}
                </h2>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-[clamp(10px,_4vw,_20px)] mt-8">
                <SocialIcons isSmall={false}/>
                <Button link={"/portfolio"}>{dict.hero.button}</Button>
            </div>
        </section>
    );
}
