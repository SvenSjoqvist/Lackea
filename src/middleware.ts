import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // List of supported locales
  locales: ['se', 'en', 'es', 'ar'],

  // Default locale (Swedish in this case)
  defaultLocale: 'se',

  // Use 'as-needed' to avoid adding the locale prefix for the default locale
  localePrefix: 'as-needed',

  // Disable automatic locale detection based on the `Accept-Language` header
  localeDetection: false,
});

export const config = {
  // Match all paths except:
  // - Static files (`_next/static`, `_next/image`, `favicon.ico`, etc.)
  // - API routes (`/api/...`)
  // - Image files (`/brands/...`, `/images/...`, etc.)
  matcher: [
    '/((?!_next|api|brands|images|favicon.ico|logo.svg|Hero-tablet.webp|Hero-mobile.webp|Herotest.webp).*)',
  ],
};