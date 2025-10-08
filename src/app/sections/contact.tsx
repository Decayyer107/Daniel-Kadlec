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
                            {dict.contact.contact_twitter}
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
                    className="flex flex-col gap-4 w-full lg:w-1/2 text flex-1"
                >
                    <div className="flex justify-between gap-3">
                        <Input className="w-full" name="name" placeholder={dict.contact.contact_form_name} autoComplete="name" />
                        <Input className="w-full" name="email" placeholder={dict.contact.contact_form_email} autoComplete="email" />
                    </div>
                    <Input name="subject" placeholder={dict.contact.contact_form_subject} />

                    <textarea
                        className="flex-1 min-h-[10rem] bg-gray-200 dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700
               text-gray-900 dark:text-gray-100 placeholder-gray-400
               p-4 rounded-[8px] resize-none transition-all duration-500"
                        name="message"
                        placeholder={dict.contact.contact_form_message}
                    />

                    <input
                        type="submit"
                        value={dict.contact.contact_form_button}
                        className="inline-flex justify-center items-center gap-2 py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite cursor-pointer"
                    />
                </form>

            </div>
        </section>
    );
}