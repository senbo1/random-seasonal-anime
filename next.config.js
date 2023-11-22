/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        port: "",
        pathname: "/images/anime/**",
      }
    ]
  }
};

module.exports = nextConfig;
