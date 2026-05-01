'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      <Scene />
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 leading-tight mb-4 drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 font-medium mb-8">
          {t('subtitle')}
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
          {t('description')}
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r hover:bg-gradient-to-l from-blue-600 to-indigo-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        >
          {t('contact_button')}
        </a>
      </div>
    </section>
  );
}