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

    const baseClasses = "cursor-pointer transition-all duration-500 ease-out text";

    const getStyle = (id: string) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && !isHovered;

        return `
      ${baseClasses}
      ${isHovered ? "scale-105" : isOther ? "opacity-50" : "opacity-100"}
    `;
    };

    return (
        <span className="flex gap-6 items-center">
      <FaGithub
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
          className={`${getStyle("github")} ${!isSmall ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}`}
      />

      <FaXTwitter
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
          className={`${getStyle("twitter")} ${!isSmall ? "w-[48px] h-[48px]" : "w-[32px] h-[32px]"}`}
      />

      <LiaLinkedin
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
          className={`${getStyle("linkedin")} ${!isSmall ? "w-[64px] h-[64px]" : "w-[42px] h-[42px]"}`}
      />

      <MdOutlineEmail
          onMouseEnter={() => setHovered("email")}
          onMouseLeave={() => setHovered(null)}
          className={`${getStyle("email")} ${!isSmall ? "w-[64px] h-[64px]" : "w-[42px] h-[42px]"}`}
      />
    </span>
    );
}
