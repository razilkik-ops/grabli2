import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grabli.org/';

  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-09-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
