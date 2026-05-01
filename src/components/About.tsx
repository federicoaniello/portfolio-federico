'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-16">
          {t('title')}
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700/50">
          <div className="text-gray-300 space-y-6 text-lg text-left leading-relaxed">
            <p className="hover:text-white transition-colors duration-300">{t('paragraph1')}</p>
            <p className="hover:text-white transition-colors duration-300">{t('paragraph2')}</p>
            <p className="hover:text-white transition-colors duration-300">{t('paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}