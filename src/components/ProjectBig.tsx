import Button from "@/components/Button";
import { useLanguage } from "@/utils/LanguageContext";
import Technologies from "@/components/Technologies";

export default function ProjectBig() {
    const { dict } = useLanguage();

    return (
        <div className="flex flex-col gap-[clamp(14px,_2vw,_32px)]">
            {/* IMAGE */}
            <div className="
                w-full
                aspect-[16/9]
                bg-gray-700
                rounded-2xl
                shadow-md
            "></div>

            <div className="flex flex-col justify-between px-1 md:px-0">
                <div className={'px-1 md:px-0'}>
                    <h1 className="text-h2">Zahrada smutku</h1>
                    <h2 className="text-subheading-green">UX/UI design webové stránky</h2>
                    <Technologies className="mt-[clamp(4px,_2.5vw,_8px)]" techs={["figma", "css", "html"]}/>
                </div>
                <div className={'w-full flex justify-end'}>
                    <Button className="w-full xs:w-1/2 sm:w-1/2 lg:w-fit  md:!py-[clamp(8px,_1vw,_12px)] mt-[clamp(18px,_1vw,_24px)]">{dict.portfolioSection.project_button}</Button>
                </div>
            </div>
        </div>
    );
}
