'use client';

import { useLanguage } from '@/utils/LanguageContext';

export default function Home() {
    const { dict } = useLanguage();

  return (
      <section className="section min-h-screen flex flex-col items-center justify-center text-black dark:text-white transition-colors duration-500">
      <h1 className="text-4xl font-primary mb-4">{dict.common.hello}</h1>
      <p className="text-lg font-secondary text-black dark:text-gray-300">{dict.common.paragraph}</p>
      </section>
  );
}
