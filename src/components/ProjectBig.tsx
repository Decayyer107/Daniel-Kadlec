import Button from "@/components/Button";
import {useLanguage} from "@/utils/LanguageContext";

export default function ProjectBig(){
    const { dict } = useLanguage();

    return(
        <div className={'flex gap-12'}>
            {/*IMAGE*/}
            <div className={'w-[450px] h-[270px] bg-gray-700 rounded-2xl shadow-2xl'}>
            </div>

            <div className={'flex flex-col justify-between'}>
                <div>
                    <h1 className={'text-h1'}>Zahrada smutku</h1>
                    <h2 className={'text-subheading-green'}>UX/UI design webové stránky</h2>
                    {/*technologies*/}
                </div>
                <Button className={'w-1/2'}>{dict.portfolioSection.project_button}</Button>
            </div>
        </div>
    );
}