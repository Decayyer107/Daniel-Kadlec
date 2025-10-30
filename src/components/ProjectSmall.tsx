import Link from "next/link";
import Button from "@/components/Button";
import Technologies, { TechName } from "@/components/Technologies";
import { useLanguage } from "@/utils/LanguageContext";
import Image from "next/image";

type ProjectProps = {
    title: string;
    subtitle: string;
    techs: TechName[];
    image: string;
    link: string;
    from?: "index" | "portfolio";
};
// PORTFOLIO SECTION
export default function ProjectSmall({ title, subtitle, techs, image, link, from = "index" }: ProjectProps) {
    const { dict } = useLanguage();

    const href = from === "index" ? `/${link}` : `/portfolio/${link}`;

    return (
        <div className="flex flex-col justify-between md:flex-row gap-[clamp(14px,_2vw,_38px)]">
            <div className="relative aspect-[15/9] w-full md:w-1/2 rounded-2xl shadow-md overflow-hidden">
                <Image
                    src={image}
                    alt="Preview"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2">
                <div className="px-1 md:px-0">
                    <h1 className="text-h2">{title}</h1>
                    <h2 className="text-subheading-green">{subtitle}</h2>
                    <Technologies className="mt-[clamp(4px,_2.5vw,_8px)]" techs={techs} />
                </div>
                <div className="w-full flex justify-end">
                    <Link href={href} className={'w-full flex justify-end'}>
                        <Button className="w-full xs:w-1/2 md:w-2/3 mt-[clamp(18px,_1vw,_24px)]">
                            {dict.portfolioSection.project_button}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
