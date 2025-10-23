
import Hero from './sections/hero'
import About from "./sections/about";
import PortfolioSection from "./sections/portfolioSection";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import {Metadata} from "next";
export const metadata:Metadata = {
    title: "Daniel Kadlec ● Domů",
    description: "Vítejte v mém osobním portfoliu, které představuje projekty z oblasti designu a vývoje."
};


export default function Home() {

  return (
      <>
          <Hero/>
          <About/>
          <PortfolioSection/>
          <Skills/>
          <Contact/>
      </>
  );
}
