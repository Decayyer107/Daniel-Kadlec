import {useLanguage} from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import Input from "../../components/Input"

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export function About() {
    const {dict} = useLanguage();

    return (
        <section className={'section flex mb-64 flex-col'}>
            <Heading Heading={dict.contact.heading()}/>
            <div>
                <div>
                    <p className={'text text-3xl font-bold'}>{dict.contact.paragraph()}</p>
                    <div className={'text text-5xl font-bold flex flex-col gap-6 mt-8'}>
                        <span className={'flex gap-6 items-center'}>
                            <FaGithub  size={58}/>
                            Github
                        </span>
                        <span className={'flex gap-6 items-center'}>
                            <FaXTwitter size={58}/>
                            Platform X
                        </span>
                        <span className={'flex gap-6 items-center'}>
                            <FaLinkedin size={58}/>
                            LinkedIn
                        </span>
                        <span className={'flex gap-6 items-center'}>
                            <FaEnvelope size={58}/>
                            E-mail
                        </span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
}