import { MetadataRoute } from 'next';
import { panels } from '@/lib/panelsData';

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual production domain
  const baseUrl = 'https://www.cllero.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const panelRoutes = panels.map((panel) => ({
    url: `${baseUrl}/panels/${panel.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...panelRoutes];
}
