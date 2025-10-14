import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

interface IconsProps {
    isSmall: boolean;
}

export default function SocialIcons({ isSmall }: IconsProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    const baseClasses =
        "cursor-pointer transition-all duration-500 ease-out text";

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
      ${baseClasses}
      ${isHovered ? " " : isOther ? "opacity-[70%]" : "opacity-100"}
    `;
    };

    // Define responsive clamp-based size
    const sizeClass = !isSmall
        ? "w-[clamp(32px,5.5vw,48px)] h-[clamp(32px,5.5vw,48px)]" // large variant
        : "w-[clamp(30px,5vw,32px)] h-[clamp(30px,5vw,32px)]"; // small variant

    const gapClass = !isSmall
        ? "gap-[clamp(_12px,_2vw,_24px)]" // large variant
        : "gap-[clamp(_18px,_2vw,_24px)]"; // small variant

    return (
        <span className={`flex gap-[clamp(_12px,_2vw,_24px)] items-center ${gapClass}`}>
          <a href="https://github.com/Decayyer107">
            <FaGithub
                onMouseEnter={() => setHovered("github")}
                onMouseLeave={() => setHovered(null)}
                className={`${getStyle("github")} ${sizeClass}`}
            />
          </a>

          <a href="https://x.com/dan_kadlec">
            <FaXTwitter
                onMouseEnter={() => setHovered("twitter")}
                onMouseLeave={() => setHovered(null)}
                className={`${getStyle("twitter")} ${sizeClass}`}
            />
          </a>

          <a href="https://www.linkedin.com/in/daniel-kadlec-903759379/">
            <FaLinkedin
                onMouseEnter={() => setHovered("linkedin")}
                onMouseLeave={() => setHovered(null)}
                className={`${getStyle("linkedin")} ${sizeClass}`}
            />
          </a>

          <a href="mailto:kontakt@danielkadlec.cz">
            <FaEnvelope
                onMouseEnter={() => setHovered("email")}
                onMouseLeave={() => setHovered(null)}
                className={`${getStyle("email")} ${sizeClass}`}
            />
          </a>
        </span>
    );
}
