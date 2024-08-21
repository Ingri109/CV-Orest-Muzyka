import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // distDir: 'out',
};

export default withNextIntl(nextConfig);