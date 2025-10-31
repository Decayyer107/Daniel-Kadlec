'use client'

import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

interface ToastItem {
    id: number;
    message: string;
    success: boolean | null;
}

export default function Contact() {
    const { dict } = useLanguage();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
        subject: false,
    });

    const [toasts, setToasts] = useState<ToastItem[]>([]);

    function showToast(message: string, success: boolean | null) {
        const id = Date.now();
        const newToast: ToastItem = { id, message, success };
        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }

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
            const msg =
                data.email && !validateEmail(data.email)
                    ? dict.contact.toast_invalid_email
                    : dict.contact.toast_missing_fields;
            showToast(msg, false);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                showToast(dict.contact.toast_success, true);
                form.reset();
            } else {
                showToast(result.error || dict.contact.toast_error, false);
            }
        } catch (err) {
            console.error(err);
            showToast(dict.contact.toast_unexpected, false);
        } finally {
            setLoading(false);
        }
    }

    function handleInputChange(field: keyof typeof errors, value: string) {
        setErrors((prev) => ({ ...prev, [field]: false }));
    }

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <motion.section
            id="contact"
            className="section flex mb-[clamp(64px,_15vw,_120px)] flex-col"
            initial="hidden"
            whileInView="visible"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}
        >
            <Heading
                className="!mb-[clamp(_0px,_3vw,_72px)]"
                Heading={dict.contact.heading()}
            />

            <div className="flex gap-8 lg:flex-row flex-col">
                <motion.div variants={container} className="lg:w-1/2">
                    <motion.p
                        variants={item}
                        className="text text-body-large !mt-0 font-bold"
                    >
                        {dict.contact.paragraph()}
                    </motion.p>

                    <motion.div
                        variants={container}
                        className="text text-[clamp(24px,3vw,36px)] font-bold flex justify-between px-10 xs:px-0 xs:grid xs:grid-cols-2 lg:flex lg:flex-col gap-6 mt-8"
                    >
                        <motion.a
                            variants={item}
                            href="https://github.com/Decayyer107"
                            target={"_blank"}
                            className="cursor-pointer w-fit hover:underline"
                        >
                            <span className="contact-link flex items-center gap-4">
                                <FaGithub className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">Github</span>
                            </span>
                        </motion.a>

                        <motion.a
                            variants={item}
                            target={"_blank"}
                            href="https://x.com/dan_kadlec"
                            className="cursor-pointer w-fit hover:underline"
                        >
                            <span className="contact-link flex items-center gap-4">
                                <FaXTwitter className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">
                                    {dict.contact.contact_twitter}
                                </span>
                            </span>
                        </motion.a>

                        <motion.a
                            variants={item}
                            target={"_blank"}
                            href="https://www.linkedin.com/in/daniel-kadlec-903759379/"
                            className="cursor-pointer w-fit hover:underline"
                        >
                            <span className="contact-link flex items-center gap-4">
                                <FaLinkedin className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">LinkedIn</span>
                            </span>
                        </motion.a>

                        <motion.a
                            variants={item}
                            target={"_blank"}
                            href="mailto:kontakt@danielkadlec.cz"
                            className="cursor-pointer w-fit hover:underline"
                        >
                            <span className="contact-link flex items-center gap-4">
                                <FaEnvelope className="contact-icon text-[40px]" />
                                <span className="hidden xs:inline">E-mail</span>
                            </span>
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.form
                    name="contactform"
                    id="contactform"
                    onSubmit={submitForm}
                    variants={item}
                    className="flex flex-col gap-4 w-full lg:w-1/2 text flex-1"
                >
                    <div className="flex-col xl:flex-row flex justify-between gap-3">
                        <Input
                            className={`w-full border-2 ${
                                errors.name ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                            }`}
                            name="name"
                            placeholder={dict.contact.contact_form_name}
                            autoComplete="name"
                            onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        <Input
                            className={`w-full border-2 ${
                                errors.email ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                            }`}
                            name="email"
                            placeholder={dict.contact.contact_form_email}
                            autoComplete="email"
                            onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                    </div>

                    <Input
                        name="subject"
                        placeholder={dict.contact.contact_form_subject}
                        className={`w-full border-2 ${
                            errors.subject ? "!border-red-error" : "border-gray-100 dark:border-gray-700"
                        }`}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        autoComplete="off"
                    />

                    <textarea
                        className={`flex-1 min-h-[10rem] bg-gray-200 dark:bg-gray-900 border-2 ${
                            errors.message
                                ? "border-red-error"
                                : "border-gray-100 dark:border-gray-700"
                        } text placeholder-gray-400 p-4 rounded-[8px] resize-none transition-all duration-500`}
                        name="message"
                        placeholder={dict.contact.contact_form_message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                    <motion.button
                        type="submit"
                        disabled={loading}
                        initial="initial"
                        whileHover="hover"
                        className="group relative overflow-hidden inline-flex justify-center items-center gap-2 h-14 px-14 border-2 rounded-[14px] font-secondary font-bold text-xl text-offblack dark:text-offwhite hover:text-offwhite hover:dark:text-offblack border-offblack dark:border-offwhite transition-all cursor-pointer disabled:opacity-50"
                    >
                        <motion.span
                            variants={{
                                initial: { scale: 0, opacity: 0 },
                                hover: { scale: 10, opacity: 1 },
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="absolute inset-0 -left-full bg-offblack dark:bg-offwhite origin-bottom-left rotate-45 h-[200%] w-screen"
                        />

                        <span className="relative z-10 flex items-center gap-2">
        {loading ? (
            <div className="flex flex-col items-center gap-4">
                <div
                    className="spinner group-hover:!border-offwhite dark:group-hover:!border-offblack !w-6 !h-6 !border-4"
                    role="status"
                    aria-label="Loading"
                />
            </div>
        ) : (
            dict.contact.contact_form_button
        )}
    </span>
                    </motion.button>

                </motion.form>

                <div className="fixed bottom-0 left-0 sm:left-auto sm:bottom-6 sm:right-6 flex flex-col gap-0 sm:gap-4 z-[99] w-full sm:w-auto">
                    <AnimatePresence>
                        {toasts.map((toast) => (
                            <motion.div
                                key={toast.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{
                                    duration: 0.3,
                                    layout: { duration: 0.25 },
                                }}
                                className={`relative px-12 w-full sm:w-fit py-8 sm:py-6 rounded-none sm:rounded-xl shadow-lg border-0 border-t-2 sm:border-2 overflow-hidden text flex flex-col bg-gray-200 dark:bg-gray-900 ${
                                    toast.success
                                        ? "border-gray-700 sm:border-green-primary"
                                        : "border-gray-700 sm:border-red-error"
                                }`}
                            >
                                <span className="font-secondary font-bold text-2xl">
                                    {toast.success
                                        ? dict.contact.toast_success_heading
                                        : dict.contact.toast_error_heading}
                                </span>
                                <span className="text-lg font-semibold">
                                    {toast.message}
                                </span>

                                <motion.div
                                    className={`w-full h-1 absolute top-0 sm:bottom-0 left-0 rounded-full ${
                                        toast.success
                                            ? "bg-green-primary"
                                            : "bg-red-error"
                                    }`}
                                    initial={{ scaleX: 1, transformOrigin: "left" }}
                                    animate={{ scaleX: 0 }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}
