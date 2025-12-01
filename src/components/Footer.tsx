'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {currentYear} Federico Aniello. {t('copyright')}</p>
      </div>
    </footer>
  );
}