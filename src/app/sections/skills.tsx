import {useLanguage} from "@/utils/LanguageContext";
import Skill from "../../components/Skill";
import Heading from "../../components/Heading";

import { FaCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { BsPalette2 } from "react-icons/bs";


export default function Portfolio(){
    const { dict } = useLanguage();

    return(
        <section className={'section mb-64'}>
            <Heading Heading={dict.skills.heading()} Subheading={dict.skills.subheading}/>
            <div className={'flex flex-col gap-12'}>
                <Skill heading={dict.skills.card_1_heading()} paragraph={dict.skills.card_1_paragraph} icon={<FaCode/>}/>
                <Skill heading={dict.skills.card_2_heading()} paragraph={dict.skills.card_2_paragraph} icon={<FaPenNib/>}/>
                <Skill heading={dict.skills.card_3_heading()} paragraph={dict.skills.card_3_paragraph} icon={<BsPalette2/>}/>
            </div>
        </section>
    );
}