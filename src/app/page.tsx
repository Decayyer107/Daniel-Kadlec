'use client';

import { useLanguage } from '@/utils/LanguageContext';
import Hero from './sections/hero'
import About from "./sections/about";

export default function Home() {

  return (
      <>
        <Hero/>
        <About/>
      </>
  );
}
