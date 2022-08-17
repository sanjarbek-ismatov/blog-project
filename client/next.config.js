/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wallpaperset.com"],
  },

  test: /\.sass$/,
  include: paths.appSrc,
  use: [
    require.resolve("style-loader"),
    {
      loader: require.resolve("css-loader"),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve("sass-loader"),
    },
  ],
};

module.exports = nextConfig;

