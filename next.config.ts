import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

// Passiamo './i18n.ts' perché il tuo file si trova nella root del progetto
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* le tue altre opzioni di configurazione qui */
};

export default withNextIntl(nextConfig);