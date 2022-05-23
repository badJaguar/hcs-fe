/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: 'bottom-right',
  images: {
    // eslint-disable-next-line array-bracket-spacing
    domains: ['avatars.githubusercontent.com'],
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  }
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
