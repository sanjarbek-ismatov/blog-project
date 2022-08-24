/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["wallpaperset.com"],
  },
};

module.exports = nextConfig;
