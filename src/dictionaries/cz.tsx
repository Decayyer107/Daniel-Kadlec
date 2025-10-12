import { ReactNode } from "react";

const cs = {
    hero: {
        heading: (): ReactNode => (
            <>
                Frontend <span className={'text-green'}>vývojář&nbsp;</span>&<br/>
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
                Už na základní škole mě zaujal <span className="text-highlighted">svět grafiky</span>. Začal jsem se učit <span className="text-highlighted">Photoshop</span>, pořídil si grafický tablet a experimentoval s kresbou i úpravou fotografií, což mě nasměrovalo k volbě <span className="text-highlighted">grafiky jako budoucího povolání</span>. <br/> <br/>

                Na střední škole zaměřené na <span className="text-highlighted">IT, design webových stránek a programování</span> mě to začalo bavit ještě víc. Branding se posunul do pozadí a mým hlavním zaměřením se stal <span className="text-highlighted">UX/UI design a frontend vývoj</span>. <br/> <br/>

                Školní výuka mi nestačila, proto se intenzivně věnuji <span className="text-highlighted">samostudiu moderních technologií a designových principů</span>. Momentálně pracuji s <span className="text-highlighted">Reactem, Framer Motion, Next.js</span> a základy <span className="text-highlighted">backendu</span>. Mou vášní je tvořit <span className="text-highlighted">webové aplikace</span>, které jsou příjemné na pohled i pohodlné pro uživatele. <br/> <br/>

                Ve volném čase se věnuji <span className="text-highlighted">hudbě, kytaře a videohrám</span>.
            </>
        ),
        button: "Stáhněte si životopis",
    },
    portfolioSection: {
        heading: (): ReactNode => (
            <>
                <span className={"text-green"}>Portfolio</span> v kostce.
            </>
        ),
        subheading: "Krátký přehled vybraných projektů",
        project_button: "Zjistěte více",
        button: "Zobrazit všechny projetky",

    },
    skills: {
        heading: (): ReactNode => (
            <>
                Klíčové <span className={"text-green"}>dovednosti</span>.
            </>
        ),
        subheading: "Oblasti ve kterých se specializuji",

        card_1_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>Frontend </span>vývoj
            </>
        ),
        card_1_paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat libero semper, congue quam at, pretium purus. Ut sed tempor dolor. Donec pretium elit sit amet tempor condimentum. Quisque accumsan suscipit sapien sit amet accumsan. Phasellus sagittis accumsan nibh, et viverra lorem ',
        card_2_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>UX/UI </span>design
            </>
        ),
        card_2_paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat libero semper, congue quam at, pretium purus. Ut sed tempor dolor. Donec pretium elit sit amet tempor condimentum. Quisque accumsan suscipit sapien sit amet accumsan. Phasellus sagittis accumsan nibh, et viverra lorem ',
        card_3_heading: (): ReactNode => (
            <>
                <span className={'text-green'}>Brand </span>design
            </>
        ),
        card_3_paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat libero semper, congue quam at, pretium purus. Ut sed tempor dolor. Donec pretium elit sit amet tempor condimentum. Quisque accumsan suscipit sapien sit amet accumsan. Phasellus sagittis accumsan nibh, et viverra lorem ',

    },
    contact: {
        heading: (): ReactNode => (
            <>
                Kontaktuje <span className={"text-green"}>mně</span>.
            </>
        ),
        paragraph: (): ReactNode => (
            <>
                Ať už hledáte <span className={'text-green'}>vývojáře, designéra</span>, nebo si jen chcete popovídat - <span className={'text-green'}>rád se vám ozvu</span>.
            </>
        ),
        contact_twitter: "Platforma X",

        contact_form_name: "Celé jméno",
        contact_form_email: "E-mail",
        contact_form_subject: "Předmět",
        contact_form_message: "Zpráva",
        contact_form_button: "Odeslat",
    },
    portfolio: {
        heading: (): ReactNode => (
            <>
                Kompletní <span className={"text-green"}>portfolio</span>.
            </>
        ),
        subheading: "Všechny projekty, na kterých jsem pracoval",
        filters_heading: "Filtrování",
        filters_all: "Vše",
        filters_development: "Vývoj",
        filters_design: "Design",

    },
    nav: {
        Home: "Domů",
        Contact: "Kontakt",
        About: "O mně",
        Portfolio: "Portfolio",
    },
};
export default cs;