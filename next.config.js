/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'i.pravatar.cc"',
      },
    ],
  },
  logging: {
    level: "verbose",
  },
};

module.exports = nextConfig;
