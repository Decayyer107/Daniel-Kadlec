import {useLanguage} from "@/utils/LanguageContext";
import Button from "../components/Button"

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

import HeroElement from "@/components/HeroElement";

export default function Hero() {
    const { dict } = useLanguage();

    return (
        <section className={'section min-h-screen flex justify-center flex-col relative'}>
            <HeroElement />
            <div className="relative z-10 flex flex-col justify-start">
                <h1 className={'font-primary text-7xl text'}>
                    {dict.hero.heading()}
                </h1>
                <h2 className={'font-secondary font-bold text-3xl text mt-5'}>
                    {dict.hero.paragraph()}
                </h2>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-5">
                <span className="flex gap-6 items-center">
                    <FaGithub className="text w-[48px] h-[48px] cursor-pointer"/>
                    <FaXTwitter className="text w-[48px] h-[48px] cursor-pointer"/>
                    <LiaLinkedin className="text w-[60px] h-[60px] cursor-pointer"/>
                    <MdOutlineEmail className="text w-[60px] h-[60px] cursor-pointer"/>
                </span>
                <Button>{dict.hero.button}</Button>
            </div>
        </section>
    );
}
