import Button from "@/components/Button";
import Technologies from "@/components/Technologies";
import {useLanguage} from "@/utils/LanguageContext";

export default function ProjectSmall(){
    const { dict } = useLanguage();

    return(
        <div className="flex flex-col md:flex-row gap-[clamp(14px,_2.5vw,_48px)]">
            {/* IMAGE */}
            <div className="w-full md:w-[clamp(250px,_40vw,_450px)] aspect-[5/3] bg-gray-700 rounded-2xl shadow-md"></div>

            <div className="flex flex-col justify-between">
                <div className={'px-1 md:px-0'}>
                    <h1 className="text-h2">Zahrada smutku</h1>
                    <h2 className="text-subheading-green">UX/UI design webové stránky</h2>
                    <Technologies className="mt-[clamp(4px,_2.5vw,_8px)]" techs={["figma", "css", "html"]}/>
                </div>
                <div className={'w-full flex justify-end'}>
                    <Button className="w-full xs:w-1/2 md:w-fit py-[clamp(12px,_2vw,_15px)] md:!py-[clamp(8px,_1vw,_12px)] !rounded-[14px] md:!rounded-[12px] lg:!rounded-[14px] mt-[clamp(18px,_1vw,_24px)] ">{dict.portfolioSection.project_button}</Button>
                </div>
            </div>
        </div>

    );
}