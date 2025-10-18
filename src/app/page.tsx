
import Hero from './sections/hero'
import About from "./sections/about";
import PortfolioSection from "./sections/portfolioSection";
import Skills from "./sections/skills";
import {About as Contact} from "./sections/contact";
import {Metadata} from "next";

export const metadata = {
    title: "Daniel Kadlec ● Home",
    description: "Welcome to my personal portfolio showcasing design and development projects."
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
