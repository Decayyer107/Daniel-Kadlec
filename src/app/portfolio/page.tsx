import PortfolioPage from "@/app/sections/portfolioPage";
import type { Metadata } from 'next'


export const metadata:Metadata = {
    title: "Daniel Kadlec ● Portfolio",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje."
};

export default function Portfolio() {
    return(
        <PortfolioPage/>
    );
}
