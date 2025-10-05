import { ReactNode } from "react";

const cs = {
    hero: {
        heading: (): ReactNode => (
            <>
                Frontend <span className={'text-green'}>vývojář</span> & <br/>
                <span className={'text-green'}>UX/UI</span> designér.
            </>
        ),
        paragraph: (): ReactNode => (
            <>
                Ahoj! Jmenuji se <span className={'text-green'}>Daniel Kadlec</span>.<br/> <span className={'text-green'}>Student z ČR</span> s vášní pro <span className={'text-green'}>tvorbu webů</span>.
            </>
        ),
        button: "Prohlédněte si moje projekty",
    },
    about: {
        heading: (): ReactNode => (
          <>
            O <span className={"text-green"}>mně</span>.
          </>
        ),
        subheading: "Dozvěďte se více",
        paragraph: (): ReactNode => (
            <>
                Už na základní škole mě zaujal <span className="text-highlighted">svět grafiky</span>. Začal jsem se učit <span className="text-highlighted">Photoshop</span>, pořídil si <span className="text-highlighted">grafický tablet</span> a experimentoval s kresbou i úpravou fotografií, což mě nasměrovalo k volbě <span className="text-highlighted">grafiky jako budoucího povolání</span>. <br/> <br/>

                Na střední škole zaměřené na <span className="text-highlighted">IT</span> mě postupně více oslovil <span className="text-highlighted">design webových stránek</span> a jejich <span className="text-highlighted">programování</span>. <span className="text-highlighted">Branding</span> se posunul do pozadí a mým hlavním zaměřením se stal <span className="text-highlighted">UX/UI design</span> a <span className="text-highlighted">frontend vývoj</span>. <br/> <br/>

                Školní výuka mi nestačila, proto se intenzivně věnuji <span className="text-highlighted">samostudiu moderních technologií a designových principů</span>. Momentálně pracuji s <span className="text-highlighted">Reactem</span>, <span className="text-highlighted">Framer Motion</span> a základy <span className="text-highlighted">Next.js</span> a <span className="text-highlighted">backendu</span>. Mou vášní je tvořit <span className="text-highlighted">webové aplikace</span>, které jsou příjemné na pohled i pohodlné pro uživatele. <br/> <br/>

                Ve volném čase se věnuji <span className="text-highlighted">hudbě</span>, hře na <span className="text-highlighted">kytaru</span> a <span className="text-highlighted">videohrám</span>.
            </>


        ),
        button: "Stáhnout životopis",
    },
    nav: {
        Home: "Domů",
        Contact: "Kontakt",
        About: "O mně",
        Portfolio: "Portfolio",
    },
};
export default cs;