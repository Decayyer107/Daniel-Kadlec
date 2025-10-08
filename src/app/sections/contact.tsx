import { useLanguage } from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Button from "@/components/Button";
import React from "react";

export function About() {
    const { dict } = useLanguage();

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        console.log(Object.fromEntries(data.entries()));
    }

    return (
        <section className="section flex mb-64 flex-col">
            <Heading Heading={dict.contact.heading()} />
            <div className="flex gap-8 lg:flex-row flex-col">
                <div className={'lg:w-1/2'}>
                    <p className="text text-3xl font-bold">
                        {dict.contact.paragraph()}
                    </p>
                    <div className="text text-4xl font-bold flex flex-col gap-6 mt-8">
                        <span className="flex gap-6 items-center">
                            <FaGithub size={50}/>
                            Github
                        </span>
                        <span className="flex gap-6 items-center">
                            <FaXTwitter size={50} />
                            Platform X
                        </span>
                        <span className="flex gap-6 items-center">
                            <FaLinkedin size={50} />
                            LinkedIn
                        </span>
                        <span className="flex gap-6 items-center">
                            <FaEnvelope size={50} />
                            E-mail
                        </span>
                    </div>
                </div>

                <form
                    name="contactform"
                    id="contactform"
                    onSubmit={submitForm}
                    className="flex flex-col gap-4 w-full lg:w-1/2"
                >
                    <div className={"flex justify-between gap-3"}>
                        <Input className="text w-full" name="name" placeholder="Full Name" autoComplete={"name"} />
                        <Input className="text w-full" name="email" placeholder="E-Mail" autoComplete={"email"} />
                    </div>
                    <Input className="text" name="subject" placeholder="Subject" />
                    <textarea
                        className="text bg-gray-900 border-1 border-gray-700 text p-4 rounded-[8px] resize-none h-44"
                        name="message"
                        placeholder="Message"
                    />
                    <input type="submit" className={"inline-flex justify-center items-center gap-2 py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite transition-all hover:bg-pink-500 hover:border-yellow-300 hover:text-lime-300"} />
                </form>
            </div>
        </section>
    );
}