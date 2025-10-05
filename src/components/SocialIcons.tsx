import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

interface IconsProps {
    isSmall: boolean;
}

export default function SocialIcons({ isSmall }: IconsProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    const getClasses = (id: string, baseSize: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && hovered !== id;

        return `
      cursor-pointer transition-all duration-500 ease-out
      ${baseSize}
      ${isHovered ? "scale-105 opacity-100" : isOther ? "scale-100 opacity-50" : "scale-100 opacity-100"}
    `;
    };

    return (
        <div className="flex gap-6 items-center text">
            <FaGithub
                className={getClasses("github", isSmall ? "w-12 h-12" : "w-12 h-12")}
                onMouseEnter={() => setHovered("github")}
                onMouseLeave={() => setHovered(null)}
            />
            <FaXTwitter
                className={getClasses("twitter", isSmall ? "w-12 h-12" : "w-12 h-12")}
                onMouseEnter={() => setHovered("twitter")}
                onMouseLeave={() => setHovered(null)}
            />
            <LiaLinkedin
                className={getClasses("linkedin", isSmall ? "w-16 h-16" : "w-16 h-16")}
                onMouseEnter={() => setHovered("linkedin")}
                onMouseLeave={() => setHovered(null)}
            />
            <MdOutlineEmail
                className={getClasses("email", isSmall ? "w-16 h-16" : "w-16 h-16")}
                onMouseEnter={() => setHovered("email")}
                onMouseLeave={() => setHovered(null)}
            />
        </div>
    );
}
