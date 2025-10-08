'use client';

import Hero from './sections/hero'
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";
import {About as Contact} from "./sections/contact";


export default function Home() {

  return (
      <>
          <Hero/>
          <About/>
          <Portfolio/>
          <Skills/>
          <Contact/>
      </>
  );
}
