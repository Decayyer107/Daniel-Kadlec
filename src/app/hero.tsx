import {useLanguage} from "@/utils/LanguageContext";
import Button from "../components/button"

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

export default function Hero(){
    const { dict } = useLanguage();

    return (
        <section className={'section min-h-screen flex justify-center flex-col'}>
            <div className={'flex flex-col justify-start'}>
                <h1 className={'font-primary text-7xl text-offblack dark:text-offwhite'}>Frontend vývojář & <br/>
                    UX/UI designér.</h1>
                <h2 className={'font-secondary text-3xl text-offblack dark:text-offwhite'}>Ahoj! Jmenuji se Daniel Kadlec.<br/>Student z ČR s vášní pro tvorbu webů.</h2>
            </div>
            <div className={'flex flex-col items-end gap-5'}>
                <span className={'flex gap-6 items-center jus'}>
                    <FaGithub className={'text-white w-[48px] h-[48px]'}/>
                    <FaXTwitter className={'text-white w-[48px] h-[48px]'}/>
                    <LiaLinkedin className={'text-white w-[60px] h-[60px]'}/>
                    <MdOutlineEmail className={'text-white w-[60px] h-[60px]'}/>
                </span>
                <Button/>
            </div>
        </section>
    );
}