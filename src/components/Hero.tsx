'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gray-900">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-blue-400 font-semibold mb-8">
          {t('subtitle')}
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
          {t('description')}
        </p>
        <a 
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
        >
          {t('contact_button')}
        </a>
      </div>
    </section>
  );
}