import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = "Federico Aniello | Front-end Developer";
  const descriptions: Record<string, string> = {
    en: "Federico Aniello's personal portfolio. I build beautiful and functional web experiences.",
    it: "Portfolio personale di Federico Aniello. Sviluppatore Front-end.",
    de: "Federico Aniellos persönliches Portfolio. Front-End-Entwickler.",
    ru: "Личное портфолио Федерико Аньелло. Фронтенд-разработчик.",
    zh: "Federico Aniello 的个人作品集。前端开发人员。"
  };

  return {
    title,
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title,
      description: descriptions[locale] || descriptions.en,
      type: "website",
      locale: locale,
    }
  };
}

// Modifica qui la definizione dei tipi e degli argomenti
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Params è ora una Promise
}) {
  // Attendi i parametri qui
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}