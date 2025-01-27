import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = 'se' | 'en' | 'es' | 'ar'; 

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale: string | undefined = await requestLocale;
  
    // Ensure that a valid locale is used
    if (locale && routing.locales.includes(locale as Locale)) {
        // Narrow down the type here to ensure it's a valid Locale
        locale = locale as Locale;
      } else {
        // Fallback to the default locale if not valid
        locale = routing.defaultLocale;
      }
    
      return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
      };
    });