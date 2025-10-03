import { ReactNode } from "react";

const en = {
    hero: {
        heading: (): ReactNode => (
            <>
                Frontend <span className={'text-green'}>developer</span> & <br/>
                <span className={'text-green'}>UX/UI</span> designer.
            </>
        ),
        paragraph: (): ReactNode => (
            <>
                Hello! My name is  <span className={'text-green'}>Daniel Kadlec</span>. Student from<br/> the <span className={'text-green'}>Czech Republic</span> with a passion for <span className={'text-green'}>web development</span>.
            </>
        ),

        button: "Take a look at my projects",
    },
    nav: {
        Home: "Home",
        Contact: "Contact",
        About: "About",
        Portfolio: "Portfolio",
    },
};
export default en;
