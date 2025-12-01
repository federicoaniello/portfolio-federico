import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federico Aniello | Front-end Developer",
  description: "Federico Aniello's personal portfolio.",
};

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
  
  const messages = await getMessages({locale});

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