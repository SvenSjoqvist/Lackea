module.exports = {
    siteUrl: 'https://lackea.se', // Your main domain URL
    generateRobotsTxt: true, // This will automatically generate a robots.txt file
    exclude: [], // No exclusions (so no other pages will be excluded)
  
    i18n: {
      locales: ['se',  'en', 'es', 'ar'], // List your locales here
      defaultLocale: 'se', // The default locale for your site
    },
  
    // Only include localized pages (e.g., /en, /es, /ar)
    additionalPaths: async (config) => {
      const staticPaths = config.i18n.locales.map((locale) => `/${locale}`);
  
      const paths = staticPaths.map((path) => ({
        loc: `${config.siteUrl}${path}`, // Generates /en, /es, /ar URLs
        lastmod: new Date().toISOString(), // Add the current date for last modified
      }));
  
      return paths;
    },
  };
  