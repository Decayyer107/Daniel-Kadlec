import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

interface IconsProps {
    isSmall: boolean;
}

export default function SocialIcons({ isSmall }: IconsProps) {

    return (
        <div
            className="flex gap-6 items-center text
    hover:[&>*:not(:hover)]:opacity-50
    hover:[&>*:not(:hover)]:scale-100
    [&>*]:transition-all [&>*]:duration-500 [&>*]:ease-out"
        >
            <FaGithub className="cursor-pointer w-12 h-12 hover:scale-105" />
            <FaXTwitter className="cursor-pointer w-12 h-12 hover:scale-105" />
            <LiaLinkedin className="cursor-pointer w-16 h-16 hover:scale-105" />
            <MdOutlineEmail className="cursor-pointer w-16 h-16 hover:scale-105" />
        </div>

    );
}
