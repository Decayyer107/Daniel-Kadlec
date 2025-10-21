import Project from "../sections/project";
import type { Metadata } from 'next'


export const metadata:Metadata = {
    title: "Daniel Kadlec ● Projekt",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje."
};


export default function ProjectPage() {

    return (
        <Project/>
    );
}
