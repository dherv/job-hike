/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // TODO: use to launch github codespace - check later if save to keep
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;