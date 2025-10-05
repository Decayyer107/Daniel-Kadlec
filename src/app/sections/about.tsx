import HopperElement from "@/components/HopperElement";
import Button from "@/components/Button";
import {useLanguage} from "@/utils/LanguageContext";

import { LuDownload } from "react-icons/lu";


export default function About(){
    const { dict } = useLanguage();

    return (
        <section className={'section flex mb-64'}>
            <div className={'w-1/2 mr-12 flex flex-col justify-between'}>
                <div>
                    <h1 className={'text-h1'}>{dict.about.heading()}</h1>
                    <h2 className={'text-subheading'}>{dict.about.subheading}</h2>
                </div>
                <div>
                    <div className={'mb-6 scale-x-[-1]'}>
                        <HopperElement/>
                    </div>
                    <Button className="w-full">
                        {dict.about.button}
                        <LuDownload className="h-6 w-6" />
                    </Button>
                </div>
            </div>
            <div className={'w-1/2'}>
                <p className={'text-secondary text-xl'}>{dict.about.paragraph()}</p>
            </div>
        </section>
    );
}