import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://portfoliofedericoaniello.netlify.app";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = "Federico Aniello | Front-end Developer Portfolio";
  const descriptions: Record<string, string> = {
    en: "Federico Aniello's personal portfolio. I build beautiful and functional web experiences. Specializing in React, Next.js, and modern web technologies.",
    it: "Portfolio personale di Federico Aniello. Sviluppatore Front-end specializzato in React e Next.js. Esperienze web moderne e funzionali.",
    de: "Federico Aniellos persönliches Portfolio. Front-End-Entwickler mit Schwerpunkt auf React und Next.js. Moderne Web-Erlebnisse.",
    ru: "Личное портфолио Федерико Аньелло. Фронтенд-разработчик, специализирующийся на React и Next.js.",
    zh: "Federico Aniello 的个人作品集。专注于 React 和 Next.js 的前端开发人员。"
  };

  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    keywords: ["Federico Aniello", "Front-end Developer", "Web Developer", "React Developer", "Next.js Portfolio", "Portfolio", "Software Engineer"],
    authors: [{ name: "Federico Aniello" }],
    creator: "Federico Aniello",
    publisher: "Federico Aniello",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'it-IT': '/it',
        'de-DE': '/de',
        'ru-RU': '/ru',
        'zh-CN': '/zh',
        'x-default': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Federico Aniello Portfolio",
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@federicoaniello", // Replace if you have a real handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Federico Aniello",
    "url": baseUrl,
    "jobTitle": "Front-end Developer",
    "description": "Federico Aniello is a passionate front-end developer specializing in building modern web applications with React, Next.js, and Vue.",
    "sameAs": [
      "https://github.com/federicoaniello", // Placeholder, adjust if known
      "https://www.linkedin.com/in/federico-aniello-a5867a222" // Placeholder, adjust if known
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}