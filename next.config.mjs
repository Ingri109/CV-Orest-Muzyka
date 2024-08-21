import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};

console.log('Next.js Config:', nextConfig);
 
export default withNextIntl(nextConfig);