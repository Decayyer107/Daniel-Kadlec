import Button from "@/components/Button";
import { useLanguage } from "@/utils/LanguageContext";
import Technologies, { TechName } from "@/components/Technologies";

type ProjectProps = {
    title: string;
    subtitle: string;
    techs: TechName[];
    image: string;
    link: string;
};

export default function ProjectBig({ title, subtitle, techs, image, link }: ProjectProps) {
    const { dict } = useLanguage();

    return (
        <div className="flex flex-col gap-[clamp(14px,_2vw,_32px)]">
            <div
                className="aspect-[16/9] rounded-2xl shadow-md bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="flex flex-col justify-between px-1 md:px-0">
                <div>
                    <h1 className="text-h2">{title}</h1>
                    <h2 className="text-subheading-green">{subtitle}</h2>
                    <Technologies className="mt-[clamp(4px,_2.5vw,_8px)]" techs={techs} />
                </div>
                <div className="w-full flex justify-end">
                    <Button className="w-full xs:w-1/2 sm:w-1/2 lg:w-fit md:!py-[clamp(8px,_1vw,_12px)] mt-[clamp(18px,_1vw,_24px)]">
                        {dict.portfolioSection.project_button}
                    </Button>
                </div>
            </div>
        </div>
    );
}
