'use client';

import { useLanguage } from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import Toast from "@/components/Toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";

export default function Contact() {
    const { dict } = useLanguage();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<null | boolean>(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
        subject: false,
    });


    function validateEmail(email: string) {
        const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
        return regex.test(email);
    }

    async function submitForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
        };

        const newErrors = {
            name: data.name === "",
            email: data.email === "" || !validateEmail(data.email),
            message: data.message === "",
            subject: data.subject === "",
        };


        setErrors(newErrors);

        if (Object.values(newErrors).some(Boolean)) {
            setToastMessage(
                data.email && !validateEmail(data.email)
                    ? dict.contact.toast_invalid_email
                    : dict.contact.toast_missing_fields
            );
            setShowToast(true);
            return;
        }

        setLoading(true);
        setSuccess(null);


        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setSuccess(true);
                setToastMessage(dict.contact.toast_success);
                form.reset();
            } else {
                setSuccess(false);
                setToastMessage(result.error || dict.contact.toast_error);
            }
        } catch (err) {
            console.error(err);
            setSuccess(false);
            setToastMessage(dict.contact.toast_unexpected);
        } finally {
            setLoading(false);
            setShowToast(true);
        }
    }
    function handleInputChange(field: keyof typeof errors, value: string) {
        setErrors(prev => ({ ...prev, [field]: false }));
    }

    return (
        <section id="contact" className="section flex mb-[clamp(124px,_25vw,_256px)] flex-col">
            <Heading className="!mb-[clamp(_0px,_3vw,_72px)]" Heading={dict.contact.heading()} />
            <div className="flex gap-8 lg:flex-row flex-col">
                <div className="lg:w-1/2">
                    <p className="text text-body-large font-bold">{dict.contact.paragraph()}</p>

                    <div className="text text-[clamp(24px,3vw,36px)] font-bold flex justify-between px-12 xs:px-0 xs:grid xs:grid-cols-2 lg:flex lg:flex-col gap-6 mt-8">
                        <a href="https://github.com/Decayyer107" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                                <FaGithub className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">Github</span>
                            </span>
                        </a>
                        <a href="https://x.com/dan_kadlec" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                                <FaXTwitter className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">{dict.contact.contact_twitter}</span>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-kadlec-903759379/" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                                <FaLinkedin className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">LinkedIn</span>
                            </span>
                        </a>
                        <a href="mailto:kontakt@danielkadlec.cz" className="cursor-pointer w-fit hover:underline">
                            <span className="contact-link flex items-center gap-4">
                                <FaEnvelope className="contact-icon text-[40px]" />
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
                        <Input
                            className={`w-full border-2 ${errors.name ? "!border-red-error" : "border-transparent"}`}
                            name="name"
                            placeholder={dict.contact.contact_form_name}
                            autoComplete="name"
                            onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        <Input
                            className={`w-full border-2 ${errors.email ? "!border-red-error" : "border-transparent"}`}
                            name="email"
                            placeholder={dict.contact.contact_form_email}
                            autoComplete="email"
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                    </div>

                    <Input
                        name="subject"
                        placeholder={dict.contact.contact_form_subject}
                        className={`w-full border-2 ${errors.subject ? "!border-red-error" : "border-transparent"}`}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                    />

                    <textarea
                        className={`flex-1 min-h-[10rem] bg-gray-200 dark:bg-gray-900 border-2 ${
                            errors.message ? "border-red-error" : "border-gray-100 dark:border-gray-700"
                        } text-gray-900 dark:text-gray-100 placeholder-gray-400 p-4 rounded-[8px] resize-none transition-all duration-500`}
                        name="message"
                        placeholder={dict.contact.contact_form_message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center items-center gap-2 py-[14px] px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite border-offblack dark:border-offwhite cursor-pointer disabled:opacity-50"
                    >
                        {loading
                            ? dict.contact.contact_form_email || "Sending..."
                            : dict.contact.contact_form_button}
                    </button>
                </form>
                <Toast
                    message={toastMessage}
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    success={success}
                />
            </div>
        </section>
    );
}
