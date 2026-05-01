'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // The pathname is assumed to have a locale prefix.
      // This will replace the current locale with the new one.
      const newPath = `/${nextLocale}${pathname.substring(3)}`;
      router.replace(newPath);
    });
  };

  // Extract the current locale from the pathname
  const currentLocale = pathname.split('/')[1] || 'en';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Federico Aniello</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">{t('about')}</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">{t('skills')}</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</a>
        </nav>
        <div className="flex items-center">
          <select
            onChange={handleLanguageChange}
            defaultValue={currentLocale}
            disabled={isPending}
            className="bg-transparent border border-gray-600 rounded-md p-1.5 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en" className="bg-gray-800">EN</option>
            <option value="it" className="bg-gray-800">IT</option>
            <option value="de" className="bg-gray-800">DE</option>
            <option value="ru" className="bg-gray-800">RU</option>
            <option value="zh" className="bg-gray-800">ZH</option>
          </select>
        </div>
      </div>
    </header>
  );
}