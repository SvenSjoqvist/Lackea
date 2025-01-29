import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Allow optimized images from Cloudinary
      },
    ],
  },
  compress: true, // Enable gzip compression for faster responses
  reactStrictMode: true, // Ensures better performance & debugging
  productionBrowserSourceMaps: true, // Helps debug production errors
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, // Better asset caching
          { key: 'X-Frame-Options', value: 'DENY' }, // Prevent clickjacking
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
});

export default nextConfig;
