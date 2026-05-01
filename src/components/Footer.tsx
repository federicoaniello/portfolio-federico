'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800 relative z-10">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p className="font-medium tracking-wide">&copy; {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Federico Aniello</span>. {t('copyright')}</p>
      </div>
    </footer>
  );
}