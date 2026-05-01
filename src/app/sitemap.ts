import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://federicoaniello.com'; // Replace with actual domain
    const locales = ['en', 'it', 'de', 'ru', 'zh'];

    const sitemapEntries = locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }));

    return sitemapEntries;
}
