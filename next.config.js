/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
