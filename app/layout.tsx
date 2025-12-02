import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    template: '%s | Federico Aniello',
    default: 'Federico Aniello - Sviluppatore Front-end',
  },
  description: "Portfolio di Federico Aniello, uno sviluppatore Front-end appassionato con base in Italia, che crea esperienze digitali pixel-perfect, coinvolgenti e accessibili.",
  keywords: ['Sviluppatore Front-end', 'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript'],
  authors: [{ name: 'Federico Aniello', url: 'https://portfolio-fa96.netlify.app' }],
  creator: 'Federico Aniello',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://portfolio-fa96.netlify.app',
    title: 'Federico Aniello - Sviluppatore Front-end',
    description: "Portfolio di Federico Aniello, uno sviluppatore Front-end appassionato con base in Italia, che crea esperienze digitali pixel-perfect, coinvolgenti e accessibili.",
    siteName: 'Federico Aniello',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@fed_aniello',
    title: 'Federico Aniello - Sviluppatore Front-end',
    description: "Portfolio di Federico Aniello, uno sviluppatore Front-end appassionato con base in Italia, che crea esperienze digitali pixel-perfect, coinvolgenti e accessibili.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${fontSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
