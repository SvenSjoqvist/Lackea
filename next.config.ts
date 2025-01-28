import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Add your image host here
      },
};
 
export default withNextIntl(nextConfig);