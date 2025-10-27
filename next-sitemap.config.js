/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://energinova.fr',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/_next/*',
    '/404',
    '/admin/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://energinova.fr/sitemap.xml',
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/a-propos'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/prestations'),
    await config.transform(config, '/properties'),
  ],
};