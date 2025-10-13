import { useLanguage } from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
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
        <section id={'contact'} className="section flex mb-[clamp(124px,_25vw,_256px)] flex-col">
            <Heading className={'!mb-[clamp(_0px,_3vw,_72px)]'} Heading={dict.contact.heading()} />
            <div className="flex gap-8 lg:flex-row flex-col">
                <div className={'lg:w-1/2'}>
                    <p className="text text-body-large font-bold">
                        {dict.contact.paragraph()}
                    </p>
                    <div className="text text-[clamp(24px,3vw,36px)] font-bold flex justify-between px-12 xs:px-0 xs:grid xs:grid-cols-2 lg:flex lg:flex-col gap-6 mt-8">

                        <a href="https://github.com/Decayyer107" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                              <FaGithub className="contact-icon text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]" />
                              <span className="hidden xs:inline">Github</span>
                            </span>
                        </a>

                        <a href="https://x.com/dan_kadlec" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                              <FaXTwitter className="contact-icon text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]" />
                              <span className="hidden xs:inline">{dict.contact.contact_twitter}</span>
                            </span>
                        </a>

                        <a href="https://www.linkedin.com/in/daniel-kadlec-903759379/" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                              <FaLinkedin className="contact-icon text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]" />
                              <span className="hidden xs:inline">LinkedIn</span>
                            </span>
                        </a>

                        <a href="mailto:kontakt@danielkadlec.cz" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                              <FaEnvelope className="contact-icon text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]" />
                              <span className="hidden xs:inline">E-mail</span>
                            </span>
                        </a>

                    </div>


                </div>

                <form
                    name="contactform"
                    id="contactform"
                    onSubmit={submitForm}
                    className="flex flex-col gap-4 w-full lg:w-1/2 text flex-1"
                >
                    <div className="flex-col xl:flex-row flex justify-between gap-3">
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