'use client';

import { useLanguage } from '@/utils/LanguageContext';
import Hero from './sections/hero'
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";


export default function Home() {

  return (
      <>
          <Hero/>
          <About/>
          <Portfolio/>
          <Skills/>
      </>
  );
}
