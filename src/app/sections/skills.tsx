'use client'

import { motion } from "framer-motion";
import { useLanguage } from "@/utils/LanguageContext";
import Skill from "../../components/Skill";
import Heading from "../../components/Heading";
import TechMarquee from "@/components/TechMarquee";

import { FaCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { BsPalette2 } from "react-icons/bs";

export default function Portfolio() {
    const { dict } = useLanguage();

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)", scale: 0.97 },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <motion.section
            className="section mb-[clamp(124px,_25vw,_256px)]"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
        >
            <Heading
                className="!mb-[clamp(12px,_2vw,_32px)]"
                Heading={dict.skills.heading()}
                Subheading={dict.skills.subheading}
            />

            <motion.div variants={item}>
                <TechMarquee />
            </motion.div>

            <motion.div
                variants={container}
                className="flex flex-col gap-[clamp(_24px,_3vw,_48px)]"
            >
                <motion.div variants={item}>
                    <Skill
                        heading={dict.skills.card_1_heading()}
                        paragraph={dict.skills.card_1_paragraph}
                        icon={<FaCode />}
                    />
                </motion.div>

                <motion.div variants={item}>
                    <Skill
                        heading={dict.skills.card_2_heading()}
                        paragraph={dict.skills.card_2_paragraph}
                        icon={<FaPenNib />}
                    />
                </motion.div>

                <motion.div variants={item}>
                    <Skill
                        heading={dict.skills.card_3_heading()}
                        paragraph={dict.skills.card_3_paragraph}
                        icon={<BsPalette2 />}
                    />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
