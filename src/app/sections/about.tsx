import HopperElement from "@/components/HopperElement";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import {useLanguage} from "@/utils/LanguageContext";

import { LuDownload } from "react-icons/lu";


export default function About(){
    const { dict } = useLanguage();

    return (
        <section className={'section flex mb-64'}>
            <div className={'w-1/2 mr-12 flex flex-col justify-between'}>
                <Heading Heading={dict.about.heading()} Subheading={dict.about.subheading}/>
                <div>
                    <div className={'mb-6 scale-x-[-1]'}>
                        <HopperElement className={'!bg-gray-200 dark:!bg-gray-900 !shadow-[inset_4px_4px_6px_rgba(210,210,221,0.6)] dark:shadow-![rgba(7,7,8,0.8)]'}/>
                    </div>
                    <Button className="w-full">
                        {dict.about.button}
                        <LuDownload className="h-6 w-6" />
                    </Button>
                </div>
            </div>
            <div className={'w-1/2'}>
                <p className={'text-secondary text-2xl'}>{dict.about.paragraph()}</p>
            </div>
        </section>
    );
}