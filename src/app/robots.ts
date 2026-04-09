import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // Replace this with your actual production domain
    sitemap: 'https://itsmita.design/sitemap.xml',
  };
}
