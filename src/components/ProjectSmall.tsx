import Button from "@/components/Button";
import Technologies, { TechName } from "@/components/Technologies";
import { useLanguage } from "@/utils/LanguageContext";

type ProjectProps = {
    title: string;
    subtitle: string;
    techs: TechName[];
    image: string;
    link: string;
};

export default function ProjectSmall({ title, subtitle, techs, image, link }: ProjectProps) {
    const { dict } = useLanguage();

    return (
        <div className="flex flex-col md:flex-row gap-[clamp(14px,_2.5vw,_48px)]">
            <div
                className="aspect-[16/9] rounded-2xl shadow-md bg-cover bg-center w-full md:w-1/2"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="flex flex-col justify-between">
                <div className={'px-1 md:px-0'}>
                    <h1 className="text-h2">{title}</h1>
                    <h2 className="text-subheading-green">{subtitle}</h2>
                    <Technologies className="mt-[clamp(4px,_2.5vw,_8px)]" techs={techs}/>
                </div>
                <div className={'w-full flex justify-end'}>
                    <Button className="w-full xs:w-1/2 md:w-fit py-[clamp(12px,_2vw,_15px)] md:!py-[clamp(8px,_1vw,_12px)] !rounded-[14px] md:!rounded-[12px] lg:!rounded-[14px] mt-[clamp(18px,_1vw,_24px)] ">
                        {dict.portfolioSection.project_button}
                    </Button>
                </div>
            </div>
        </div>

    );
}