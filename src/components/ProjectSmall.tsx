import Button from "@/components/Button";
import {useLanguage} from "@/utils/LanguageContext";

export default function ProjectSmall(){
    const { dict } = useLanguage();

    return(
        <div className={'flex flex-col gap-3'}>
            {/*IMAGE*/}
            <div className={'w-full h-[380px] bg-gray-700 rounded-2xl shadow-md'}>
            </div>

            <div className={'flex flex-col justify-between'}>
                <div>
                    <h1 className={'text-h2'}>Zahrada smutku</h1>
                    <h2 className={'text-subheading-green mt-6'}>UX/UI design webové stránky</h2>
                </div>
                <div className={'flex justify-between w-full mt-8'}>
                    <div>
                        {/*technologies*/}
                    </div>
                    <Button className={'w-1/2'}>{dict.portfolioSection.project_button}</Button>
                </div>
            </div>
        </div>
    );
}